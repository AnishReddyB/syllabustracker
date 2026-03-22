import { FileText, Video, Download, Play, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const materials = [
  { id: 1, title: 'Electromagnetism Revision Notes', type: 'pdf', subject: 'Physics', size: '2.4 MB', date: 'Oct 12' },
  { id: 2, title: 'Organic Chemistry Reactions', type: 'video', subject: 'Chemistry', duration: '45 mins', date: 'Oct 10' },
  { id: 3, title: 'Calculus Previous Year Questions', type: 'pdf', subject: 'Maths', size: '5.1 MB', date: 'Oct 08' },
  { id: 4, title: 'Modern Physics Crash Course', type: 'video', subject: 'Physics', duration: '1h 20m', date: 'Oct 05' },
  { id: 5, title: 'Coordination Compounds Formula Sheet', type: 'pdf', subject: 'Chemistry', size: '1.2 MB', date: 'Oct 02' },
];

export default function StudyMaterials() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
            Study Materials
          </h1>
          <p className="text-gray-400">Access your notes, video lectures, and previous year papers.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
            <input 
              type="text"
              placeholder="Search materials..."
              className="w-full bg-dark-800 text-white border border-white/10 rounded-xl py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary-500/50"
            />
          </div>
          <button className="bg-dark-800 border border-white/10 p-2.5 rounded-xl hover:bg-white/5 transition-colors text-gray-400">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {['All Material', 'Physics', 'Chemistry', 'Mathematics', 'Previous Papers', 'Mock Tests'].map((tag, i) => (
          <button 
            key={i}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              i === 0 
                ? 'bg-primary-500 text-white' 
                : 'bg-dark-800 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-dark-800 border border-white/5 p-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 card-glow flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${item.type === 'pdf' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                {item.type === 'pdf' ? <FileText size={24} /> : <Video size={24} />}
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/5 text-gray-400">
                {item.subject}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
            
            <div className="mt-auto pt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{item.type === 'pdf' ? item.size : item.duration} &bull; {item.date}</span>
              
              <button className="bg-white/5 hover:bg-white/10 p-2 rounded-lg text-white transition-colors">
                {item.type === 'pdf' ? <Download size={18} /> : <Play size={18} />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
