import { motion } from 'framer-motion';
import { Mail, Lock, User, Target } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-dark-800/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
            <Target size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">EduTrack AI</h1>
          <p className="text-gray-400 text-center">Your smart learning companion.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
              <input 
                type="email" 
                defaultValue="student@edutrack.ai"
                className="w-full bg-dark-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/30 outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-gray-500" size={18} />
              <input 
                type="password" 
                defaultValue="password123"
                className="w-full bg-dark-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/30 outline-none transition-all"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-2 mb-6">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input type="checkbox" className="rounded border-white/20 bg-dark-900 text-primary-500 focus:ring-primary-500/50" />
              Remember me
            </label>
            <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">Forgot password?</a>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-primary-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Sign In to Dashboard
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8">
          Don't have an account? <Link to="/register" className="text-primary-400 font-medium hover:text-primary-300 transition-colors">Create one</Link>
        </p>
      </motion.div>
    </div>
  );
}
