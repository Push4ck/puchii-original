import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Film, Music, Clock, Mail, Cake, Star, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'countdown', label: 'Countdown', icon: Clock },
  { id: 'timeline', label: 'Timeline', icon: Star },
  { id: 'gallery', label: 'Gallery', icon: Film },
  { id: 'playlist', label: 'Playlist', icon: Music },
  { id: 'reasons', label: 'Reasons', icon: Heart },
  { id: 'letter', label: 'Letter', icon: Mail },
  { id: 'cake', label: 'Cake', icon: Cake },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#060609]/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,105,180,0.08)]'
            : 'bg-gradient-to-b from-[#060609]/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('home')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-5 h-5 text-pink-primary fill-pink-primary" />
              <span
                className="font-bebas text-2xl tracking-[0.15em]"
                style={{
                  background: 'linear-gradient(135deg, #FF69B4, #2E8B7B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                PUCHII
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3 py-2 rounded-lg flex items-center gap-1.5 text-[13px] font-medium transition-all duration-300 cursor-pointer ${
                      isActive ? 'text-pink-primary' : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{ background: 'rgba(255,105,180,0.08)', border: '1px solid rgba(255,105,180,0.12)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/60 cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 z-40 bg-[#060609]/98 backdrop-blur-2xl border-b border-white/5 p-4 lg:hidden"
        >
          <div className="grid grid-cols-4 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-xl text-[11px] cursor-pointer transition-all ${
                    active === item.id
                      ? 'text-pink-primary bg-pink-primary/8'
                      : 'text-white/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
