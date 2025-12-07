import { NextApiRequest, NextApiResponse } from 'next';
import { getUserById, updateUser, deleteUser } from '../../../lib/usersStore';
import { User } from '../../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const userId = Array.isArray(id) ? id[0] : id;
  if (!userId) return res.status(400).json({ message: 'invalid id' });

  const existing = await getUserById(userId as string);
  if (!existing) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ ...existing, password: undefined });
  }

  if (req.method === 'PUT') {
    const { name, email, password } = req.body as Partial<User>;
  const updated = await updateUser(userId as string, { name, email, password });
    if (!updated) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ ...updated, password: undefined });
  }

  if (req.method === 'DELETE') {
  const deleted = await deleteUser(userId as string);
    if (!deleted) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ ...deleted, password: undefined });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
