import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated registration
    navigate('/login');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-brand-cream" id="register-page">
      {/* Left Pane - Visual */}
      <div className="hidden md:block relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=1200" 
          alt="Artisano Table" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply" />
        <div className="absolute bottom-20 left-20 z-10 max-w-md text-white">
          <span className="text-[10px] uppercase tracking-editorial font-black mb-4 block">The Inner Circle</span>
          <h2 className="text-6xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
            Join the <br />
            <span className="font-thin italic lowercase tracking-normal">Gourmet society.</span>
          </h2>
          <p className="text-white/80 font-sans text-sm leading-relaxed">
            Membership is more than just discounts. It's about access to our secret dough labs, early harvest tastings, and limited-run specialties.
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
            <span className="text-brand-red text-[10px] uppercase tracking-editorial font-black mb-4 block">New Membership</span>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Create <br /><span className="font-thin italic lowercase tracking-normal">account.</span></h1>
            <p className="text-brand-dark/50 text-sm font-sans">Begin your journey with Artisano today.</p>
          </div>

          <form className="space-y-6" id="register-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="FIRST LAST" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="YOUR@EMAIL.COM" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Password</label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40">Confirm</label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm font-sans focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/10"
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 w-4 h-4 rounded-sm border-brand-dark/20 accent-brand-red" />
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40 group-hover:text-brand-dark transition-colors leading-relaxed">
                  I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY. I UNDERSTAND THAT BEING PART OF THE SOCIETY MEANS RESPECTING THE RITUAL.
                </span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-dark text-white py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl"
            >
              COMMIT TO THE SOCIETY
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
