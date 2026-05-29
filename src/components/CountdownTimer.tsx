import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Gift, Sparkles, PartyPopper } from "lucide-react";

const BIRTHDAY = new Date("2026-05-30T00:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function TimeCard({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const display = String(value).padStart(2, "0");
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <div className="relative group">
        <div
          className="w-[72px] h-[88px] md:w-24 md:h-28 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,105,180,0.06), rgba(46,139,123,0.04))",
            border: "1px solid rgba(255,105,180,0.1)",
          }}
        >
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/3" />
          <span
            className="font-bebas text-4xl md:text-5xl relative z-10"
            style={{
              background: "linear-gradient(180deg, #FFB6D9, #FF69B4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {display}
          </span>
        </div>
        {/* Glow on hover */}
        <div
          className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{ background: "rgba(255,105,180,0.08)" }}
        />
      </div>
      <span className="text-[10px] md:text-xs font-medium text-white/30 uppercase tracking-[0.2em] mt-3">
        {label}
      </span>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const update = () => {
      const diff = BIRTHDAY - Date.now();
      if (diff <= 0) {
        setIsBirthday(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const progressPct = Math.max(2, 100 - (timeLeft.days / 365) * 100);

  return (
    <section id="countdown" className="relative py-28 md:py-36">
      {/* Border lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-pink-primary/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-sea-green/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(46,139,123,0.06)",
              border: "1px solid rgba(46,139,123,0.12)",
            }}
          >
            <Clock className="w-3.5 h-3.5 text-sea-green-light" />
            <span className="text-sea-green-light text-xs font-medium tracking-wider uppercase">
              The Big Day
            </span>
          </div>

          {isBirthday ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 pointer-events-none">
                <span
                  className="absolute w-2 h-2 rounded-full bg-pink-primary/90 animate-bounce"
                  style={{ top: "10%", left: "15%" }}
                />
                <span
                  className="absolute w-2 h-2 rounded-full bg-sea-green/90 animate-bounce"
                  style={{ top: "18%", left: "72%" }}
                />
                <span
                  className="absolute w-2 h-2 rounded-full bg-white/80 animate-bounce"
                  style={{ top: "40%", left: "25%" }}
                />
                <span
                  className="absolute w-2 h-2 rounded-full bg-pink-primary/90 animate-bounce"
                  style={{ top: "60%", left: "80%" }}
                />
                <span
                  className="absolute w-2 h-2 rounded-full bg-sea-green/90 animate-bounce"
                  style={{ top: "80%", left: "42%" }}
                />
              </div>

              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PartyPopper className="w-8 h-8 text-pink-primary" />
                  <h2 className="font-playfair text-4xl md:text-6xl font-bold text-pink-primary">
                    It's Your Birthday!
                  </h2>
                  <PartyPopper className="w-8 h-8 text-sea-green-light" />
                </div>
                <Gift className="w-20 h-20 text-pink-primary mx-auto my-8 animate-heartbeat" />
                <p className="text-white/50 text-lg">
                  Happy Birthday, Prachi! 22 looks gorgeous on you!
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowSurprise((prev) => !prev)}
                  className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-white bg-linear-to-r from-pink-primary to-sea-green shadow-[0_20px_60px_rgba(255,105,180,0.18)]"
                >
                  {showSurprise ? "Close the Gift" : "Open Your Birthday Gift"}
                </motion.button>

                {showSurprise && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 grid gap-4 md:grid-cols-3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-pink-primary/10 text-pink-primary">
                        <Gift className="w-6 h-6" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        Video Memory
                      </h3>
                      <p className="text-white/50 text-sm">
                        A little moment to watch whenever you want to smile.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-sea-green/10 text-sea-green-light">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        Sweet Notes
                      </h3>
                      <p className="text-white/50 text-sm">
                        Tiny love notes and surprises hidden in every scroll.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-pink-primary/10 text-pink-primary">
                        <PartyPopper className="w-6 h-6" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        Party Vibes
                      </h3>
                      <p className="text-white/50 text-sm">
                        A hidden mix of moments, music, and celebration just for
                        you.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            <>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
                <span className="text-white/90">Counting Every </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Second
                </span>
              </h2>
              <p className="text-white/35 mb-14 text-sm md:text-base">
                Until the world celebrates you — 30th May 2026
              </p>

              <div className="flex items-center justify-center gap-2 md:gap-5">
                <TimeCard value={timeLeft.days} label="Days" delay={0.1} />
                <span className="text-2xl md:text-3xl text-white/10 font-light -mt-5">
                  :
                </span>
                <TimeCard value={timeLeft.hours} label="Hours" delay={0.2} />
                <span className="text-2xl md:text-3xl text-white/10 font-light -mt-5">
                  :
                </span>
                <TimeCard
                  value={timeLeft.minutes}
                  label="Minutes"
                  delay={0.3}
                />
                <span className="text-2xl md:text-3xl text-white/10 font-light -mt-5">
                  :
                </span>
                <TimeCard
                  value={timeLeft.seconds}
                  label="Seconds"
                  delay={0.4}
                />
              </div>

              {/* Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 max-w-md mx-auto"
              >
                <div className="flex justify-between text-[10px] text-white/20 mb-2 px-1">
                  <span>Today</span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-pink-primary/40" />
                    30th May
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/4 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #2E8B7B, #FF69B4)",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progressPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
