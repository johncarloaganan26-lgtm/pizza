import { motion } from 'motion/react';

export default function Story() {
  return (
    <div className="min-h-screen" id="story-page">
      {/* Hero Section */}
      <section className="h-[60vh] relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2000" 
            alt="Story Hero" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="text-brand-red uppercase tracking-editorial text-[10px] font-sans font-black mb-4 block">Our Heritage & Soul</span>
          <h1 className="text-6xl md:text-9xl text-white font-black tracking-tighter uppercase leading-[0.8]">
            THE <br/>
            <span className="font-thin italic lowercase tracking-normal">Narrative.</span>
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-8xl md:text-[12rem] leading-[0.8] mb-12 italic text-brand-dark/5 absolute -z-10 select-none hidden md:block"
          >
            Heritage
          </motion.h1>
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl mb-8 leading-tight italic">Our Journey</h2>
            <p className="text-xl text-brand-dark/70 leading-relaxed mb-6 font-light">
              Authenticity isn't a destination; it's a relentless pursuit of the perfect crumb, the sweetest tomato, and the cleanest flame.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=1200" 
              alt="Founding Pizza" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
          </div>
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Part One: The Old World</span>
            <h3 className="text-4xl md:text-5xl mb-8">Naples, 1924</h3>
            <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed">
              <p>
                The story of Artisano didn't begin in a boardroom or a test kitchen. It began in the dust of a Neapolitan street, where my grandfather Marco apprentice under the great masters of the era.
              </p>
              <p>
                He learned that the dough is alive, and like any living thing, it requires patience, respect, and a specific kind of love that only comes from knowing your craft is being shared with family.
              </p>
              <blockquote className="border-l-4 border-brand-red pl-6 py-2 italic text-2xl text-brand-dark font-display my-10">
                "We don't sell pizza. We sell a ninety-second window into our soul."
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-brand-dark text-white rounded-[4rem] p-10 md:p-24 mb-32 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-brand-gold text-4xl mb-4 italic">The Mission</h4>
              <p className="text-white/60 leading-relaxed">
                To preserve and celebrate the ancient art of Neapolitan pizza making, while embracing the best of modern sustainable farming.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold text-4xl mb-4 italic">The Vision</h4>
              <p className="text-white/60 leading-relaxed">
                To become a sanctuary for those who value craftsmanship, family, and the simple joy of exceptional food.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold text-4xl mb-4 italic">The Heart</h4>
              <p className="text-white/60 leading-relaxed">
                Our kitchen is the heart of Artisano. Open, honest, and filled with the crackle of wood fire and laughter.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-32">
          <h3 className="text-5xl md:text-7xl mb-16 italic">Meet the Artisans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Chef Giovanni', role: 'Master Pizzaiolo', bio: 'Grandson of Marco, trained in Naples for 15 years.', img: 'https://images.unsplash.com/photo-1577214495773-5146b4ff9a70?auto=format&fit=crop&q=80&w=800' },
              { name: 'Elena Rossi', role: 'Head of Sourcing', bio: 'Botanist turned farmer, obsessed with tomato genetics.', img: 'https://images.unsplash.com/photo-1595273670150-db0a3d39074c?auto=format&fit=crop&q=80&w=800' },
              { name: 'Luca Mancini', role: 'Dough Specialist', bio: 'The man behind our signature 48-hour fermentation.', img: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?auto=format&fit=crop&q=80&w=800' }
            ].map(chef => (
              <div key={chef.name} className="flex flex-col items-center group">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl border-4 border-brand-cream ring-1 ring-brand-dark/10">
                  <img src={chef.img} alt={chef.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl mb-1">{chef.name}</h4>
                <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-4">{chef.role}</p>
                <p className="text-brand-dark/50 text-sm max-w-xs">{chef.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
