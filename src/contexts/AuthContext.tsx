// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setCurrentUser(userCredential.user);
  };

  const isAuthenticated = !!currentUser;

  const value = {
    currentUser,
    login,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
