import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const LOCATIONS = [
  {
    id: 1,
    name: 'The Original San Francisco',
    address: '124 Napoli St, San Francisco, CA 94107',
    hours: 'Mon-Sun: 11:30 AM - 10:00 PM',
    phone: '(415) 555-0123',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    name: 'Artisano Brooklyn',
    address: '89 Hearth Ave, Brooklyn, NY 11201',
    hours: 'Mon-Sun: 12:00 PM - 11:00 PM',
    phone: '(718) 555-9876',
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    name: 'Artisano London',
    address: '22 Brick Lane, London E1 6RF, UK',
    hours: 'Tue-Sun: 12:00 PM - 10:00 PM',
    phone: '+44 20 7946 0123',
    img: 'https://images.unsplash.com/photo-1550966841-39c4d8a6b521?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Locations() {
  return (
    <div className="pt-32 pb-24 px-6" id="locations-page">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight italic">Find Us</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed max-w-2xl font-light">
            Each Artisano location is uniquely designed to reflect the architectural heritage of its city while housing our signature wood-fired sanctuary.
          </p>
        </header>

        <div className="flex flex-col gap-24">
          {LOCATIONS.map((loc, i) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`overflow-hidden rounded-[3rem] aspect-[16/10] shadow-2xl ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
              <div className="p-4 md:p-12">
                <h3 className="text-4xl mb-8 italic">{loc.name}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest mb-1 text-brand-dark/40">Address</p>
                      <p className="text-lg text-brand-dark/70">{loc.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest mb-1 text-brand-dark/40">Hours</p>
                      <p className="text-lg text-brand-dark/70">{loc.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm uppercase tracking-widest mb-1 text-brand-dark/40">Phone</p>
                      <p className="text-lg text-brand-dark/70">{loc.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-4">
                  <button className="flex-1 bg-brand-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-red transition-all">
                    <Navigation className="w-4 h-4" /> GET DIRECTIONS
                  </button>
                  <button className="flex-1 border border-brand-dark/10 text-brand-dark py-4 rounded-xl font-bold hover:bg-brand-dark hover:text-white transition-all">
                    BOOK A TABLE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 h-[500px] bg-brand-dark/5 rounded-[4rem] flex items-center justify-center relative overflow-hidden border border-brand-dark/5">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" alt="Map" className="w-full h-full object-cover opacity-20 grayscale pointer-events-none" referrerPolicy="no-referrer" />
          <div className="absolute z-10 text-center px-6">
            <h2 className="text-4xl md:text-5xl italic mb-6">Explore the Map</h2>
            <p className="text-brand-dark/50 mb-8 max-w-lg mx-auto">See all our global partners, local farms, and community dining rooms.</p>
            <button className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold shadow-xl">OPEN INTERACTIVE MAP</button>
          </div>
        </section>
      </div>
    </div>
  );
}
