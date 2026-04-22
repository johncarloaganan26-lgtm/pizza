import React from 'react';
import { motion } from 'motion/react';
import { Archive as ArchiveIcon, Search, Calendar, Download } from 'lucide-react';

export default function Archive() {
  return (
    <div id="admin-archive" className="space-y-12">
      <header>
        <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Historical Records</span>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-zinc-100">
          Data <br />
          <span className="font-thin italic lowercase tracking-normal text-zinc-400 dark:text-zinc-500">Archive.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 border-r border-zinc-100 dark:border-white/10 pr-8 space-y-8">
           <div>
             <h3 className="text-[10px] uppercase tracking-widest font-black mb-4 text-brand-dark dark:text-zinc-200">Filter Year</h3>
             <div className="space-y-2">
                {['2024', '2023', '2022', '2021'].map(year => (
                  <button key={year} className="w-full text-left p-3 text-[10px] font-black uppercase tracking-widest border border-zinc-100 dark:border-white/5 hover:border-brand-red transition-all dark:text-zinc-400">
                    Fiscal {year}
                  </button>
                ))}
             </div>
           </div>
        </aside>

        <section className="lg:col-span-3 space-y-8">
          <div className="flex justify-between items-center bg-white dark:bg-zinc-900/50 p-8 border border-zinc-100 dark:border-white/5 shadow-sm rounded-sm">
             <div className="flex items-center gap-4">
                <Search className="w-4 h-4 text-zinc-300 dark:text-zinc-600" />
                <input 
                  type="text" 
                  placeholder="SEARCH ARCHIVES..." 
                  className="bg-transparent border-none focus:outline-none text-[10px] uppercase font-black tracking-widest w-64 dark:text-white dark:placeholder:text-zinc-700"
                />
             </div>
             <button className="flex items-center gap-2 p-3 text-[10px] bg-brand-red text-white uppercase font-black tracking-widest rounded-sm active:scale-95 transition-transform">
                <Download className="w-4 h-4" /> Export All
             </button>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-sm shadow-sm overflow-hidden">
             <table className="w-full text-left font-helvetica">
                <thead className="bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-white/5">
                  <tr>
                    <th className="px-8 py-6 text-[10px] uppercase font-black text-zinc-400 dark:text-zinc-500 tracking-widest">Document</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-black text-zinc-400 dark:text-zinc-500 tracking-widest">Date</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-black text-zinc-400 dark:text-zinc-500 tracking-widest">Size</th>
                    <th className="px-8 py-6 text-[10px] uppercase font-black text-zinc-400 dark:text-zinc-500 tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-white/5">
                  {[1,2,3,4,5].map(i => (
                    <tr key={i} className="group hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors cursor-pointer">
                      <td className="px-8 py-8 flex items-center gap-4">
                        <ArchiveIcon className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-brand-red transition-colors" />
                        <span className="text-[10px] font-black uppercase text-brand-dark dark:text-zinc-200">EOY_REPORT_FY{24-i}.PDF</span>
                      </td>
                      <td className="px-8 py-8 text-[10px] uppercase font-black text-zinc-400 dark:text-zinc-600">Dec {31-i}, 2023</td>
                      <td className="px-8 py-8 text-[10px] uppercase font-black text-zinc-400 dark:text-zinc-600">4.2 MB</td>
                      <td className="px-8 py-8 text-right">
                        <button className="text-[10px] font-black text-brand-red uppercase tracking-widest hover:underline active:scale-95 transition-transform">Download</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        </section>
      </div>
    </div>
  );
}
