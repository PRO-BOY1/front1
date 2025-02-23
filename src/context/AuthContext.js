import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginWithDiscord = async () => {
    try {
      window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/discord`;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error("User fetch failed:", error);
      }
    };

    fetchUser();
  }, []);

  return (
  <AuthContext.Provider value={{ user, loginWithDiscord }}>
    <div>{children}</div>
  </AuthContext.Provider>
); // Ensure the return statement is correctly formatted
};

export default AuthContext;
