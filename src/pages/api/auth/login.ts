import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';
import bcrypt from 'bcryptjs';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'users.json');

async function readUsers() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) return res.status(400).json({ message: 'email and password are required' });
  const users = await readUsers();
  const u = users.find((x: any) => x.email === email);
  if (!u) return res.status(401).json({ message: 'Invalid credentials' });
  const ok = u.password ? await bcrypt.compare(password, u.password) : false;
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  // return public user info
  const safe = { id: u.id, name: u.name, email: u.email };
  return res.status(200).json(safe);
}
