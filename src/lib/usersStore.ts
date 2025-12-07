import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';
import { User } from '../types';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'users.json');

async function ensureFile() {
  try {
    await fs.access(DATA_FILE);
  } catch (e) {
    // create file with empty array
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

async function readUsers(): Promise<User[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, 'utf-8');
  try {
    return JSON.parse(raw) as User[];
  } catch (e) {
    return [];
  }
}

async function writeUsers(users: User[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), 'utf-8');
}

export async function getUsers(): Promise<User[]> {
  return readUsers();
}

export async function getUserById(id: string): Promise<User | undefined> {
  const users = await readUsers();
  return users.find((u) => u.id === id);
}

export async function createUser(payload: Partial<User>): Promise<User> {
  const users = await readUsers();
  const id = Date.now().toString();
  const password = payload.password ? await bcrypt.hash(payload.password, 10) : undefined;
  const user: User = {
    id,
    name: payload.name || 'Unknown',
    email: payload.email || '',
    password,
  };
  users.push(user);
  await writeUsers(users);
  return user;
}

export async function updateUser(id: string, payload: Partial<User>): Promise<User | null> {
  const users = await readUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  const existing = users[idx];
  let password = existing.password;
  if (payload.password) {
    password = await bcrypt.hash(payload.password, 10);
  }
  const updated: User = {
    ...existing,
    name: payload.name ?? existing.name,
    email: payload.email ?? existing.email,
    password,
  };
  users[idx] = updated;
  await writeUsers(users);
  return updated;
}

export async function deleteUser(id: string): Promise<User | null> {
  const users = await readUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  const [deleted] = users.splice(idx, 1);
  await writeUsers(users);
  return deleted;
}
