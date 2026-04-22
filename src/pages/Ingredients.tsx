import { motion } from 'motion/react';
import { Apple, Droplets, Sun, Wind } from 'lucide-react';

export default function Ingredients() {
  return (
    <div className="pt-32 pb-24 px-6" id="ingredients-page">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 max-w-3xl">
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight italic">Born of the Earth</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed font-light">
            We believe that 80% of the pizza happens before it even enters our kitchen. It happens in the soil, the water, and the hands of our farmers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Apple />, title: 'San Marzano', desc: 'DOP tomatoes from the Sarno Valley.' },
            { icon: <Droplets />, title: 'Spring Water', desc: 'Filtered volcanic water for the dough.' },
            { icon: <Sun />, title: 'Mediterranean', desc: 'Herbs grown in sun-drenched gardens.' },
            { icon: <Wind />, title: 'Wild Yeast', desc: 'Our 100-year-old sourdough starter.' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-brand-dark/5 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red mx-auto mb-6">
                {stat.icon}
              </div>
              <h3 className="text-xl mb-2">{stat.title}</h3>
              <p className="text-brand-dark/50 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl mb-8 italic">The Italian Quartet</h2>
              <div className="space-y-12">
                {[
                  { name: 'Flour (Farina)', detail: 'We use Type 00 "Blu" flour for its incredible elasticity and protein content, allowing for the light, airy cornicione.' },
                  { name: 'Water (Acqua)', detail: 'Our water is pH-balanced and chilled to exactly 14°C to control the fermentation speed and flavor complexity.' },
                  { name: 'Salt (Sale)', detail: 'Hand-harvested sea salt from Trapani, Sicily. No chemicals, just the pure taste of the Mediterranean.' },
                  { name: 'Yeast (Lievito)', detail: 'Our "Mother" starter has been kept alive since 1924, giving our crust a depth of flavor that commercial yeast can\'t touch.' }
                ].map(item => (
                  <div key={item.name} className="border-l-2 border-brand-gold/30 pl-8">
                    <h4 className="text-2xl mb-4 italic text-brand-gold">{item.name}</h4>
                    <p className="text-brand-dark/70 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[4rem] overflow-hidden aspect-square border-8 border-brand-cream shadow-2xl">
              <img src="https://images.unsplash.com/photo-1606335543042-57c525922933?auto=format&fit=crop&q=80&w=1200" alt="Ingredients" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        <section className="bg-brand-red text-white p-12 md:p-32 rounded-[4rem] text-center">
          <h2 className="text-5xl md:text-7xl mb-8 italic">Sustainability First</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-white/80 mb-12">
            90% of our ingredients are sourced within a 100-mile radius of our restaurants, or directly imported from DOP certified producers in Italy. 
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-[0.2em]">
            <span>100% Plastic Free</span>
            <span>Compostable Packing</span>
            <span>Local Farm Support</span>
            <span>Carbon Neutral Delivery</span>
          </div>
        </section>
      </div>
    </div>
  );
}
