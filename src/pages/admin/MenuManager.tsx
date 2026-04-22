import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import { MENU_ITEMS } from '../../constants/pizzaData';

export default function MenuManager() {
  const [items] = useState(MENU_ITEMS);

  return (
    <div id="menu-manager">
      <header className="mb-16 flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Menu Catalog</span>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none dark:text-white">
            Menu <br />
            <span className="font-thin italic lowercase tracking-normal text-brand-red/40">& Items.</span>
          </h1>
        </div>
        <button className="bg-brand-red text-white p-6 rounded-sm font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-[#CD412F]/90 transition-all shadow-lg hover:shadow-brand-red/20 shadow-brand-red/10">
          <Plus className="w-4 h-4" /> ADD NEW ITEM
        </button>
      </header>

      {/* Control Bar */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-brand-red/5 dark:border-white/5">
        <div className="flex gap-8">
          {['ALL', 'CLASSIC', 'GOURMET', 'SPECIALTY'].map(filter => (
            <button key={filter} className={`text-[10px] font-black uppercase tracking-[0.2em] ${filter === 'ALL' ? 'text-brand-red' : 'text-brand-red/30 hover:text-brand-red dark:text-white/20 dark:hover:text-white'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-red/20" />
          <input 
            type="text" 
            placeholder="Search catalog..." 
            className="pl-12 pr-6 py-3 bg-white dark:bg-zinc-900 border border-brand-red/5 dark:border-white/5 rounded-sm text-xs focus:outline-none focus:border-brand-red w-64 uppercase font-black tracking-widest dark:text-white"
          />
        </div>
      </div>

      {/* Item Table */}
      <div className="bg-white dark:bg-zinc-900 border border-brand-red/5 dark:border-white/5 rounded-sm overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-brand-cream/30 dark:bg-zinc-800 border-b border-brand-red/5 dark:border-white/5">
            <tr>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-brand-red/40 dark:text-white/40 text-left">Item Details</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-brand-red/40 dark:text-white/40">Category</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-brand-red/40 dark:text-white/40">Price</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-brand-red/40 dark:text-white/40 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-red/5 dark:divide-white/5">
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-brand-cream/10 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-8 py-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-sm overflow-hidden bg-neutral-100 grayscale group-hover:grayscale-0 transition-all duration-500 ring-1 ring-brand-red/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tight mb-1 dark:text-white">{item.name}</h4>
                      <p className="text-[10px] text-brand-red/40 dark:text-white/20 uppercase tracking-widest">Edited: 12 days ago</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-8">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-brand-red/10 dark:border-white/10 rounded-full dark:text-white/60">{item.category}</span>
                </td>
                <td className="px-8 py-8">
                  <p className="text-lg font-sans font-light italic dark:text-white/80">${item.price.toFixed(2)}</p>
                </td>
                <td className="px-8 py-8">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-3 hover:bg-brand-red hover:text-white rounded-sm transition-all dark:text-white/40" title="View Detail">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-3 hover:bg-brand-red hover:text-white rounded-sm transition-all dark:text-white/40" title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 hover:text-brand-red rounded-sm transition-all dark:text-white/40" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
