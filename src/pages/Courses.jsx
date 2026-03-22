import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, PlayCircle } from 'lucide-react';

const courses = [
  { id: 1, title: 'JEE Mains Foundation', category: 'Engineering', progress: 75, totalModules: 40, completedModules: 30, image: 'from-blue-600 to-cyan-500' },
  { id: 2, title: 'Advanced Calculus', category: 'Maths', progress: 45, totalModules: 20, completedModules: 9, image: 'from-purple-600 to-indigo-500' },
  { id: 3, title: 'Organic Chemistry Masterclass', category: 'Chemistry', progress: 10, totalModules: 25, completedModules: 2, image: 'from-orange-500 to-red-500' },
  { id: 4, title: 'Physics: Mechanics & Waves', category: 'Physics', progress: 90, totalModules: 30, completedModules: 27, image: 'from-emerald-500 to-teal-500' },
];

export default function Courses() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-1">
            My Courses
          </h1>
          <p className="text-gray-400">Track and manage your enrolled subjects and modules.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-dark-800 text-white text-sm border border-white/10 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary-500/50 shadow-sm cursor-pointer hover:border-white/20 transition-all font-medium">
            <option>All Categories</option>
            <option>Engineering</option>
            <option>Medical</option>
            <option>UPSC</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 card-glow flex flex-col h-full"
          >
            <div className={`h-32 w-full bg-gradient-to-br ${course.image} relative flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all">
                  <PlayCircle size={32} className="text-white fill-white/20" />
                </button>
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <span className="text-xs font-semibold text-primary-400 mb-2 uppercase tracking-wider">{course.category}</span>
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">{course.title}</h3>
              
              <div className="mt-auto space-y-4">
                <div className="flex justify-between text-sm text-gray-400 mb-1 font-medium">
                  <span>Progress</span>
                  <span className="text-white">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden mb-4">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${course.image}`} 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={14} />
                    <span>{course.totalModules} modules</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 font-medium">
                    <CheckCircle size={14} className={course.progress === 100 ? 'text-green-500' : ''} />
                    <span>{course.completedModules} completed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
