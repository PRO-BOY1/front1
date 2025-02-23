import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  const providerValue = { user, loginWithDiscord };

return (
  <AuthContext.Provider value={providerValue}>
    {children}
  </AuthContext.Provider>
);
};

export default AuthContext;
