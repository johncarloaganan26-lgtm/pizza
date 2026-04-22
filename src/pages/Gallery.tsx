import { motion } from 'motion/react';
import { Instagram, Plus } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1593504049359-74330189a355?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1571091718767-18b5c1457add?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6" id="gallery-page">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight italic">The Visual Journey</h1>
            <p className="text-xl text-brand-dark/70 leading-relaxed font-light">
              Capturing the raw beauty of wood-fired craft, fresh bounty, and the joy of community dining. 
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-red transition-all">
              <Instagram className="w-5 h-5" /> @ARTISANOPIZZA
            </button>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden group cursor-pointer border border-brand-dark/5 shadow-sm"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Plus className="w-8 h-8 text-brand-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 p-12 md:p-24 bg-brand-dark rounded-[4rem] text-center border border-white/5">
          <h2 className="text-4xl md:text-6xl text-white italic mb-8">Share your #ArtisanoMoment</h2>
          <p className="text-white/60 mb-12 max-w-lg mx-auto">Tag us in your stories and become part of our digital gallery.</p>
          <div className="flex justify-center -space-x-6">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-20 h-20 rounded-full border-4 border-brand-dark overflow-hidden ring-1 ring-white/10">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
