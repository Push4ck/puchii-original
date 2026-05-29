import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function SectionDivider({ variant = 'mixed' }: { variant?: 'pink' | 'green' | 'mixed' }) {
  const c = variant === 'pink' ? ['#FF69B4', '#DB2777'] : variant === 'green' ? ['#2E8B7B', '#3CB4A0'] : ['#FF69B4', '#2E8B7B'];

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 py-4">
      <div className="h-px w-16 md:w-28" style={{ background: `linear-gradient(to right, transparent, ${c[0]}20)` }} />
      <Heart className="w-3 h-3 fill-current" style={{ color: `${c[0]}30` }} />
      <div className="w-1 h-1 rounded-full" style={{ background: `${c[1]}30` }} />
      <Heart className="w-3 h-3 fill-current" style={{ color: `${c[1]}30` }} />
      <div className="h-px w-16 md:w-28" style={{ background: `linear-gradient(to left, transparent, ${c[1]}20)` }} />
    </motion.div>
  );
}
