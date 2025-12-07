import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers, createUser } from '../../../lib/usersStore';
import { User } from '../../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const u = await getUsers();
    return res.status(200).json(u.map((x) => ({ ...x, password: undefined })));
  }

  if (req.method === 'POST') {
    const { name, email, password } = req.body as Partial<User>;

    if (!name || !email) {
      return res.status(400).json({ message: 'name and email are required' });
    }

    const newUser = await createUser({ name, email, password });

    return res.status(201).json({ ...newUser, password: undefined });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
