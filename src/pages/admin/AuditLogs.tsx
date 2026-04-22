import React from 'react';
import { motion } from 'motion/react';
import { History, ShieldCheck, AlertCircle, UserCheck, Search } from 'lucide-react';

const LOGS = [
  { action: 'Member Profile Update', user: 'Admin', time: '10:24 AM', status: 'Success', severity: 'Low' },
  { action: 'Security Policy Modification', user: 'SuperAdmin', time: '09:15 AM', status: 'Warning', severity: 'High' },
  { action: 'New Inventory Item Added', user: 'Kitchen_Lead', time: '08:45 AM', status: 'Success', severity: 'Low' },
  { action: 'Order #5922 Refunded', user: 'Admin', time: 'Yesterday', status: 'Information', severity: 'Medium' },
  { action: 'Database Connectivity Test', user: 'System', time: 'Yesterday', status: 'Success', severity: 'Low' },
];

export default function AuditLogs() {
  return (
    <div id="admin-audit-logs" className="space-y-12">
      <header>
        <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Security & Traceability</span>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-white">
          Audit <br />
          <span className="font-thin italic lowercase tracking-normal text-zinc-400">Logs.</span>
        </h1>
      </header>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-sm overflow-hidden min-h-[600px] shadow-sm">
        <div className="p-8 border-b border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-zinc-50/50 dark:bg-zinc-800/50">
           <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 px-6 py-2 rounded-sm shadow-sm ring-1 ring-zinc-50 dark:ring-white/5">
             <Search className="w-4 h-4 text-zinc-300 dark:text-white/20" />
             <input 
               type="text" 
               placeholder="SEARCH SYSTEM LOGS..." 
               className="bg-transparent border-none focus:outline-none text-[10px] font-black uppercase tracking-widest w-72 dark:text-white"
             />
           </div>
           <div className="flex gap-4">
             <button className="px-6 py-2 border border-zinc-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all rounded-sm">Download RAW</button>
             <button className="px-6 py-2 bg-brand-dark dark:bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-sm hover:shadow-xl transition-all active:scale-95">Filter by Severity</button>
           </div>
        </div>

        <div className="divide-y divide-zinc-100 dark:divide-white/5">
          {LOGS.map((log, i) => (
            <div key={i} className="p-8 flex items-center justify-between hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors cursor-pointer">
              <div className="flex items-center gap-8">
                 <div className={`p-4 rounded-sm ${i === 1 ? 'bg-orange-50 dark:bg-orange-950/30 text-orange-600' : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-400'}`}>
                    {i === 1 ? <AlertCircle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                 </div>
                 <div>
                   <p className="text-sm font-black uppercase tracking-tight text-brand-dark dark:text-white mb-1 group-hover:text-brand-red transition-colors">{log.action}</p>
                   <div className="flex items-center gap-4">
                     <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-widest flex items-center gap-2">
                       <UserCheck className="w-3 h-3" /> {log.user}
                     </span>
                     <span className="text-[10px] text-zinc-300 dark:text-zinc-600 font-black uppercase tracking-widest">• {log.time}</span>
                   </div>
                 </div>
              </div>

              <div className="text-right">
                <span className={`text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${
                  log.severity === 'High' 
                    ? 'border-brand-red text-brand-red bg-brand-red/5' 
                    : 'border-zinc-200 dark:border-white/10 text-zinc-400 dark:text-zinc-500'
                }`}>
                  {log.severity} Priority
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 flex justify-center">
           <button className="text-[10px] font-black uppercase tracking-widest text-brand-red hover:underline active:scale-95 transition-transform">Load More Records ...</button>
        </div>
      </div>
    </div>
  );
}
