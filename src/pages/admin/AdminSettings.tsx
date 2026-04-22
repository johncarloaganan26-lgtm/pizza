import { Bell, Lock, Globe, Camera } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div id="admin-settings">
      <header className="mb-16">
        <span className="text-[10px] uppercase tracking-editorial font-black text-brand-red mb-4 block">Settings</span>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none text-brand-dark dark:text-zinc-100">
          Brand <br />
          <span className="font-thin italic lowercase tracking-normal text-zinc-400 dark:text-zinc-500">& Environment.</span>
        </h1>
      </header>

      <div className="max-w-4xl space-y-12">
        {/* Profile Section */}
        <section className="bg-white dark:bg-zinc-900 p-12 border border-zinc-100 dark:border-white/5 rounded-sm shadow-sm">
          <div className="flex justify-between items-start mb-12 border-b border-zinc-100 dark:border-white/5 pb-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-black mb-2 text-brand-dark dark:text-zinc-100">Admin Profile</h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 font-black uppercase tracking-widest leading-relaxed">Manage your personal identification on the platform.</p>
            </div>
            <button className="bg-brand-red text-white py-3 px-8 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-sm">Save Changes</button>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="w-32 h-32 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-white/10 rounded-full flex items-center justify-center relative overflow-hidden group shadow-inner">
               <img src="https://i.pravatar.cc/300?u=admin" alt="admin" className="w-full h-full object-cover shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700" />
               <button className="absolute inset-0 bg-brand-red/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                 <Camera className="w-5 h-5" />
               </button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-8 text-zinc-900 dark:text-zinc-100">
               <div className="space-y-2 border-b border-zinc-100 dark:border-white/10 pb-4">
                 <label className="text-[8px] uppercase font-black text-zinc-400 dark:text-zinc-600 tracking-widest">Public Alias</label>
                 <p className="text-sm font-black uppercase tracking-tight">Artisano Admin</p>
               </div>
               <div className="space-y-2 border-b border-zinc-100 dark:border-white/10 pb-4">
                 <label className="text-[8px] uppercase font-black text-zinc-400 dark:text-zinc-600 tracking-widest">Email Address</label>
                 <p className="text-sm font-black uppercase tracking-tight">admin@artisano.pizza</p>
               </div>
            </div>
          </div>
        </section>

        {/* Global Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-zinc-900 p-10 border border-zinc-100 dark:border-white/5 rounded-sm space-y-8 shadow-sm">
              <div className="flex items-center gap-4 text-brand-red">
                <Globe className="w-5 h-5" />
                <h4 className="text-[10px] font-black uppercase tracking-widest ">Site Visibility</h4>
              </div>
              <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-sm border border-zinc-100 dark:border-white/5">
                <span className="text-xs font-black uppercase tracking-tight text-brand-dark dark:text-zinc-100">Maintenance Mode</span>
                <div className="w-12 h-6 bg-zinc-200 dark:bg-zinc-700 rounded-full relative cursor-pointer group">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-zinc-400 rounded-full shadow-sm group-hover:scale-110 transition-transform" />
                </div>
              </div>
           </div>

           <div className="bg-white dark:bg-zinc-900 p-10 border border-zinc-100 dark:border-white/5 rounded-sm space-y-8 shadow-sm">
              <div className="flex items-center gap-4 text-brand-red">
                <Bell className="w-5 h-5" />
                <h4 className="text-[10px] font-black uppercase tracking-widest ">Notifications</h4>
              </div>
              <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-sm border border-zinc-100 dark:border-white/5">
                <span className="text-xs font-black uppercase tracking-tight text-brand-dark dark:text-zinc-100">Real-time Feed</span>
                <div className="w-12 h-6 bg-brand-red rounded-full relative cursor-pointer shadow-sm group">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform" />
                </div>
              </div>
           </div>
        </div>

        {/* Security Section */}
        <section className="bg-brand-red text-white p-12 border border-white/5 rounded-sm shadow-xl relative overflow-hidden">
           <div className="relative z-10">
             <div className="flex items-center gap-4 mb-8">
                <Lock className="w-5 h-5 text-white" />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Account Security</h4>
             </div>
             <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-widest mb-8 max-w-md">Password last modified 24 days ago. Multi-factor authentication is active on this terminal.</p>
             <button className="text-[10px] font-black text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-brand-red transition-all uppercase tracking-widest rounded-sm active:scale-95">
                Change Password
             </button>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px]" />
        </section>
      </div>
    </div>
  );
}
