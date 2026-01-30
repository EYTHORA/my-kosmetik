
'use client';
import React, { createContext, useContext, useState } from 'react';

type User = {
  email: string;
  name?: string;
  age?: string;
  birthDate?: string;
  avatar?: string; // FOTO PROFIL
};

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  

  const [user, setUser] = useState<User | null>(() => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('user');
  return saved ? JSON.parse(saved) : null;
});

  const login = (email: string) => {
    const newUser = { email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem('user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}