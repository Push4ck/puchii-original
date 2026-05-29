import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, PartyPopper, Wind } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

export default function BirthdayCake() {
  const [lit, setLit] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const [confetti, setConfetti] = useState<
    {
      id: number;
      x: number;
      color: string;
      delay: number;
      size: number;
      shape: string;
    }[]
  >([]);

  const blow = () => {
    if (!lit) return;
    setLit(false);
    setShowMsg(true);
    const pieces = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: [
        "#FF69B4",
        "#2E8B7B",
        "#FFB6D9",
        "#3CB4A0",
        "#FFD700",
        "#FF6B6B",
        "#DB2777",
      ][i % 7],
      delay: Math.random() * 0.8,
      size: 4 + Math.random() * 8,
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 5000);
  };

  return (
    <section id="cake" className="py-28 md:py-36 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {confetti.map((p) => (
          <motion.div
            key={p.id}
            className="fixed top-0 z-50 pointer-events-none"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              borderRadius: p.shape === "circle" ? "50%" : "2px",
            }}
            initial={{ y: -20, rotate: 0, opacity: 1 }}
            animate={{
              y: "110vh",
              rotate: 720 + Math.random() * 360,
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              delay: p.delay,
              ease: "easeIn",
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(46,139,123,0.06)",
              border: "1px solid rgba(46,139,123,0.12)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-sea-green-light" />
            <span className="text-sea-green-light text-xs font-medium tracking-wider uppercase">
              {birthdayData.badge}
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">{birthdayData.title} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {birthdayData.titleGradient}
            </span>
          </h2>
          <p className="text-white/35 text-sm">{birthdayData.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <div className="relative mx-auto" style={{ width: 300, height: 280 }}>
            {/* Plate */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-5 rounded-[50%]"
              style={{
                background: "linear-gradient(180deg, #333, #222)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
              }}
            />
            {/* Bottom layer */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-60 h-[70px] rounded-2xl"
              style={{
                background: "linear-gradient(180deg, #FF8DC7, #FF69B4)",
                boxShadow: "0 6px 20px rgba(255,105,180,0.25)",
              }}
            >
              {[18, 52, 86, 120, 154, 188, 220].map((x, i) => (
                <div
                  key={i}
                  className="absolute rounded-b-full"
                  style={{
                    left: x,
                    top: -3,
                    width: 10,
                    height: 10 + (i % 3) * 5,
                    background: "#FFB6D9",
                  }}
                />
              ))}
              <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-2.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: i % 2 === 0 ? "#2E8B7B" : "#FFB6D9" }}
                  />
                ))}
              </div>
            </div>
            {/* Middle layer */}
            <div
              className="absolute bottom-[67px] left-1/2 -translate-x-1/2 w-48 h-[65px] rounded-2xl"
              style={{
                background: "linear-gradient(180deg, #3CB4A0, #2E8B7B)",
                boxShadow: "0 4px 15px rgba(46,139,123,0.25)",
              }}
            >
              {[12, 45, 78, 111, 144, 172].map((x, i) => (
                <div
                  key={i}
                  className="absolute rounded-b-full"
                  style={{
                    left: x,
                    top: -3,
                    width: 8,
                    height: 8 + (i % 2) * 7,
                    background: "#5DD4BE",
                  }}
                />
              ))}
              <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="8"
                    height="8"
                    viewBox="0 0 10 10"
                    fill={i % 2 === 0 ? "#FF69B4" : "#FFB6D9"}
                  >
                    <path d="M5 9 L1 5 C-1 3 1 0 3 1 L5 3 L7 1 C9 0 11 3 9 5 Z" />
                  </svg>
                ))}
              </div>
            </div>
            {/* Top layer */}
            <div
              className="absolute bottom-[126px] left-1/2 -translate-x-1/2 w-36 h-[54px] rounded-2xl"
              style={{
                background: "linear-gradient(180deg, #FFB6D9, #FF8DC7)",
                boxShadow: "0 4px 10px rgba(255,105,180,0.15)",
              }}
            >
              {[8, 35, 62, 89, 112].map((x, i) => (
                <div
                  key={i}
                  className="absolute rounded-b-full"
                  style={{
                    left: x,
                    top: -2,
                    width: 7,
                    height: 7 + (i % 2) * 5,
                    background: "#FFD4E8",
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-dancing text-xs text-white font-bold drop-shadow">
                  {birthdayData.cakeMessage}
                </span>
              </div>
            </div>
            {/* Candles */}
            {[-28, -10, 8, 26].map((off, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `calc(50% + ${off}px)`,
                  bottom: 178,
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  className="w-[6px] h-9 rounded-sm mx-auto"
                  style={{
                    background: `linear-gradient(180deg, ${i % 2 === 0 ? "#FF69B4" : "#2E8B7B"}, ${i % 2 === 0 ? "#DB2777" : "#1A6B5A"})`,
                  }}
                />
                <AnimatePresence>
                  {lit && (
                    <motion.div
                      initial={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, delay: i * 0.08 }}
                      className="absolute -top-[18px] left-1/2 -translate-x-1/2"
                    >
                      <motion.div
                        animate={{
                          scaleY: [1, 1.25, 0.9, 1.1, 1],
                          scaleX: [1, 0.85, 1.1, 0.9, 1],
                        }}
                        transition={{ duration: 0.35, repeat: Infinity }}
                        className="w-[10px] h-[16px] rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 70%, #FFD700, #FFA500, #FF6347)",
                          boxShadow:
                            "0 0 8px #FFD700, 0 0 16px rgba(255,165,0,0.4)",
                        }}
                      />
                      <div
                        className="absolute -inset-1.5 rounded-full blur-md opacity-40"
                        style={{ background: "#FFD700" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Ambient glow */}
            {lit && (
              <div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 h-16 rounded-full blur-3xl opacity-15"
                style={{ background: "#FFD700" }}
              />
            )}
          </div>

          <div className="mt-10">
            {lit ? (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={blow}
                className="px-8 py-3.5 rounded-full font-medium text-white text-sm cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                  boxShadow: "0 4px 24px rgba(255,105,180,0.25)",
                }}
              >
                <span className="flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  Blow the Candles!
                </span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                {showMsg && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.4 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <PartyPopper className="w-7 h-7 text-pink-primary" />
                      <h3 className="font-dancing text-3xl md:text-4xl text-pink-primary">
                        Happy Birthday!
                      </h3>
                      <PartyPopper className="w-7 h-7 text-sea-green-light" />
                    </div>
                    <p className="text-white/40 text-sm">
                      May all your wishes come true, my love!
                    </p>
                  </motion.div>
                )}
                <button
                  onClick={() => {
                    setLit(true);
                    setShowMsg(false);
                  }}
                  className="px-5 py-2 rounded-full text-xs text-white/40 border border-white/[0.06] hover:border-pink-primary/15 cursor-pointer transition"
                >
                  Relight candles
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
