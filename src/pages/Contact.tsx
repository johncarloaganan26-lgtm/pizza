import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6" id="contact-page">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight italic">Get in Touch</h1>
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
