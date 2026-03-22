import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Circle, BookOpen } from 'lucide-react';

const mockSyllabus = [
  {
    subject: 'Physics',
    progress: 45,
    chapters: [
      { id: 'p1', title: 'Units & Measurements', completed: true },
      { id: 'p2', title: 'Kinematics', completed: true },
      { id: 'p3', title: 'Laws of Motion', completed: false },
      { id: 'p4', title: 'Work, Energy, & Power', completed: false },
    ],
  },
  {
    subject: 'Chemistry',
    progress: 72,
    chapters: [
      { id: 'c1', title: 'Some Basic Concepts', completed: true },
      { id: 'c2', title: 'Structure of Atom', completed: true },
      { id: 'c3', title: 'Chemical Bonding', completed: true },
      { id: 'c4', title: 'Thermodynamics', completed: false },
    ],
  },
  {
    subject: 'Mathematics',
    progress: 30,
    chapters: [
      { id: 'm1', title: 'Sets, Relations, Functions', completed: true },
      { id: 'm2', title: 'Complex Numbers', completed: false },
      { id: 'm3', title: 'Matrices & Determinants', completed: false },
      { id: 'm4', title: 'Calculus', completed: false },
    ],
  },
];

export default function SyllabusTracker() {
  const [expandedSubject, setExpandedSubject] = useState('Physics');

  const toggleSubject = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
            Syllabus Tracker
          </h1>
          <p className="text-gray-400">Track your progress Subject &rarr; Topic &rarr; Subtopic.</p>
        </div>
      </div>

      <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="text-primary-500" />
          JEE Mains - Complete Syllabus
        </h2>
        
        <div className="space-y-4">
          {mockSyllabus.map((item, index) => (
            <motion.div
              layout
              key={item.subject}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 rounded-xl bg-dark-700/30 overflow-hidden"
            >
              <button
                onClick={() => toggleSubject(item.subject)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-8 h-8 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center font-bold">
                    {item.subject.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.subject}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                      <div className="w-32 h-1.5 bg-dark-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span>{item.progress}% Complete</span>
                    </div>
                  </div>
                </div>
                
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    expandedSubject === item.subject ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSubject === item.subject && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5 bg-dark-800/50"
                  >
                    <div className="p-4 space-y-2">
                      {item.chapters.map((chapter) => (
                        <div
                          key={chapter.id}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <button className="text-gray-500 hover:text-primary-500 transition-colors focus:outline-none">
                              {chapter.completed ? (
                                <CheckCircle className="text-green-500" size={20} />
                              ) : (
                                <Circle size={20} />
                              )}
                            </button>
                            <span className={`${chapter.completed ? 'text-gray-300 line-through decoration-gray-500' : 'text-white'}`}>
                              {chapter.title}
                            </span>
                          </div>
                          <span className="text-xs bg-dark-900 px-2 py-1 rounded text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            {chapter.completed ? 'Completed' : 'Mark complete'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
