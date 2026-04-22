import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Utensils, ShoppingBag, Users, Settings, LogOut, ExternalLink, Search, Bell, User, ChevronLeft, ChevronRight, Moon, Sun, Menu as BurgerMenu, Archive, BarChart3, History } from 'lucide-react';

const ADMIN_LINKS = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Menu', path: '/admin/menu', icon: Utensils },
  { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
  { name: 'Customers', path: '/admin/customers', icon: Users },
  { name: 'Archive', path: '/admin/archive', icon: Archive },
  { name: 'Reports', path: '/admin/reports', icon: BarChart3 },
  { name: 'Audit Logs', path: '/admin/logs', icon: History },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

function AdminHeader({ isDarkMode, toggleDarkMode, isCollapsed, setIsCollapsed }: { isDarkMode: boolean, toggleDarkMode: () => void, isCollapsed: boolean, setIsCollapsed: (v: boolean) => void }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`h-20 border-b transition-colors flex items-center justify-between px-8 md:px-12 sticky top-0 z-40 backdrop-blur-sm ${isDarkMode ? 'bg-zinc-900/80 border-white/5' : 'bg-white/80 border-zinc-100'}`}>
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 rounded-sm transition-colors ${isDarkMode ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-zinc-400 hover:text-brand-red hover:bg-zinc-50'}`}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <BurgerMenu className="w-5 h-5" />
        </button>
        <div className="relative w-64 md:w-96 block">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-white/40' : 'text-zinc-400'}`} />
          <input 
            type="text" 
            placeholder="SEARCH..." 
            className={`w-full rounded-sm pl-12 pr-4 py-2 text-[10px] uppercase font-black tracking-widest focus:outline-none focus:border-brand-red transition-colors ${isDarkMode ? 'bg-zinc-800 border-white/10 text-white placeholder:text-white/20' : 'bg-zinc-50 border-zinc-200 text-brand-dark placeholder:text-zinc-400'}`}
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button 
          onClick={toggleDarkMode}
          className={`p-2 transition-colors ${isDarkMode ? 'text-white/40 hover:text-white' : 'text-zinc-400 hover:text-brand-red'}`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className={`relative p-2 transition-colors ${isDarkMode ? 'text-white/40 hover:text-white' : 'text-zinc-400 hover:text-brand-red'}`}>
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-red rounded-full shadow-sm" />
        </button>
        <div className={`h-8 w-[1px] ${isDarkMode ? 'bg-white/10' : 'bg-zinc-100'}`} />
        
        <div className="relative" ref={menuRef}>
          <div 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="text-right hidden sm:block">
              <p className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-brand-dark'}`}>Admin</p>
              <p className="text-[8px] text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-widest">Manager</p>
            </div>
            <div className="w-10 h-10 rounded-sm bg-brand-red flex items-center justify-center text-white ring-2 ring-zinc-100 dark:ring-white/5 group-hover:ring-brand-red/20 transition-all">
              <User className="w-5 h-5" />
            </div>
          </div>

          {showProfileMenu && (
            <div className={`absolute right-0 mt-4 w-48 rounded-sm shadow-2xl border p-2 py-4 ${isDarkMode ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-100'}`}>
              <div className="px-4 py-2 border-b border-zinc-100 dark:border-white/5 mb-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-red">Admin User</p>
                <p className="text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">admin@artisano.pizza</p>
              </div>
              <button 
                onClick={() => navigate('/admin/settings')}
                className="w-full flex items-center gap-3 px-4 py-2 text-[10px] uppercase font-black tracking-widest text-zinc-600 dark:text-white/60 hover:text-brand-red dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-all"
              >
                <Settings className="w-3 h-3" /> Profile Settings
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-full flex items-center gap-3 px-4 py-2 text-[10px] uppercase font-black tracking-widest text-zinc-600 dark:text-white/60 hover:text-brand-red dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/5 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> View Site
              </button>
              <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-white/5">
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full flex items-center gap-3 px-4 py-2 text-[10px] uppercase font-black tracking-widest text-brand-red hover:bg-brand-red hover:text-white transition-all rounded-sm"
                >
                  <LogOut className="w-3 h-3" /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default function AdminLayout() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('admin-dark-mode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('admin-dark-mode', String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen flex font-helvetica transition-colors ${isDarkMode ? 'bg-zinc-950 text-white' : 'bg-white text-brand-dark'}`} id="admin-layout">
      {/* Sidebar Content */}
      <aside className={`transition-all duration-300 bg-[#4A1612] text-white flex flex-col border-r border-white/5 sticky top-0 h-screen shadow-2xl ${isCollapsed ? 'w-20' : 'w-72'}`}>
        <div className={`p-10 transition-opacity mb-4 ${isCollapsed ? 'opacity-0 h-0 p-0 overflow-hidden' : 'opacity-100'}`}>
          <Link to="/" className="flex flex-col group text-white">
            <span className="text-[8px] uppercase tracking-editorial font-black text-white/40">Artisano</span>
            <h1 className="text-xl font-black tracking-tighter uppercase whitespace-nowrap">
              MANAGEMENT <span className="font-thin italic text-lg lowercase tracking-normal text-white/20">& co.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
          {!isCollapsed && <div className="text-[10px] uppercase font-black tracking-widest text-white/20 mb-6 pl-4 font-helvetica">Operations</div>}
          {ADMIN_LINKS.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
            const sidebarRed = '#CD412F';
            return (
              <Link
                key={link.path}
                to={link.path}
                title={isCollapsed ? link.name : ''}
                className={`flex items-center gap-4 px-4 py-4 rounded-sm transition-all group ${
                  isActive 
                  ? 'bg-white text-[#4A1612] shadow-lg translate-x-2' 
                  : 'text-white hover:bg-white/10'
                }`}
              >
                <link.icon className={`w-4 h-4 ${isActive ? 'text-[#4A1612]' : 'text-white group-hover:scale-110 transition-transform'}`} />
                {!isCollapsed && <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className={`p-4 mt-auto border-t border-white/5 bg-black/5 ${isCollapsed ? 'items-center flex flex-col' : ''}`}>
          <Link to="/" className={`flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 p-2 transition-colors rounded-sm ${isCollapsed ? 'justify-center' : ''}`}>
            {!isCollapsed && 'Live Site Preview'} <ExternalLink className="w-3 h-3 ml-2" />
          </Link>
        </div>
      </aside>

      {/* Main Module Content */}
      <main className="flex-1 min-w-0 flex flex-col">
        <AdminHeader 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
        />
        <div className="flex-1 p-10 md:p-16 overflow-y-auto no-scrollbar">
          <Outlet context={{ isDarkMode }} />
        </div>
      </main>
    </div>
  );
}
