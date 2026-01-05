import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType } from '../types';
import { getAuthFromStorage, saveAuthToStorage, clearAuthFromStorage } from '../utils/localStorage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const storedAuth = getAuthFromStorage();
    if (storedAuth) {
      setUser(storedAuth);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, _password: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = { email };
        setUser(userData);
        setIsAuthenticated(true);
        saveAuthToStorage(userData);
        resolve();
      }, 500);
    });
  };

  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    clearAuthFromStorage();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};