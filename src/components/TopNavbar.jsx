import { Bell, Search, User } from 'lucide-react';

export default function TopNavbar() {
  return (
    <div className="h-16 px-6 bg-dark-800 border-b border-white/5 flex items-center justify-between sticky top-0 z-10 shadow-sm backdrop-blur-md bg-opacity-80">
      <div className="relative w-96 flex items-center">
        <Search className="absolute left-3 text-gray-500" size={18} />
        <input 
          type="text"
          placeholder="Search subjects, topics, or materials..."
          className="w-full bg-dark-700/50 text-white rounded-full py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary-500/50 border border-transparent focus:border-primary-500/30 transition-all text-sm shadow-inner"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors text-gray-300">
          <Bell size={20} />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-dark-800"></span>
        </button>
        
        <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-white leading-tight">Alex Johnson</p>
            <p className="text-xs text-primary-400 font-medium tracking-wide">JEE Mains + Advanced</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-secondary-500 to-primary-500 flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center text-white">
              <User size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
