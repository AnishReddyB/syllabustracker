import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const mockResults = {
  score: 180,
  maxScore: 300,
  accuracy: 82,
  percentile: 94.5,
  subjectBreakdown: [
    { name: 'Physics', correct: 15, incorrect: 3, unattempted: 7 },
    { name: 'Chemistry', correct: 20, incorrect: 2, unattempted: 3 },
    { name: 'Maths', correct: 12, incorrect: 8, unattempted: 5 },
  ],
  insights: [
    { type: 'strength', text: 'Strong in Physical Chemistry and Algebra.' },
    { type: 'weakness', text: 'Needs improvement in Electromagnetism and Coordinate Geometry.' },
    { type: 'suggestion', text: 'Focus on accuracy in Maths to avoid negative marking.' },
  ]
};

const pieData = [
  { name: 'Correct', value: 47, color: '#10b981' }, // Green
  { name: 'Incorrect', value: 13, color: '#ef4444' }, // Red
  { name: 'Unattempted', value: 15, color: '#6b7280' } // Gray
];

export default function ResultsAnalytics() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
            Performance Analytics
          </h1>
          <p className="text-gray-400">Detailed insights and breakdown of your recent mock test.</p>
        </div>
        <button className="bg-dark-800 border border-white/10 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-colors flex items-center gap-2">
          <TrendingUp size={18} /> View History
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <Target className="text-primary-500 mb-4" size={40} />
          <h2 className="text-5xl font-bold text-white mb-2">{mockResults.score}</h2>
          <p className="text-gray-400 font-medium">Out of {mockResults.maxScore}</p>
        </div>
        
        <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <CheckCircle className="text-green-500 mb-4" size={40} />
          <h2 className="text-5xl font-bold text-white mb-2">{mockResults.accuracy}%</h2>
          <p className="text-gray-400 font-medium">Accuracy</p>
        </div>

        <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <TrendingUp className="text-secondary-500 mb-4" size={40} />
          <h2 className="text-5xl font-bold text-white mb-2">{mockResults.percentile}</h2>
          <p className="text-gray-400 font-medium">Percentile</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Pie Chart */}
        <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-6">Overall Breakdown</h2>
          <div className="h-64 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e1e1e', borderColor: '#ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-3xl font-bold text-white">75</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Questions</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-400">{item.name} ({item.value})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-6">Subject Performance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mockResults.subjectBreakdown}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} />
                <RechartsTooltip contentStyle={{ backgroundColor: '#1e1e1e', borderColor: '#ffffff20', borderRadius: '12px' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="correct" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="incorrect" stackId="a" fill="#ef4444" />
                <Bar dataKey="unattempted" stackId="a" fill="#6b7280" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 border border-white/5 p-6 rounded-2xl shadow-xl mt-6">
        <h2 className="text-xl font-bold mb-6">AI Insights & Recommendations</h2>
        <div className="space-y-4">
          {mockResults.insights.map((insight, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-dark-700/30">
              <div className="mt-1">
                {insight.type === 'strength' && <CheckCircle className="text-green-500" size={20} />}
                {insight.type === 'weakness' && <AlertTriangle className="text-red-500" size={20} />}
                {insight.type === 'suggestion' && <Target className="text-primary-500" size={20} />}
              </div>
              <div>
                <h3 className="font-semibold text-white capitalize mb-1">{insight.type}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{insight.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
