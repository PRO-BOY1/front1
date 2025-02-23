import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_URL;

export const fetcher = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE}${endpoint}`, {
      withCredentials: true, // Ensures cookies (if needed) are sent with requests
    });
    return response.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};
