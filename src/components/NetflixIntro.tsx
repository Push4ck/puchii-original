import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

export default function NetflixIntro({ onComplete }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setPhase(3), 3600);
    const t4 = setTimeout(() => onComplete(), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#060609] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Subtle stars */}
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 2 + Math.random() * 2,
                height: 2 + Math.random() * 2,
                background: i % 3 === 0 ? '#FF69B4' : i % 3 === 1 ? '#2E8B7B' : '#fff',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}

          {/* Phase 1: Heart pulse */}
          <AnimatePresence>
            {phase >= 1 && phase < 2 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'backOut' }}
                className="absolute"
              >
                <Heart
                  className="w-20 h-20 md:w-28 md:h-28"
                  style={{ color: '#FF69B4', fill: '#FF69B4', filter: 'drop-shadow(0 0 40px rgba(255,105,180,0.6))' }}
                />
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-pink-primary"
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ borderRadius: '50%' }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2: PUCHII Text */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <motion.h1
                  initial={{ scale: 0.3, opacity: 0, filter: 'blur(20px)' }}
                  animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-bebas text-7xl md:text-[10rem] tracking-[0.2em] leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #FF69B4, #FF1493, #E91E8C, #2E8B7B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 60px rgba(255,105,180,0.3))',
                  }}
                >
                  PUCHII
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-dancing text-xl md:text-3xl text-pink-light/70 tracking-widest mt-2"
                >
                  presents a love story
                </motion.p>
                {/* Equalizer bars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-end gap-[3px] mt-8"
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[3px] rounded-full"
                      style={{ background: `linear-gradient(to top, #2E8B7B, #FF69B4)` }}
                      animate={{ height: [4, 12 + Math.random() * 20, 4] }}
                      transition={{ duration: 0.4 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.03 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
