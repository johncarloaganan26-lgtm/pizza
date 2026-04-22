import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, X, Camera, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../../constants/pizzaData';

export default function MenuManager() {
  const [items] = useState(MENU_ITEMS);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div id="menu-manager">
      <header className="mb-16 flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Menu Catalog</span>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none dark:text-white">
            Menu <br />
            <span className="font-thin italic lowercase tracking-normal text-zinc-400">& Items.</span>
          </h1>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-brand-red text-white p-6 rounded-sm font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-[#CD412F]/90 transition-all shadow-xl hover:shadow-brand-red/20 active:scale-95"
        >
          <Plus className="w-4 h-4" /> ADD NEW ITEM
        </button>
      </header>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-zinc-200 dark:border-white/10 gap-6">
        <div className="flex gap-8">
          {['ALL', 'CLASSIC', 'GOURMET', 'SPECIALTY'].map(filter => (
            <button key={filter} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${filter === 'ALL' ? 'text-brand-red' : 'text-zinc-400 hover:text-brand-red dark:text-zinc-500 dark:hover:text-white'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 dark:text-zinc-600" />
          <input 
            type="text" 
            placeholder="Search catalog..." 
            className="pl-12 pr-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-sm text-xs focus:outline-none focus:border-brand-red w-full md:w-64 uppercase font-black tracking-widest dark:text-white transition-all"
          />
        </div>
      </div>

      {/* Item Table */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-white/10">
              <tr>
                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-500 text-left">Item Details</th>
                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-500">Category</th>
                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-500">Price</th>
                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-white/5">
              {items.map((item) => (
                <tr key={item.id} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-8 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-sm overflow-hidden bg-neutral-100 grayscale group-hover:grayscale-0 transition-all duration-500 ring-1 ring-zinc-200 dark:ring-white/10">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-tight mb-1 dark:text-white">{item.name}</h4>
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Edited: 12 days ago</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-zinc-200 dark:border-white/20 rounded-full dark:text-zinc-400">{item.category}</span>
                  </td>
                  <td className="px-8 py-8">
                    <p className="text-lg font-sans font-medium dark:text-white/80">${item.price.toFixed(2)}</p>
                  </td>
                  <td className="px-8 py-8">
                    <div className="flex justify-end gap-3 opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-brand-red hover:text-white rounded-sm transition-all" title="View Detail">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-brand-red hover:text-white rounded-sm transition-all" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-brand-red hover:text-white rounded-sm transition-all" title="Delete">
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

      {/* Add New Item Modal */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white dark:bg-zinc-900 z-[101] shadow-2xl rounded-sm overflow-hidden border border-zinc-200 dark:border-white/10"
            >
              <div className="flex justify-between items-center p-8 border-b border-zinc-100 dark:border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-2 block">Catalog Management</span>
                  <h2 className="text-3xl font-black uppercase tracking-tighter dark:text-white">New <span className="font-thin italic lowercase">Signature.</span></h2>
                </div>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-sm text-zinc-400"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-10 space-y-8">
                {/* Image Upload Area */}
                <div className="flex gap-8 items-start">
                  <div className="w-40 h-40 bg-zinc-50 dark:bg-zinc-800 border-2 border-dashed border-zinc-200 dark:border-white/10 rounded-sm flex flex-col items-center justify-center text-zinc-400 group cursor-pointer hover:border-brand-red transition-all">
                    <Camera className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Upload Photo</span>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Item Name</label>
                       <input 
                         type="text" 
                         placeholder="e.g. VESUVIAN STRIKE" 
                         className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-white/10 p-3 text-sm font-black focus:outline-none focus:border-brand-red dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 transition-colors"
                       />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Category</label>
                         <select className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-white/10 p-3 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-brand-red dark:text-white transition-colors">
                           <option className="dark:bg-zinc-900">Classic</option>
                           <option className="dark:bg-zinc-900">Gourmet</option>
                           <option className="dark:bg-zinc-900">Specialty</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Price (USD)</label>
                         <input 
                           type="number" 
                           placeholder="0.00" 
                           className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-white/10 p-3 text-sm font-black focus:outline-none focus:border-brand-red dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 transition-colors"
                         />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Description</label>
                   <textarea 
                     rows={3} 
                     placeholder="Dough, San Marzano, Mozzarella..."
                     className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 p-4 text-sm font-sans focus:outline-none focus:border-brand-red dark:text-white resize-none dark:placeholder:text-zinc-700 transition-colors"
                   />
                </div>

                <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-white/10">
                  <button 
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-4 border border-zinc-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all rounded-sm"
                  >
                    Cancel
                  </button>
                  <button className="flex-2 py-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl hover:bg-[#CD412F]/90 transition-all">
                    Register Item to Catalog
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
