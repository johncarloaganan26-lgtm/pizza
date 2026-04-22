import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Specific Admin Credentials
    if (email.toLowerCase() === 'admin@gmail' && password === 'admin') {
      navigate('/admin');
    } else if (email && password) {
      // Normal Login for Everyone else (Simulated success)
      navigate('/');
    } else {
      setError('Please enter your credentials.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-brand-cream" id="login-page">
      {/* Left Pane - Visual */}
      <div className="hidden md:block relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=1200" 
          alt="Artisano Kitchen" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply" />
        <div className="absolute bottom-20 left-20 z-10 max-w-md text-white">
          <span className="text-[10px] uppercase tracking-editorial font-black mb-4 block">The Artisan Society</span>
          <h2 className="text-6xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            Access the <br />
            <span className="font-thin italic lowercase tracking-normal">Gourmet circle.</span>
          </h2>
          <p className="text-white/80 font-sans text-sm leading-relaxed">
            Join our exclusive community for seasonal releases, private tastings, and the story behind every flame-licked crust.
          </p>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex flex-col justify-center p-10 md:p-24 pt-32 pb-20 md:py-12 bg-brand-cream relative min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-12">
            <span className="text-brand-red text-[10px] uppercase tracking-editorial font-black mb-4 block">Welcome to Artisano</span>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Account <br /><span className="font-thin italic lowercase tracking-normal">login.</span></h1>
            <p className="text-brand-dark/50 text-sm font-sans">Please enter your credentials to re-enter the world of flour and fire.</p>
          </div>

          <form className="space-y-8" id="login-form" onSubmit={handleLogin}>
            {error && (
              <div className="text-brand-red text-[10px] font-black uppercase tracking-widest bg-brand-red/5 p-4 border border-brand-red/20">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Email Address</label>
              <input 
                type="text" 
                placeholder="YOUR@EMAIL.COM" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded-sm border-brand-dark/20 accent-brand-red" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/60 group-hover:text-brand-dark transition-colors">Remember me</span>
              </label>
              <Link to="/forgot-password" id="forgot-password-link" className="text-[10px] font-black uppercase tracking-widest text-brand-red hover:text-brand-dark transition-colors">Forgot Password?</Link>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-dark text-white py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl"
            >
              SIGN IN TO ARTISANO
            </button>

            <div className="pt-12 text-center">
              <p className="text-xs text-brand-dark/40 font-sans">
                Not a member yet? <Link to="/register" id="join-society-link" className="text-brand-red font-black uppercase tracking-widest ml-2 hover:underline">Join the society →</Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
