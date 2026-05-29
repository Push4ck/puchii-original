import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const milestones = timelineData.milestones;
  return (
    <section id="timeline" className="py-28 md:py-36 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(255,105,180,0.06)",
              border: "1px solid rgba(255,105,180,0.12)",
            }}
          >
            <Heart className="w-3.5 h-3.5 text-pink-primary fill-pink-primary" />
            <span className="text-pink-light/80 text-xs font-medium tracking-wider uppercase">
              {timelineData.badge}
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">{timelineData.title} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {timelineData.titleGradient}
            </span>
          </h2>
          <p className="text-white/35 text-sm md:text-base max-w-md mx-auto">
            {timelineData.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(255,105,180,0.15) 10%, rgba(46,139,123,0.15) 90%, transparent)",
            }}
          />

          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot on line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "#060609",
                      border: `2px solid ${m.color}33`,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: m.color,
                        boxShadow: `0 0 12px ${m.color}44`,
                      }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-32px)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <div
                    className="p-5 md:p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      background: `linear-gradient(135deg, ${m.color}06, ${m.color}03)`,
                      border: `1px solid ${m.color}10`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `${m.color}10` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: m.color }} />
                      </div>
                      <h3 className="font-semibold text-white/90 text-sm md:text-base">
                        {m.title}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
