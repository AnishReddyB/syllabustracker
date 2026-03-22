import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, ListTodo, FileText, PenTool, BarChart3, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: ListTodo, label: 'Syllabus Tracker', path: '/syllabus' },
  { icon: FileText, label: 'Study Materials', path: '/materials' },
  { icon: PenTool, label: 'Tests', path: '/test' },
  { icon: BarChart3, label: 'Results', path: '/results' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-dark-800 border-r border-white/5 flex flex-col p-4 shadow-xl">
      <div className="flex items-center gap-3 px-2 mb-8 mt-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
          EA
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
          EduTrack AI
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300
              ${isActive 
                ? 'bg-primary-500/10 text-primary-400 font-medium' 
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }
            `}
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} className={isActive ? 'text-primary-400' : 'text-gray-400'} />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 w-1 h-8 bg-primary-500 rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-white/10 mt-auto space-y-2">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-gray-200 hover:bg-white/5 w-full transition-all duration-300">
          <Settings size={20} />
          Settings
        </button>
        <NavLink to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full transition-all duration-300">
          <LogOut size={20} />
          Sign Out
        </NavLink>
      </div>
    </div>
  );
}
