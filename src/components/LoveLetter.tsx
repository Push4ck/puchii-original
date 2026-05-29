import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart, Feather, MousePointerClick } from "lucide-react";
import { loveLetterData } from "../data/loveLetterData";

const letterContent = loveLetterData.letterContent;

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const open = () => {
    setIsOpen(true);
    setIsTyping(true);
    setDisplayedText("");
    let i = 0;
    timerRef.current = setInterval(() => {
      i++;
      setDisplayedText(letterContent.slice(0, i));
      if (i >= letterContent.length) {
        setIsTyping(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 12);
  };

  const skip = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDisplayedText(letterContent);
    setIsTyping(false);
  };

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
    },
    [],
  );

  return (
    <section id="letter" className="py-28 md:py-36 relative">
      <div className="max-w-4xl mx-auto px-4">
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
            <Mail className="w-3.5 h-3.5 text-pink-primary" />
            <span className="text-pink-light/80 text-xs font-medium tracking-wider uppercase">
              {loveLetterData.badge}
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">{loveLetterData.title} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {loveLetterData.titleGradient}
            </span>
          </h2>
          <p className="text-white/35 text-sm">{loveLetterData.subtitle}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                onClick={open}
                className="relative cursor-pointer group mb-6"
              >
                <div
                  className="w-72 h-44 md:w-80 md:h-52 rounded-2xl relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,105,180,0.08), rgba(46,139,123,0.04), rgba(6,6,9,0.9))",
                    border: "1px solid rgba(255,105,180,0.1)",
                  }}
                >
                  {/* Flap */}
                  <div
                    className="absolute top-0 inset-x-0 h-[45%] opacity-40"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,105,180,0.06), transparent)",
                      clipPath: "polygon(0 0, 50% 70%, 100% 0)",
                    }}
                  />
                  {/* Seal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                        boxShadow: "0 4px 20px rgba(255,105,180,0.3)",
                      }}
                    >
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 inset-x-0 text-center">
                    <p className="font-dancing text-base text-pink-primary/40">
                      {loveLetterData.letterTo}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,105,180,0.06), transparent)",
                    }}
                  />
                </div>
              </motion.div>
              <p className="text-white/25 text-xs flex items-center gap-1.5">
                <MousePointerClick className="w-3.5 h-3.5" /> Click to open your
                letter
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40, rotateX: -5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            >
              <div className="letter-paper rounded-2xl p-7 md:p-10 max-w-2xl mx-auto relative overflow-hidden">
                <div className="absolute top-5 right-5 opacity-20">
                  <Feather className="w-6 h-6 text-pink-dark" />
                </div>
                <div className="text-right mb-5">
                  <span className="font-dancing text-base text-pink-dark/60">
                    30th May, 2026
                  </span>
                </div>
                <div className="font-playfair text-sm md:text-[15px] leading-[2.2] text-gray-600 whitespace-pre-wrap">
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity }}
                      className="inline-block w-[2px] h-4 ml-0.5 align-middle bg-pink-dark"
                    />
                  )}
                </div>
                {isTyping && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={skip}
                    className="mt-5 px-4 py-1.5 rounded-full text-xs text-white cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                    }}
                  >
                    Read full letter
                  </motion.button>
                )}
                {!isTyping && displayedText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex justify-center"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-px w-12"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, #FF69B4)",
                        }}
                      />
                      <Heart className="w-4 h-4 text-pink-dark fill-pink-dark" />
                      <div
                        className="h-px w-12"
                        style={{
                          background:
                            "linear-gradient(to left, transparent, #2E8B7B)",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
                {/* Line effect */}
                <div
                  className="absolute inset-x-7 top-20 bottom-7 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 2.15em, #FF69B4 2.15em, #FF69B4 2.2em)",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
