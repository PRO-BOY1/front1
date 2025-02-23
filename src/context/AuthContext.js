import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Define types for our context value
interface AuthContextType {
  user: any | null;
  loginWithDiscord: () => Promise<void>;
}

// Create context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  loginWithDiscord: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any | null>(null);

  const loginWithDiscord = async () => {
    try {
      window.location.href = `https://law-back-end.up.railway.app/auth/discord`;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://law-back-end.up.railway.app/auth/user`, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error("User fetch failed:", error);
      }
    };

    fetchUser();
  }, []);

  // Create the context value object
  const contextValue: AuthContextType = {
    user,
    loginWithDiscord,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
