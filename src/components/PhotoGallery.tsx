import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Film,
  ChevronLeft,
  ChevronRight,
  Heart,
  ImageIcon,
  Play,
} from "lucide-react";
import DetailedPhotoViewer from "./DetailedPhotoViewer";
import type { PhotoData, GalleryCard } from "../types";
import { photoGalleryData } from "../data/photoGalleryData";

const rows: { label: string; items: GalleryCard[] }[] = photoGalleryData;

function GalleryRow({ label, items }: { label: string; items: GalleryCard[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCard, setSelectedCard] = useState<GalleryCard | null>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mb-10">
        <div className="flex items-center justify-between px-4 md:px-8 mb-4">
          <h3 className="text-base md:text-lg font-semibold text-white/80 flex items-center gap-2">
            <Play className="w-3.5 h-3.5 text-pink-primary fill-pink-primary" />
            {label}
          </h3>
          <div className="flex gap-1.5">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] transition cursor-pointer border border-white/[0.06]"
            >
              <ChevronLeft className="w-4 h-4 text-white/50" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] transition cursor-pointer border border-white/[0.06]"
            >
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              onClick={() => setSelectedCard(item)}
              className="netflix-card flex-shrink-0 w-48 md:w-60 rounded-xl overflow-hidden cursor-pointer group"
              style={{ border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div
                className="relative aspect-[4/3] flex items-center justify-center"
                style={{ background: `${item.color}08` }}
              >
                <div className="flex flex-col items-center gap-1.5 text-white/15">
                  <ImageIcon className="w-8 h-8" />
                  <span className="text-[9px] tracking-wider uppercase">
                    View Photos
                  </span>
                </div>
                {/* Top accent */}
                <div
                  className="absolute top-0 inset-x-0 h-0.5"
                  style={{ background: item.color, opacity: 0.4 }}
                />
                {/* Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3">
                  <Heart className="w-4 h-4 text-pink-primary fill-pink-primary" />
                </div>
              </div>
              <div className="px-3 py-2.5 bg-white/[0.02]">
                <h4 className="font-medium text-xs text-white/80 mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[10px] text-white/30">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <AnimatePresence>
          <DetailedPhotoViewer
            cardId={selectedCard.id}
            cardTitle={selectedCard.title}
            cardColor={selectedCard.color}
            photos={selectedCard.photos}
            onClose={() => setSelectedCard(null)}
          />
        </AnimatePresence>
      )}
    </>
  );
}

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 px-4"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(255,105,180,0.06)",
              border: "1px solid rgba(255,105,180,0.12)",
            }}
          >
            <Film className="w-3.5 h-3.5 text-pink-primary" />
            <span className="text-pink-light/80 text-xs font-medium tracking-wider uppercase">
              Our Gallery
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">Our </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Memories
            </span>
          </h2>
        </motion.div>
        {rows.map((r) => (
          <GalleryRow key={r.label} label={r.label} items={r.items} />
        ))}
      </div>
    </section>
  );
}
