import { useState, useEffect } from 'react';
import { Clock, AlertCircle, CheckCircle, ChevronRight, ChevronLeft, Flag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    text: "A particle starts from rest and moves with uniform acceleration. Which of the following graphs best represents its motion?",
    options: ["Displacement-time is a straight line", "Velocity-time is a straight line", "Acceleration-time is a straight line with finite slope", "None of the above"],
    answer: 1,
    subject: "Physics",
  },
  {
    id: 2,
    text: "The hybridization of Carbon in Benzene is:",
    options: ["sp", "sp2", "sp3", "dsp2"],
    answer: 1,
    subject: "Chemistry",
  },
  {
    id: 3,
    text: "If f(x) = x^2 - 4x + 3, then the minimum value of f(x) is:",
    options: ["-1", "0", "1", "-2"],
    answer: 0,
    subject: "Mathematics",
  }
];

export default function TestInterface() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: index });
  };

  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      {/* Test Header */}
      <div className="flex justify-between items-center bg-dark-800 border border-white/5 p-4 rounded-2xl mb-6 shadow-xl">
        <div>
          <h1 className="text-xl font-bold">JEE Mains - Mock Test 1</h1>
          <p className="text-gray-400 text-sm">Physics, Chemistry, Maths</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-dark-900 border border-white/10 px-4 py-2 rounded-xl text-primary-400 font-mono font-bold text-lg shadow-inner">
            <Clock size={20} className="text-primary-500" />
            {formatTime(timeLeft)}
          </div>
          <button 
            onClick={() => setShowSubmitConfirm(true)}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-6 py-2 rounded-xl font-medium transition-colors"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Main Test Area */}
        <div className="flex-1 bg-dark-800 border border-white/5 rounded-2xl flex flex-col shadow-xl overflow-hidden relative">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-dark-800/80 backdrop-blur-sm z-10 relative">
            <span className="text-primary-400 font-semibold bg-primary-500/10 px-3 py-1 rounded-full text-sm">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-gray-400 text-sm">{currentQ.subject}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-8 z-10 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-xl font-medium leading-relaxed">{currentQ.text}</h2>
                
                <div className="space-y-4">
                  {currentQ.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 group ${
                        selectedAnswers[currentQuestionIndex] === i
                          ? 'border-primary-500 bg-primary-500/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                          : 'border-white/10 hover:border-white/30 bg-dark-900'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-colors ${
                        selectedAnswers[currentQuestionIndex] === i
                          ? 'border-primary-500 bg-primary-500 text-white'
                          : 'border-gray-500 text-gray-500 group-hover:border-white group-hover:text-white'
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className={`${selectedAnswers[currentQuestionIndex] === i ? 'text-white font-medium' : 'text-gray-300'}`}>
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-dark-900/50 p-4 border-t border-white/5 flex justify-between items-center z-10 relative">
            <button 
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Flag size={18} />
              Mark for Review
            </button>
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              <button 
                onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                disabled={currentQuestionIndex === questions.length - 1}
                className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-primary-500/30 font-medium"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="w-72 bg-dark-800 border border-white/5 rounded-2xl flex flex-col shadow-xl">
          <div className="p-4 border-b border-white/5 font-bold flex items-center justify-between bg-dark-800/80 rounded-t-2xl">
            Navigation
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-4 gap-3">
              {questions.map((_, i) => {
                const isAnswered = selectedAnswers[i] !== undefined;
                const isActive = currentQuestionIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentQuestionIndex(i)}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                      isActive 
                        ? 'border-2 border-white bg-dark-700 shadow-lg' 
                        : isAnswered 
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' 
                          : 'bg-dark-900 text-gray-400 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            
            {/* Legend */}
            <div className="mt-8 space-y-3 pt-6 border-t border-white/10 opacity-80">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-4 h-4 rounded bg-primary-500/20 border border-primary-500/30"></div> Answered
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-4 h-4 rounded bg-dark-900 border border-white/10"></div> Not Answered
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-4 h-4 rounded border-2 border-white bg-dark-700"></div> Current
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Submit Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-800 border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md w-full"
          >
            <div className="w-16 h-16 bg-red-500/10 text-red-500 flex items-center justify-center rounded-full mx-auto mb-6">
              <AlertCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Submit Test?</h2>
            <p className="text-gray-400 text-center mb-8">
              You have answered {Object.keys(selectedAnswers).length} out of {questions.length} questions. You cannot change your answers after submitting.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors font-medium"
              >
                Cancel
              </button>
              <button 
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white shadow-lg shadow-primary-500/30 font-medium transition-all"
              >
                Yes, Submit
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
