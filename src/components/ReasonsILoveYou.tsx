import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { reasonsData } from "../data/reasonsData";

export default function ReasonsILoveYou() {
  const [page, setPage] = useState(0);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const reasons = reasonsData.reasons;
  const perPage = 6;
  const totalPages = Math.ceil(reasons.length / perPage);
  const items = reasons.slice(page * perPage, (page + 1) * perPage);

  const toggleFlip = (idx: number) => {
    const gIdx = page * perPage + idx;
    setFlipped((prev) => {
      const s = new Set(prev);
      s.has(gIdx) ? s.delete(gIdx) : s.add(gIdx);
      return s;
    });
  };

  return (
    <section id="reasons" className="py-28 md:py-36 relative">
      <div className="absolute top-20 right-0 opacity-[0.02] pointer-events-none">
        <Heart className="w-[500px] h-[500px] text-pink-primary" />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(255,105,180,0.06)",
              border: "1px solid rgba(255,105,180,0.12)",
            }}
          >
            <Star className="w-3.5 h-3.5 text-pink-primary fill-pink-primary" />
            <span className="text-pink-light/80 text-xs font-medium tracking-wider uppercase">
              {reasonsData.badge}
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">{reasonsData.title} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {reasonsData.titleGradient}
            </span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-sm">
            {reasonsData.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          <AnimatePresence mode="wait">
            {items.map((reason, idx) => {
              const gIdx = page * perPage + idx;
              const isFlipped = flipped.has(gIdx);
              const colors = [
                "#FF69B4",
                "#2E8B7B",
                "#FF1493",
                "#3CB4A0",
                "#DB2777",
                "#20B2AA",
              ];
              const color = colors[idx % colors.length];
              return (
                <motion.div
                  key={`${page}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    onClick={() => toggleFlip(idx)}
                    className="relative cursor-pointer h-44 md:h-52"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center gap-2.5"
                      style={{
                        backfaceVisibility: "hidden",
                        background: `${color}06`,
                        border: `1px solid ${color}12`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${color}30, ${color}15)`,
                        }}
                      >
                        <span className="text-white font-bold text-sm">
                          {gIdx + 1}
                        </span>
                      </div>
                      <h4 className="font-medium text-white/80 text-center text-sm">
                        {reason.title}
                      </h4>
                      <Sparkles
                        className="w-3.5 h-3.5"
                        style={{ color: `${color}40` }}
                      />
                      <p className="text-[10px] text-white/20">Tap to reveal</p>
                    </div>
                    {/* Back */}
                    <div
                      className="absolute inset-0 rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: `linear-gradient(135deg, ${color}10, ${color}05)`,
                        border: `1px solid ${color}18`,
                      }}
                    >
                      <Heart
                        className="w-4 h-4 mb-2 flex-shrink-0 fill-current"
                        style={{ color }}
                      />
                      <p className="text-white/60 text-xs md:text-sm text-center leading-relaxed">
                        {reason.text}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.06] disabled:opacity-15 hover:border-pink-primary/20 transition cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 text-white/50" />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${i === page ? "w-6 bg-pink-primary" : "w-1.5 bg-white/15 hover:bg-white/25"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/[0.06] disabled:opacity-15 hover:border-pink-primary/20 transition cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>
    </section>
  );
}
