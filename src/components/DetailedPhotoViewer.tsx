import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PhotoData } from "../types";

interface DetailedPhotoViewerProps {
  cardId: number;
  cardTitle: string;
  cardColor: string;
  photos: PhotoData[];
  onClose: () => void;
}

export default function DetailedPhotoViewer({
  cardId,
  cardTitle,
  cardColor,
  photos,
  onClose,
}: DetailedPhotoViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-6xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Header */}
        <div className="px-6 md:px-10 py-4 border-b border-white/10 flex items-center justify-between">
          <h2
            className="text-xl md:text-2xl font-playfair font-bold"
            style={{ color: cardColor }}
          >
            {cardTitle}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-8 p-6 md:p-10">
          {/* Image Stack with Controls */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 to-black/80 flex items-center justify-center group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={currentPhoto.image}
                    alt={`Photo ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Counter Overlay */}
              <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm">
                {currentIndex + 1} / {photos.length}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 w-full justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                disabled={photos.length <= 1}
                className="p-3 rounded-full transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: `${cardColor}20`,
                  border: `1px solid ${cardColor}30`,
                }}
              >
                <ChevronLeft className="w-6 h-6" style={{ color: cardColor }} />
              </motion.button>

              <div className="flex gap-2 justify-center flex-1 flex-wrap">
                {photos.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="w-2 h-2 rounded-full transition cursor-pointer"
                    animate={{
                      scale: idx === currentIndex ? 1.3 : 1,
                      opacity: idx === currentIndex ? 1 : 0.3,
                    }}
                    style={{
                      backgroundColor:
                        idx === currentIndex
                          ? cardColor
                          : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={photos.length <= 1}
                className="p-3 rounded-full transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: `${cardColor}20`,
                  border: `1px solid ${cardColor}30`,
                }}
              >
                <ChevronRight
                  className="w-6 h-6"
                  style={{ color: cardColor }}
                />
              </motion.button>
            </div>
          </div>

          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center gap-6"
            >
              <div className="space-y-4">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                  style={{ background: `${cardColor}15`, color: cardColor }}
                >
                  Memory {currentIndex + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white/90">
                  Moment in Time
                </h3>

                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {currentPhoto.text}
                </p>
              </div>

              {/* Info Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span>Captured Memory</span>
                <span className="flex items-center gap-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cardColor }}
                  />
                  {cardTitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
