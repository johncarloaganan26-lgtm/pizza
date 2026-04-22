import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, DollarSign, PieChart, Download, Filter } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const DATA = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
];

export default function Reports() {
  return (
    <div id="admin-reports" className="space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Business Intelligence</span>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-white">
            Performance <br />
            <span className="font-thin italic lowercase tracking-normal text-zinc-400">Reports.</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 p-4 text-[10px] border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 uppercase font-black tracking-widest rounded-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
             <Filter className="w-4 h-4" /> Filter Range
          </button>
          <button className="flex items-center gap-2 p-4 text-[10px] bg-brand-red text-white uppercase font-black tracking-widest rounded-sm shadow-xl active:scale-95 transition-transform">
             <Download className="w-4 h-4" /> Generate PDF
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Net Conversion', value: '74.2%', icon: TrendingUp },
          { label: 'Avg Order Value', value: '$42.10', icon: DollarSign },
          { label: 'Customer Retention', value: '88%', icon: PieChart },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 rounded-sm shadow-sm group hover:border-brand-red transition-colors">
             <stat.icon className="w-5 h-5 text-brand-red mb-4" />
             <p className="text-[10px] font-black uppercase text-zinc-400 dark:text-zinc-500 tracking-widest mb-1">{stat.label}</p>
             <p className="text-3xl font-black text-brand-dark dark:text-white tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-900 p-10 border border-zinc-100 dark:border-white/5 rounded-sm shadow-sm h-[400px]">
          <h3 className="text-[10px] uppercase font-black text-brand-dark dark:text-white tracking-widest mb-10">Sales Velocity</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={DATA}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888', fontWeight: 900 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888', fontWeight: 900 }} />
              <Tooltip cursor={{ fill: 'rgba(205, 65, 47, 0.05)' }} contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }} />
              <Bar dataKey="sales" fill="#CD412F" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-10 border border-zinc-100 dark:border-white/5 rounded-sm shadow-sm h-[400px]">
          <h3 className="text-[10px] uppercase font-black text-brand-dark dark:text-white tracking-widest mb-10">Revenue Stream</h3>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888', fontWeight: 900 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#888', fontWeight: 900 }} />
              <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }} />
              <Area type="monotone" dataKey="revenue" stroke="#CD412F" fill="#CD412F" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
