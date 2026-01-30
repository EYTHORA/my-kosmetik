'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../components/AuthProvider';

export default function AdminPage() {
  const { user, login, logout, updateProfile } = useAuth();
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: user?.name || '',
    age: user?.age || '',
    birthDate: user?.birthDate || '',
    avatar: user?.avatar || '',
  });

  // LOGIN
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-xl font-semibold mb-4 text-center">
            Login / Register
          </h1>

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 border rounded mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={() => login(email)}
            className="w-full bg-black text-white py-3 rounded-full"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // PROFILE VIEW
  if (!editing) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            My Profile
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src={user.avatar || '/avatar-placeholder.png'}
              alt="User avatar"
              width={96}
              height={96}
              className="rounded-full object-cover border"
            />

            <div>
              <p className="font-semibold text-lg">
                {user.name || 'No name'}
              </p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>

          <div className="space-y-2 text-gray-700">
            <p>Age: {user.age || '-'}</p>
            <p>Date of Birth: {user.birthDate || '-'}</p>
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={() => setEditing(true)}
              className="w-full bg-black text-white py-3 rounded-full"
            >
              Edit Profile
            </button>

            <button
              onClick={logout}
              className="w-full border py-3 rounded-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  // EDIT PROFILE
  const handleSave = () => {
    const ageNum = Number(form.age);

    if (!form.name) {
      setError('Name is required');
      return;
    }

    if (!ageNum || ageNum < 13 || ageNum > 100) {
      setError('Age must be between 13 and 100');
      return;
    }

    setError('');
    updateProfile(form);
    setEditing(false);
  };

  const handleImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, avatar: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Edit Profile
        </h1>

        <div className="flex justify-center mb-4">
          <label className="cursor-pointer">
            <Image
              src={form.avatar || '/avatar-placeholder.png'}
              alt="Edit avatar"
              width={96}
              height={96}
              className="rounded-full object-cover border"
            />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                e.target.files && handleImage(e.target.files[0])
              }
            />
          </label>
        </div>

        <label className="sr-only" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          className="w-full p-3 border rounded mb-3"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label className="sr-only" htmlFor="age">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="w-full p-3 border rounded mb-3"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <label className="sr-only" htmlFor="birthDate">
          Date of Birth
        </label>
        <input
          id="birthDate"
          type="date"
          className="w-full p-3 border rounded mb-3"
          value={form.birthDate}
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
        />

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-3 rounded-full"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}