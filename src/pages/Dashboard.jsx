import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 text-white">Welcome to the Law Town RP Dashboard!</div>
    </div>
  );
}

export default Dashboard;
