import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles, Play, Cake, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(255,105,180,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(46,139,123,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(255,20,147,0.04) 0%, transparent 50%), #060609',
            backgroundSize: '200% 200%',
          }}
        />
        {/* Orbs */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: '#FF69B4' }}
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: '#2E8B7B' }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating hearts - fewer, more subtle */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
          animate={{ y: [-10, -30, -10], opacity: [0.05, 0.2, 0.05], rotate: [-5, 5, -5] }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        >
          <Heart
            className={i % 2 === 0 ? 'text-pink-primary' : 'text-sea-green'}
            style={{ width: 10 + Math.random() * 12, height: 10 + Math.random() * 12, fill: 'currentColor', opacity: 0.4 }}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Netflix tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10"
          style={{ background: 'rgba(255,105,180,0.06)', border: '1px solid rgba(255,105,180,0.15)' }}
        >
          <div className="w-5 h-5 rounded bg-gradient-to-br from-pink-primary to-pink-dark flex items-center justify-center">
            <Play className="w-2.5 h-2.5 text-white fill-white ml-[1px]" />
          </div>
          <span className="text-pink-light/80 text-xs font-medium tracking-[0.2em] uppercase">A Puchii Original</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-dancing text-2xl md:text-4xl lg:text-5xl text-sea-green-light/80 mb-3"
        >
          Happy 22nd Birthday
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-playfair text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] mb-5"
          style={{
            background: 'linear-gradient(135deg, #FF69B4 0%, #FFB6D9 25%, #FF1493 50%, #2E8B7B 75%, #3CB4A0 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 5s ease infinite',
          }}
        >
          Prachi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-pink-primary/40" />
          <Star className="w-3.5 h-3.5 text-pink-primary/50 fill-pink-primary/50" />
          <span className="font-playfair italic text-lg md:text-xl text-white/50 tracking-wide">Singh Rajawat</span>
          <Star className="w-3.5 h-3.5 text-sea-green/50 fill-sea-green/50" />
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-sea-green/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed"
        >
          This isn't just a website — it's a tiny universe I built pixel by pixel, 
          just for you. Every corner of it holds a piece of my heart.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(255,105,180,0.25)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3.5 rounded-full font-medium text-white cursor-pointer overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FF69B4, #DB2777)' }}
          >
            <span className="relative z-10 flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 fill-white" />
              Explore Your Surprise
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-dark to-sea-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('playlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-medium text-white/70 cursor-pointer text-sm"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
          >
            <span className="flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              Play Her Songs
            </span>
          </motion.button>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-14 inline-flex items-center gap-2 text-white/25 text-xs tracking-wider"
        >
          <Cake className="w-3.5 h-3.5" />
          <span>30th May 2026 • Crafted with love by your Puchii</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-[10px] text-white/20 tracking-widest uppercase">scroll</span>
        <ChevronDown className="w-4 h-4 text-white/20" />
      </motion.div>
    </section>
  );
}
