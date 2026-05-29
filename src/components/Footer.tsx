import { motion } from 'framer-motion';
import { Heart, Code, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-bebas text-3xl tracking-[0.2em]" style={{ background: 'linear-gradient(135deg, #FF69B4, #2E8B7B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            PUCHII
          </span>

          <p className="font-dancing text-xl md:text-2xl text-white/25 mt-5 mb-8">
            "In a world full of billions, my soul found yours"
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-pink-primary/15" />
            <Heart className="w-3 h-3 text-pink-primary/30 fill-pink-primary/30 animate-heartbeat" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-sea-green/15" />
          </div>

          <div className="flex flex-col items-center gap-1.5 text-white/15 text-xs">
            <p className="flex items-center gap-1">
              <Code className="w-3 h-3" /> Built with <Heart className="w-2.5 h-2.5 text-pink-primary/40 fill-pink-primary/40 mx-0.5" /> for the love of my life
            </p>
            <p className="flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-sea-green/30" /> Happy 22nd Birthday, Prachi Singh Rajawat <Sparkles className="w-2.5 h-2.5 text-pink-primary/30" />
            </p>
            <p className="text-white/8 mt-4">© 2026 Puchii Studios</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
