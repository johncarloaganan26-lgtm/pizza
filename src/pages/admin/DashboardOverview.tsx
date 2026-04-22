import { motion } from 'motion/react';
import { TrendingUp, ShoppingBag, Users, DollarSign, Activity, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const STATS = [
  { label: 'Revenue (MTD)', value: '$42,890', growth: '+12.5%', icon: DollarSign },
  { label: 'Orders (MTD)', value: '1,420', growth: '+8.2%', icon: ShoppingBag },
  { label: 'Society Members', value: '8,922', growth: '+15.4%', icon: Users },
  { label: 'Yield Rate', value: '94%', growth: '+2.1%', icon: TrendingUp },
];

const PERFORMANCE_DATA = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const CATEGORY_DATA = [
  { name: 'Classic', value: 65 },
  { name: 'Specialty', value: 20 },
  { name: 'Gourmet', value: 15 },
];

export default function DashboardOverview() {
  return (
    <div id="admin-dashboard">
      <header className="mb-16">
        <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Main Dashboard</span>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-zinc-100">
          Overview <br />
          <span className="font-thin italic lowercase tracking-normal text-zinc-400 dark:text-zinc-500">& Performance.</span>
        </h1>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-sm rounded-sm group hover:border-brand-red transition-all cursor-default"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-sm">
                  <stat.icon className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-[10px] font-black text-brand-red">{stat.growth}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-600 mb-2">{stat.label}</p>
              <p className="text-3xl font-black tracking-tighter text-brand-dark dark:text-zinc-100">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Level */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-sm shadow-sm p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-black text-brand-dark dark:text-zinc-200">Revenue Analysis</h3>
              <p className="text-[8px] text-zinc-400 dark:text-zinc-600 font-black uppercase tracking-widest mt-1">Weekly Trends</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Live Data</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#CD412F" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#CD412F" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888" strokeOpacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 900, fill: '#666' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 900, fill: '#666' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0px',
                    fontSize: '10px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: '#fff'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#CD412F" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-brand-red text-white p-10 rounded-sm shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <h3 className="text-[10px] uppercase tracking-widest font-black">Category Distribution</h3>
            </div>
            <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">
              Sales by <br/><span className="font-thin italic lowercase text-white/40">Category.</span>
            </h4>
            <div className="space-y-4">
              {CATEGORY_DATA.map((cat, i) => (
                <div key={cat.name} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>{cat.name}</span>
                    <span className="text-white">{cat.value}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
            <p className="text-[8px] text-white/40 uppercase font-black tracking-widest mb-4">Last updated just now</p>
            <button className="w-full py-4 bg-white text-brand-red text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-zinc-100 transition-all">
              Manage Items
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[120px] -z-0" />
        </div>
      </div>

      {/* Tertiary Level - Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-sm p-10 shadow-sm">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-brand-red" />
              <h3 className="text-[10px] uppercase tracking-widest font-black text-brand-dark dark:text-zinc-200">Recent Activity</h3>
            </div>
            <button className="text-[8px] font-black text-brand-red uppercase tracking-widest hover:underline active:scale-95 transition-transform">Refresh</button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between group cursor-pointer border-b border-zinc-50 dark:border-white/5 pb-4 last:border-0 last:pb-0 font-helvetica">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-white/5 flex items-center justify-center font-black text-[10px] text-brand-red">0{order}</div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tight text-brand-dark dark:text-zinc-100 group-hover:text-brand-red transition-colors">Vesuvian Strike Completed</p>
                    <p className="text-[8px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Main Branch • {order * 4}mins ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-brand-dark dark:text-zinc-100 group-hover:text-brand-red">+$82.40</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-sm p-10 shadow-sm">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-100 dark:border-white/5">
            <h3 className="text-[10px] uppercase tracking-widest font-black text-brand-dark dark:text-zinc-200">Active Customers</h3>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover grayscale brightness-110 active:brightness-100 transition-all" />
                </div>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-zinc-400 dark:text-zinc-600 leading-relaxed uppercase tracking-widest mb-8">
            Currently tracking <span className="text-brand-red font-black">128 active customers</span> on the platform. Data sync successful.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-sm border border-zinc-100 dark:border-white/5 shadow-inner">
              <p className="text-[8px] font-black uppercase text-zinc-400 dark:text-zinc-600 mb-1">New Registrations</p>
              <p className="text-xl font-black text-brand-dark dark:text-zinc-100">14</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-sm border border-zinc-100 dark:border-white/5 shadow-inner">
              <p className="text-[8px] font-black uppercase text-zinc-400 dark:text-zinc-600 mb-1">Engagement Rate</p>
              <p className="text-xl font-black text-brand-dark dark:text-zinc-100">82%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
