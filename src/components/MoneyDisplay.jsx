import { useEffect, useState } from 'react';
import axios from 'axios';

function MoneyDisplay() {
  const [money, setMoney] = useState({ cash: 0, bank: 0, total: 0 });

  useEffect(() => {
    async function fetchMoney() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/money`, {
          withCredentials: true,
        });
        setMoney(res.data);
      } catch (error) {
        console.error("Error fetching money data:", error);
      }
    }
    fetchMoney();
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold text-white">Your Balance</h3>
      <p className="text-green-400">💵 Cash: ${money.cash}</p>
      <p className="text-blue-400">🏦 Bank: ${money.bank}</p>
      <p className="text-yellow-400">💰 Total: ${money.total}</p>
    </div>
  );
}

export default MoneyDisplay;
