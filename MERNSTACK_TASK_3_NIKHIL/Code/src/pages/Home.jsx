// src/pages/Home.jsx
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-500 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Welcome Back
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Sign in to explore your personalized dashboard and more.
        </p>
        <button
          onClick={login}
          className="mt-6 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

export default Home;
