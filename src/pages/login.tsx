import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || 'Login failed');
      }
      const data = await res.json();
      // store minimal user info in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(data));
      }
      router.push('/users');
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: '100%' }} />
        </div>
        <div>
          <button type="submit" disabled={loading}>{loading ? 'Logging in…' : 'Login'}</button>
        </div>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
