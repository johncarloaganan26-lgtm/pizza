import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pizza, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Story', path: '/story' },
  { name: 'Menu', path: '/menu' },
  { name: 'Ingredients', path: '/ingredients' },
  { name: 'Locations', path: '/locations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);
  const showDarkNavbar = isScrolled || isAuthPage;

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        showDarkNavbar ? 'bg-brand-cream/95 backdrop-blur-md border-brand-dark/10 py-3 shadow-none' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-full">
        {/* Logo Zone */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex flex-col group w-fit" id="logo-link">
            <span className={`text-[10px] uppercase tracking-editorial font-sans font-bold transition-colors ${
              showDarkNavbar ? 'text-brand-red' : 'text-brand-red'
            }`}>The Artisan Standard</span>
            <h1 className={`text-3xl font-black tracking-tighter flex items-baseline gap-1 transition-colors ${
              showDarkNavbar ? 'text-brand-dark' : 'text-white'
            }`}>
              ARTISANO <span className="font-thin italic text-2xl">& CO.</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex flex-[2] justify-center items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-widest font-sans font-semibold transition-all hover:text-brand-red px-2 py-1 ${
                location.pathname === link.path ? 'text-brand-red border-b border-brand-red' : (showDarkNavbar ? 'text-brand-dark' : 'text-white/90')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions Zone - Right */}
        <div className="flex-1 hidden md:flex justify-end items-center gap-8">
          <Link 
            to="/login"
            className={`text-[11px] uppercase tracking-widest font-black transition-all hover:text-brand-red ${
              showDarkNavbar ? 'text-brand-dark' : 'text-white'
            }`}
          >
            LOGIN
          </Link>
          <Link 
            to="/menu" 
            className="bg-brand-red text-white px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-dark transition-all"
          >
            ORDER NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            className={`p-2 transition-colors ${showDarkNavbar ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-dark/5 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-medium text-brand-dark hover:text-brand-red"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-medium text-brand-dark hover:text-brand-red border-t border-brand-dark/5 pt-6"
            >
              LOGIN
            </Link>
            <Link 
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="bg-brand-red text-white py-4 rounded-sm text-center font-black uppercase tracking-widest text-xs"
            >
              ORDER NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
