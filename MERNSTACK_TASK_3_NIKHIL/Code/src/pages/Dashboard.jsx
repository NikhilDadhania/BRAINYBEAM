// src/pages/Dashboard.jsx
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-bl from-green-400 via-teal-500 to-blue-600 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-teal-300 to-blue-500">
          Welcome to Dashboard
        </h1>
        <p className="mt-4 text-lg text-white/80">
          You have successfully accessed a protected route!
        </p>
        <button
          onClick={logout}
          className="mt-6 px-10 py-3 text-lg font-medium bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
