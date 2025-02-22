import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="block py-2 px-3 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/money" className="block py-2 px-3 hover:bg-gray-700 rounded">
            Money
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
