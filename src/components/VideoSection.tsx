import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Film, VideoIcon } from "lucide-react";
import { videoData } from "../data/videoData";

export default function VideoSection() {
  const [selected, setSelected] = useState<(typeof videoData.videos)[0] | null>(
    null,
  );

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(46,139,123,0.06)",
              border: "1px solid rgba(46,139,123,0.12)",
            }}
          >
            <Film className="w-3.5 h-3.5 text-sea-green-light" />
            <span className="text-sea-green-light text-xs font-medium tracking-wider uppercase">
              {videoData.badge}
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">{videoData.title} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {videoData.titleGradient}
            </span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-sm">
            {videoData.description}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center align-center gap-6">
          {videoData.videos.map((v, idx) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelected(v)}
              className="netflix-card rounded-xl overflow-hidden cursor-pointer group"
              style={{ border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div
                className="relative w-70 h-50 flex items-center justify-center"
                style={{ background: `${v.color}06` }}
              >
                <VideoIcon className="w-10 h-10 text-white/8" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="absolute inset-0 bg-black/30" />
                  <div
                    className="relative w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: v.color,
                      boxShadow: `0 4px 16px ${v.color}33`,
                    }}
                  >
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <div
                  className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase"
                  style={{ background: v.color, color: "#fff" }}
                >
                  Original
                </div>
              </div>
              <div className="px-3 py-2.5 bg-white/2">
                <h4 className="font-medium text-xs text-white/80 mb-0.5">
                  {v.title}
                </h4>
                <p className="text-[10px] text-white/30">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-80 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="aspect-video flex items-center justify-center"
                style={{ background: `${selected.color}06` }}
              >
                {selected.src ? (
                  selected.src.includes("drive.google.com") ? (
                    <iframe
                      className="w-full h-full border-0"
                      src={selected.src}
                      allow="autoplay"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-contain"
                      controls
                      controlsList="nodownload"
                      playsInline
                      src={selected.src}
                    />
                  )
                ) : (
                  <>
                    <VideoIcon className="w-16 h-16 text-white/8" />
                    <p className="text-white/30 text-xs text-center px-4">
                      Replace with your video embed
                    </p>
                  </>
                )}
              </div>
              <div className="p-5 bg-dark-card">
                <h3 className="text-base font-bold text-white/90 mb-1">
                  {selected.title}
                </h3>
                <p className="text-white/35 text-sm mb-4">{selected.desc}</p>
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition"
                    style={{
                      background: selected.color,
                      boxShadow: `0 4px 12px ${selected.color}40`,
                      hover: { opacity: 0.9 },
                    }}
                  >
                    <Play className="w-4 h-4 fill-white" />
                    Open in Google Drive
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
