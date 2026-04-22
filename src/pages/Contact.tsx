import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen" id="contact-page">
      {/* Hero Section */}
      <section className="h-[60vh] relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Hero" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="text-brand-red uppercase tracking-editorial text-[10px] font-sans font-black mb-4 block">Opening the Dialogue</span>
          <h1 className="text-6xl md:text-9xl text-white font-black tracking-tighter uppercase leading-[0.8]">
            THE <br/>
            <span className="font-thin italic lowercase tracking-normal">Contact.</span>
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-24">
          <h2 className="text-6xl md:text-8xl mb-8 leading-tight italic">Get in Touch</h2>
          <p className="text-xl text-brand-dark/70 leading-relaxed max-w-2xl font-light">
            Questions about our heritage, catering for your event, or just want to tell us about your experience? We'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-5 space-y-12">
            <div className="bg-white p-10 rounded-[3rem] border border-brand-dark/5 shadow-xl">
              <h3 className="text-3xl mb-8 italic">San Francisco HQ</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-brand-dark/70">124 Napoli St, San Francisco, CA 94107</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-brand-dark/70">+1 (415) 555-0123</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-brand-dark/70">hello@artisanopizza.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl mb-6 font-bold uppercase tracking-widest text-brand-dark/40 text-sm">Common Questions</h4>
              <div className="space-y-6">
                {[
                  { q: 'Do you take reservations?', a: 'Yes, for parties of 6 or more in our SF and Brooklyn locations.' },
                  { q: 'Are there gluten-free options?', a: 'Absolutely. We offer a specialized gluten-free dough, though it is baked in the same oven.' },
                  { q: 'Do you deliver nationwide?', a: 'Currently we deliver within 10 miles of our physical locations.' }
                ].map(faq => (
                  <div key={faq.q} className="border-b border-brand-dark/5 pb-6">
                    <p className="font-bold mb-2 flex items-center gap-2">
                       <MessageSquare className="w-4 h-4 text-brand-gold" /> {faq.q}
                    </p>
                    <p className="text-brand-dark/50 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="bg-brand-dark text-white p-10 md:p-16 rounded-[4rem] shadow-2xl space-y-8" id="contact-form">
              <h3 className="text-4xl italic mb-4">Send a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer">
                  <option className="text-brand-dark">General Inquiry</option>
                  <option className="text-brand-dark">Catering Request</option>
                  <option className="text-brand-dark">Feedback</option>
                  <option className="text-brand-dark">Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-4">Your Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-brand-red transition-all resize-none" placeholder="Tell us what's on your mind..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-95">
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
