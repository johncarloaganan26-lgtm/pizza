import { Link } from 'react-router-dom';
import { Pizza, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-cream text-brand-dark pt-20 pb-10 border-t border-brand-dark/10" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-brand-dark/5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-editorial font-sans font-bold text-brand-red">The Artisan Standard</span>
            <h4 className="text-3xl font-black uppercase tracking-tighter">
              VESUVIO'S <span className="font-thin italic lowercase tracking-normal">& CO.</span>
            </h4>
          </div>
          <p className="text-brand-dark/40 text-xs font-sans leading-relaxed max-w-xs">
            Established 1924 — Napoli / NYC. Honoring the patience of our ancestors through every wood-fired masterpiece.
          </p>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
            <span className="hover:text-brand-red cursor-pointer">Instagram</span>
            <span className="hover:text-brand-red cursor-pointer">Facebook</span>
            <span className="hover:text-brand-red cursor-pointer">Twitter</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-brand-red mb-8">Navigation</h4>
          <ul className="flex flex-col gap-4 text-xs font-sans font-medium text-brand-dark/60 uppercase tracking-wider">
            <li><Link to="/menu" className="hover:text-brand-dark transition-colors underline-offset-4 hover:underline">The Signatures</Link></li>
            <li><Link to="/story" className="hover:text-brand-dark transition-colors underline-offset-4 hover:underline">The Narrative</Link></li>
            <li><Link to="/ingredients" className="hover:text-brand-dark transition-colors underline-offset-4 hover:underline">The Sourcing</Link></li>
            <li><Link to="/locations" className="hover:text-brand-dark transition-colors underline-offset-4 hover:underline">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-brand-red mb-8">Contact</h4>
          <ul className="flex flex-col gap-4 text-xs font-sans text-brand-dark/60 uppercase tracking-wider">
            <li className="flex items-center gap-3">82 Bleecker St, New York</li>
            <li className="flex items-center gap-3">+1 (555) 749-9227</li>
            <li className="flex items-center gap-3">hello@artisanopizza.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-brand-red mb-8">Newsletter</h4>
          <p className="text-xs text-brand-dark/40 mb-6 max-w-xs font-sans">Ready to experience? Join the inner circle.</p>
          <form className="flex flex-col gap-4" id="newsletter-form">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-b border-brand-dark/20 py-2 text-[10px] font-black uppercase w-full focus:outline-none focus:border-brand-red transition-colors"
            />
            <button className="text-[10px] font-black uppercase tracking-widest text-left w-fit hover:text-brand-red transition-all">
              SUBSCRIBE →
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-brand-dark/30">
        <p>© 2024 Artisano Pizzeria. Built by the fire.</p>
        <div className="flex gap-6 italic tracking-normal lowercase text-xs">
          <Link to="#" className="hover:text-brand-dark">privacy_policy</Link>
          <Link to="#" className="hover:text-brand-dark">terms_of_service</Link>
        </div>
      </div>
    </footer>
  );
}
