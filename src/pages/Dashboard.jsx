import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';
import { Target, Book, BrainCircuit, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockData = [
  { name: 'Mon', score: 65, avg: 60 },
  { name: 'Tue', score: 72, avg: 62 },
  { name: 'Wed', score: 68, avg: 65 },
  { name: 'Thu', score: 85, avg: 68 },
  { name: 'Fri', score: 82, avg: 70 },
  { name: 'Sat', score: 90, avg: 72 },
  { name: 'Sun', score: 95, avg: 75 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: 'Current Accuracy', value: '85%', icon: Target, color: 'text-green-400', bg: 'bg-green-400/10' },
    { title: 'Syllabus Covered', value: '62%', icon: Book, color: 'text-primary-400', bg: 'bg-primary-400/10' },
    { title: 'Tests Taken', value: '24', icon: BrainCircuit, color: 'text-secondary-400', bg: 'bg-secondary-400/10' },
    { title: 'Study Hours', value: '142h', icon: Clock, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-1">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-gray-400">Here's your performance summary for JEE Mains preparation.</p>
        </div>
        <button 
          onClick={() => navigate('/test')}
          className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-primary-500/30 transition-all font-medium"
        >
          Take Mock Test
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform duration-300 card-glow relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl ${stat.bg} -mr-10 -mt-10 pointer-events-none`}></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium relative z-10">{stat.title}</h3>
            <p className="text-3xl font-bold mt-1 text-white relative z-10">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Performance Trend</h2>
            <select className="bg-dark-700 text-white text-sm border-none rounded-lg px-3 py-1.5 outline-none focus:ring-1 focus:ring-primary-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1e1e', borderColor: '#ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                <Line type="monotone" dataKey="avg" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-6">Upcoming Topics</h2>
          <div className="space-y-4">
            {[
              { subject: 'Physics', topic: 'Thermodynamics', time: 'Today, 4:00 PM', color: 'from-blue-500 to-cyan-500' },
              { subject: 'Maths', topic: 'Integration', time: 'Tomorrow, 10:00 AM', color: 'from-primary-500 to-secondary-500' },
              { subject: 'Chemistry', topic: 'Organic Reactions', time: 'Wed, 2:00 PM', color: 'from-orange-500 to-red-500' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-pointer">
                <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${item.color}`}></div>
                <div>
                  <h4 className="font-semibold text-white">{item.topic}</h4>
                  <p className="text-sm text-gray-400">{item.subject} &bull; {item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium">
            View All Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
