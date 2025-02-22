import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const { loginWithDiscord } = useAuth();

  return (
    <div className="h-screen flex justify-center items-center bg-primary">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
        <img src="/images/logo.png" alt="Logo" className="w-16 mx-auto mb-4" />
        <h2 className="text-white text-xl font-bold mb-4">Login</h2>
        <button
          onClick={loginWithDiscord}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
        >
          Login with Discord
        </button>
      </div>
    </div>
  );
}

export default Login;
