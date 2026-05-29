import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NetflixIntro from "./components/NetflixIntro";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CountdownTimer from "./components/CountdownTimer";
import Timeline from "./components/Timeline";
import PhotoGallery from "./components/PhotoGallery";
import VideoSection from "./components/VideoSection";
import MusicPlaylist from "./components/MusicPlaylist";
import ReasonsILoveYou from "./components/ReasonsILoveYou";
import LoveLetter from "./components/LoveLetter";
import BirthdayCake from "./components/BirthdayCake";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import SectionDivider from "./components/SectionDivider";
import QuotesMarquee from "./components/QuotesMarquee";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  // Slight delay after intro for smooth content entrance
  useEffect(() => {
    if (introComplete) {
      const t = setTimeout(() => setContentReady(true), 100);
      return () => clearTimeout(t);
    }
  }, [introComplete]);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden overflow-y-visible">
      {/* Netflix intro */}
      <AnimatePresence>
        {!introComplete && <NetflixIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Sparkle trail (canvas — zero lag) */}
      {contentReady && <FloatingElements />}

      {/* Main content */}
      {contentReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <HeroSection />

          <QuotesMarquee />

          <SectionDivider variant="pink" />
          <CountdownTimer />

          <SectionDivider variant="green" />
          <Timeline />

          <SectionDivider variant="mixed" />
          <PhotoGallery />
          <VideoSection />

          <SectionDivider variant="pink" />
          <MusicPlaylist />

          <SectionDivider variant="green" />
          <ReasonsILoveYou />

          <SectionDivider variant="mixed" />
          <LoveLetter />

          <SectionDivider variant="pink" />
          <BirthdayCake />

          <QuotesMarquee />

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
