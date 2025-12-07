import React, { useEffect, useState } from 'react';
import { User } from '../../types';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('Failed to load users');
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setEditingId(null);
  };

  const handleCreateOrUpdate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      const payload = { name, email, password };
      let res: Response;
      if (editingId) {
        res = await fetch(`/api/users/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) throw new Error('Request failed');
      await fetchUsers();
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    }
  };

  const startEdit = (u: User) => {
    setEditingId(u.id);
    setName(u.name);
    setEmail(u.email);
    setPassword(u.password ?? '');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    try {
      const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      await fetchUsers();
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>

      <form onSubmit={handleCreateOrUpdate} style={{ marginBottom: 20 }}>
        <div>
          <label>Name</label>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={{ marginTop: 8 }}>
          <button type="submit">{editingId ? 'Update' : 'Create'}</button>
          {editingId && (
            <button type="button" onClick={resetForm} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <ul>
        {users.map((u) => (
          <li key={u.id} style={{ marginBottom: 8 }}>
            <strong>{u.name}</strong> — {u.email}
            <div style={{ display: 'inline-block', marginLeft: 12 }}>
              <button onClick={() => startEdit(u)}>Edit</button>
              <button onClick={() => handleDelete(u.id)} style={{ marginLeft: 6 }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
