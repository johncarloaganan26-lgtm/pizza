import { motion } from 'motion/react';
import { ShoppingBag, Clock, CheckCircle2, Flame } from 'lucide-react';

export default function OrdersManager() {
  return (
    <div id="orders-manager">
      <header className="mb-16">
        <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Real-time Orders</span>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-white">
          Active <br />
          <span className="font-thin italic lowercase tracking-normal text-zinc-400">& Orders.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 rounded-sm flex items-center gap-6 shadow-sm">
          <div className="p-4 bg-orange-50 dark:bg-orange-500/10 text-orange-600 rounded-sm"><Flame className="w-6 h-6" /></div>
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400 dark:text-zinc-500">Cooking</p>
            <p className="text-3xl font-black tracking-tighter text-brand-dark dark:text-white">12</p>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 rounded-sm flex items-center gap-6 shadow-sm">
          <div className="p-4 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-sm"><Clock className="w-6 h-6" /></div>
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400 dark:text-zinc-500">Delivering</p>
            <p className="text-3xl font-black tracking-tighter text-brand-dark dark:text-white">08</p>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 rounded-sm flex items-center gap-6 shadow-sm">
          <div className="p-4 bg-green-50 dark:bg-green-500/10 text-green-600 rounded-sm"><CheckCircle2 className="w-6 h-6" /></div>
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400 dark:text-zinc-500">Completed Today</p>
            <p className="text-3xl font-black tracking-tighter text-brand-dark dark:text-white">144</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 rounded-sm overflow-hidden shadow-sm">
        <div className="p-8 border-b border-zinc-100 dark:border-white/5 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-800">
          <h3 className="text-[10px] uppercase tracking-widest font-black text-brand-dark dark:text-white">Active Queue</h3>
          <div className="flex gap-4">
            <button className="text-[8px] font-black uppercase tracking-widest px-4 py-2 bg-brand-red text-white rounded-sm active:scale-95 transition-transform">Filter: Active</button>
            <button className="text-[8px] font-black uppercase tracking-widest px-4 py-2 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 rounded-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Export Orders</button>
          </div>
        </div>
        <div className="divide-y divide-zinc-100 dark:divide-white/5">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="p-8 flex items-center justify-between hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
              <div className="flex items-center gap-10">
                <div className="text-center w-20">
                  <p className="text-[10px] font-black uppercase text-zinc-300 dark:text-zinc-600 tracking-widest mb-1">ID</p>
                  <p className="text-xs font-black text-brand-dark dark:text-white">#ART-{5000 + i}</p>
                </div>
                <div className="h-10 w-[1px] bg-zinc-100 dark:bg-white/5" />
                <div>
                  <p className="text-xs font-black uppercase mb-1 text-brand-dark dark:text-white">Customer Name (Member)</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">3 Items • $74.50 • Delivery to Location</p>
                </div>
              </div>
              <div className="flex items-center gap-12 text-zinc-900 dark:text-white">
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-zinc-300 dark:text-zinc-600 tracking-widest mb-1">Duration</p>
                  <p className="text-xs font-black text-brand-dark dark:text-white">12:04 (STATION 2)</p>
                </div>
                <button className="bg-brand-red text-white text-[8px] font-black uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-brand-red/90 transition-all active:scale-95">
                  COMPLETE ORDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
