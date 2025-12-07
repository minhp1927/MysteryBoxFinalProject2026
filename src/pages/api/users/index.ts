import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../../data/users';
import { User } from '../../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return list of users
    return res.status(200).json(users);
  }

  if (req.method === 'POST') {
    const { name, email, password } = req.body as Partial<User>;

    if (!name || !email) {
      return res.status(400).json({ message: 'name and email are required' });
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    users.push(newUser);

    return res.status(201).json(newUser);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
