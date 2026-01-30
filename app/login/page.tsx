
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return;
    login(email);
    router.push('/checkout');
  };

  return (
    <main className="max-w-sm mx-auto py-20 px-6">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 mb-4"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-3 rounded"
      >
        Login
      </button>
    </main>
  );
}