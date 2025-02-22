import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">GTA RP Dashboard</h1>
      <div>
        {user ? (
          <span>Welcome, {user.username}!</span>
        ) : (
          <a href="/" className="text-blue-400">Login</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
