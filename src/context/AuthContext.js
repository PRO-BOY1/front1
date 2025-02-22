import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/status`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const loginWithDiscord = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/discord`;
  };

  return (
    <AuthContext.Provider value={{ user, loginWithDiscord }}>
      {children}
    </AuthContext.Provider>
  );
}
