import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Star } from 'lucide-react';

export default function SocietyManager() {
  return (
    <div id="society-manager">
      <header className="mb-16">
        <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Society List</span>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-white">
          Our <br />
          <span className="font-thin italic lowercase tracking-normal text-brand-red/40">Customers.</span>
        </h1>
      </header>

      <div className="bg-white dark:bg-zinc-900 border border-brand-red/5 dark:border-white/5 rounded-sm overflow-hidden shadow-sm">
        <div className="p-8 border-b border-brand-red/5 dark:border-white/5 flex justify-between items-center bg-brand-cream/10 dark:bg-zinc-800">
          <h3 className="text-[10px] uppercase tracking-widest font-black text-brand-dark dark:text-white">User Registry</h3>
          <input 
            type="text" 
            placeholder="Search registry..." 
            className="px-6 py-2 bg-white dark:bg-zinc-700 border border-brand-red/5 dark:border-white/5 rounded-sm text-[10px] uppercase font-black w-64 focus:outline-none focus:border-brand-red dark:text-white"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-brand-red/5 dark:divide-white/5">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="p-10 hover:bg-brand-cream/30 dark:hover:bg-zinc-800/50 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-brand-cream dark:bg-zinc-800 rounded-sm flex items-center justify-center grayscale group-hover:grayscale-0 transition-all overflow-hidden border border-brand-red/5 dark:border-white/5">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover shadow-inner" />
                </div>
                <div className="flex items-center gap-1 text-brand-red">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[8px] font-black uppercase tracking-tighter">VIP</span>
                </div>
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-1 text-brand-dark dark:text-white">Enzo Ferrari</h4>
              <p className="text-[10px] text-brand-red/40 dark:text-white/30 uppercase tracking-widest mb-8 border-b border-brand-red/5 dark:border-white/5 pb-4">ID No. 891{i} — Since Nov 2023</p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-brand-dark/40 dark:text-white/40">
                  <Mail className="w-3 h-3 text-brand-red/30" />
                  <span className="text-[10px] font-medium font-sans">enzo.fer@maranello.it</span>
                </div>
                <div className="flex items-center gap-3 text-brand-dark/40 dark:text-white/40">
                  <Calendar className="w-3 h-3 text-brand-red/30" />
                  <span className="text-[10px] font-medium font-sans">Last Order: Oct 24, 12:30 PM</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-brand-cream/50 dark:bg-zinc-800/50 rounded-sm border border-brand-red/5 dark:border-white/5">
                  <p className="text-[8px] uppercase tracking-widest font-black text-brand-red/20 dark:text-white/20 mb-1">Lifetime Value</p>
                  <p className="text-sm font-black text-brand-dark dark:text-white">$2,840.00</p>
                </div>
                <div className="p-4 bg-brand-cream/50 dark:bg-zinc-800/50 rounded-sm border border-brand-red/5 dark:border-white/5">
                  <p className="text-[8px] uppercase tracking-widest font-black text-brand-red/20 dark:text-white/20 mb-1">Total Orders</p>
                  <p className="text-sm font-black text-brand-dark dark:text-white">104</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
