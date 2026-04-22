import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Quote } from 'lucide-react';
import { STORY_STAGES, MENU_ITEMS } from '../constants/pizzaData';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden" id="home-page">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-[1.05]"
            poster="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000"
          >
            <source src="https://player.vimeo.com/external/370331327.sd.mp4?s=d0046648E8fd14436A188F3A2290B55EB593F4D4&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Enhanced Dark Overlay */}
          <div className="absolute inset-0 bg-zinc-950/60 mix-blend-multiply transition-opacity duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >
          <span className="text-brand-red uppercase tracking-editorial text-[10px] font-sans font-black mb-6 block">Artisano Pizzeria & Co. — Established 1924</span>
          <h1 className="text-7xl md:text-[10rem] text-white mb-10 leading-[0.8] font-black tracking-tighter">
            FLOUR <br />
            <span className="font-thin italic">AND FIRE.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed mb-12">
            Honoring the tradition of <span className="text-white font-bold">TIPO-00</span> grain and the blistering heat of the Vesuvian flame.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link to="/menu" className="bg-brand-red text-white px-12 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-2xl">
              EXPLORE SIGNATURES
            </Link>
            <Link to="/story" className="text-white px-12 py-5 font-black text-xs uppercase tracking-widest border border-white/20 rounded-sm hover:bg-white/10 transition-all">
              VIEW THE JOURNEY
            </Link>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Scroll for our story</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Storytelling Scroll Sections */}
      {STORY_STAGES.map((stage, index) => (
        <section 
          key={stage.id} 
          className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-0 relative items-stretch border-b border-brand-dark/5"
          id={`story-section-${stage.id}`}
        >
          {/* Narrative Content */}
          <div className={`col-span-12 md:col-span-5 p-10 md:p-24 flex flex-col justify-center relative ${index % 2 === 0 ? 'md:order-2 border-l border-brand-dark/5' : 'md:order-1 border-r border-brand-dark/5'}`}>
            <span className={`absolute ${index % 2 === 0 ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} top-10 md:top-24 text-[120px] font-thin opacity-5 pointer-events-none select-none`}>0{index + 1}</span>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="text-brand-red font-sans font-black text-[10px] uppercase tracking-editorial mb-4 block">Act 0{index + 1} — The Narrative</span>
              <h2 className="text-5xl md:text-7xl mb-8 leading-[0.9] font-black uppercase tracking-tighter">
                {stage.title.split(' ')[0]} <br/>
                <span className="font-thin italic lowercase tracking-normal">{stage.title.split(' ')[1] || 'Process'}</span>
              </h2>
              <p className="text-brand-dark/60 text-sm md:text-base leading-relaxed mb-10 font-sans max-w-sm">
                {stage.content}
              </p>
              <Link to="/story" className="inline-flex items-center gap-4 text-brand-dark text-[10px] font-black uppercase tracking-widest group">
                READ THE CHAPTER <div className="w-8 h-[1px] bg-brand-dark group-hover:w-12 transition-all" />
              </Link>
            </motion.div>
          </div>
          
          {/* Visual Content */}
          <div className={`col-span-12 md:col-span-7 h-[60vh] md:h-auto relative overflow-hidden bg-neutral-100 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={stage.image} 
              alt={stage.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-red/5 mix-blend-multiply" />
          </div>
        </section>
      ))}

      {/* Featured Specialties Carousel (Simulated) */}
      <section className="py-24 bg-[#141414] text-white overflow-hidden" id="specialties">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-5xl md:text-6xl mb-4 italic">The Masterpieces</h2>
            <p className="text-white/60">Selected highlights from our current winter menu.</p>
          </div>
          <Link to="/menu" className="hidden md:flex items-center gap-2 text-brand-gold hover:text-white transition-colors">
            VIEW FULL MENU <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-8 px-6 overflow-x-auto pb-10 no-scrollbar">
          {MENU_ITEMS.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="min-w-[300px] md:min-w-[400px] bg-brand-dark border border-white/5 rounded-3xl overflow-hidden group"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display">{item.name}</h3>
                  <span className="text-brand-gold font-bold">${item.price}</span>
                </div>
                <p className="text-white/60 text-sm mb-6 line-clamp-2">{item.description}</p>
                <div className="flex gap-2 mb-6">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-brand-red hover:border-brand-red transition-all text-xs font-bold uppercase tracking-widest">
                  Quick Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-cream border-t border-brand-dark/5" id="testimonials">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 text-brand-red/20 mx-auto mb-8" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              "The best wood-fired pizza I've had outside of Naples. The crust is an absolute cloud of perfection."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10" />
              <div className="text-left">
                <p className="font-bold">Alessandro Rossi</p>
                <p className="text-sm text-brand-dark/50">Michelin Guide Contributor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-red text-white text-center relative overflow-hidden" id="final-cta">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 opacity-10 pointer-events-none"
        >
          <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=2000" alt="bg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-7xl mb-8">Ready for a slice of <br /><span className="italic">perfection?</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/menu" className="bg-white text-brand-red px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
              ORDER FOR DELIVERY
            </Link>
            <Link to="/locations" className="text-white px-12 py-5 rounded-full font-bold text-xl border border-white/30 hover:bg-white/10 transition-all">
              FIND A LOCATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
