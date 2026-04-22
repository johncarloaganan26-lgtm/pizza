import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Filter, Pizza } from 'lucide-react';
import { MENU_ITEMS } from '../constants/pizzaData';

const CATEGORIES = ['All', 'Classic', 'Specialty', 'Gourmet', 'Custom'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen px-6" id="menu-page">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-[12rem] leading-[0.8] mb-12 font-black tracking-tighter uppercase"
          >
            The <br/>
            <span className="font-thin italic lowercase tracking-normal text-brand-red">Signatures.</span>
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-brand-dark/10 pb-12">
            <p className="text-brand-dark/60 text-base md:text-lg max-w-xl leading-relaxed font-sans">
              From the time-honored classics of Naples to our contemporary gourmet creations. Every pizza is a labor of love, fire, and flour.
            </p>
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-2">Since 1924</span>
              <span className="text-xl font-display italic">Vesuvio's & Co.</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-8 mb-20 items-center justify-between sticky top-20 bg-brand-cream/95 backdrop-blur-md z-40 py-6 border-b border-brand-dark/5">
          <div className="flex gap-10 overflow-x-auto w-full md:w-auto no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all flex-shrink-0 relative py-2 ${
                  activeCategory === cat 
                  ? 'text-brand-red after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-red' 
                  : 'text-brand-dark/40 hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/30" />
            <input 
              type="text" 
              placeholder="Search recipes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-brand-dark/5 border-none rounded-full px-12 py-3 text-sm focus:ring-2 focus:ring-brand-red/20 focus:outline-none"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col border-b border-brand-dark/10 pb-12 last:border-0"
            >
              <div className="aspect-[4/3] relative overflow-hidden mb-8 bg-neutral-100 rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-2 py-1 text-[8px] uppercase tracking-widest font-black">
                  {item.category}
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-baseline mb-4 border-b border-brand-dark/5 pb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-brand-red transition-colors">{item.name}</h3>
                  <span className="text-lg font-sans font-light italic text-brand-dark/40">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-brand-dark/60 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-black tracking-widest text-brand-red">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-[10px] uppercase font-black tracking-widest border-b border-brand-dark pb-1 hover:text-brand-red hover:border-brand-red transition-all">
                    ADD TO PILE +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32">
            <Pizza className="w-16 h-16 text-brand-dark/10 mx-auto mb-6" />
            <h3 className="text-2xl font-display text-brand-dark/40 italic">No recipes match your search.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
