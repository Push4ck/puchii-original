import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { quotesData } from '../data/quotesData';

export default function QuotesMarquee() {
  const doubled = [...quotesData, ...quotesData];

  return (
    <div className="py-10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060609] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060609] to-transparent z-10" />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((q, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">
            <span className="font-dancing text-base md:text-lg text-white/15 italic">"{q}"</span>
            <Heart className="w-3 h-3 text-pink-primary/20 fill-pink-primary/20 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
