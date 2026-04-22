import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-brand-cream" id="forgot-password-page">
      {/* Left Pane - Visual */}
      <div className="hidden md:block relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=1200" 
          alt="Artisano Oven" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply" />
        <div className="absolute bottom-20 left-20 z-10 max-w-md text-white">
          <span className="text-[10px] uppercase tracking-editorial font-black mb-4 block">Recovery Portal</span>
          <h2 className="text-6xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            Rekindle the <br />
            <span className="font-thin italic lowercase tracking-normal">Access flame.</span>
          </h2>
          <p className="text-white/80 font-sans text-sm leading-relaxed">
            Every master loses their way occasionally. Let us help you find your path back to the wood-fired tradition.
          </p>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex flex-col justify-center p-10 md:p-24 pt-32 pb-20 md:py-12 bg-brand-cream relative min-h-screen">
        <Link to="/login" className="absolute top-10 left-10 md:top-12 md:left-24 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-dark/40 hover:text-brand-red transition-all z-10">
          <ArrowLeft className="w-3 h-3" /> Back to Login
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="mb-12">
            <span className="text-brand-red text-[10px] uppercase tracking-editorial font-black mb-4 block">Security First</span>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Reset <br /><span className="font-thin italic lowercase tracking-normal">password.</span></h1>
            <p className="text-brand-dark/50 text-sm font-sans">Enter the email associated with your society account.</p>
          </div>

          {!isSubmitted ? (
            <form className="space-y-8" id="forgot-password-form" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="YOUR@EMAIL.COM" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-dark text-white py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl"
              >
                SEND RECOVERY LINK
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-red/5 border border-brand-red/20 p-8 text-center"
            >
              <h3 className="text-brand-red text-[10px] uppercase font-black tracking-widest mb-4">Email Dispatched</h3>
              <p className="text-sm text-brand-dark/60 font-sans leading-relaxed">
                If an account exists for <span className="font-bold text-brand-dark">{email}</span>, a recovery link will arrive shortly.
              </p>
              <Link to="/login" className="inline-block mt-8 text-[10px] font-black uppercase tracking-widest text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-red hover:border-brand-red transition-all">
                Return to Login
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
