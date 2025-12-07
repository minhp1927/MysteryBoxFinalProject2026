import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../../data/users';
import { User } from '../../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const userId = Array.isArray(id) ? id[0] : id;

  const index = users.findIndex((u) => u.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(users[index]);
  }

  if (req.method === 'PUT') {
    const { name, email, password } = req.body as Partial<User>;
    const existing = users[index];
    const updated: User = {
      ...existing,
      name: name ?? existing.name,
      email: email ?? existing.email,
      password: password ?? existing.password,
    };
    users[index] = updated;
    return res.status(200).json(updated);
  }

  if (req.method === 'DELETE') {
    const deleted = users.splice(index, 1)[0];
    return res.status(200).json(deleted);
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
