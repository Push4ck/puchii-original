import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Heart,
  Repeat,
  Shuffle,
  ListMusic,
  Disc3,
  HeartIcon,
} from "lucide-react";
import type { Song } from "../types";
import { musicData } from "../data/musicData";

const songs: Song[] = musicData.songs;

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function MusicPlaylist() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState("0:00");
  const [volume, setVolume] = useState(80);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const playerRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const pendingSongRef = useRef<number | null>(null);
  const shouldAutoplayRef = useRef(false);
  const currentSongRef = useRef(currentSong);
  const isShuffledRef = useRef(isShuffled);
  const isRepeatRef = useRef(isRepeat);
  const hasAutoPlayedRef = useRef(false);

  // Keep refs in sync
  useEffect(() => {
    currentSongRef.current = currentSong;
  }, [currentSong]);
  useEffect(() => {
    isShuffledRef.current = isShuffled;
  }, [isShuffled]);
  useEffect(() => {
    isRepeatRef.current = isRepeat;
  }, [isRepeat]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const startProgressTracking = useCallback(() => {
    if (progressTimer.current) clearInterval(progressTimer.current);
    progressTimer.current = setInterval(() => {
      if (
        playerRef.current &&
        typeof playerRef.current.getCurrentTime === "function"
      ) {
        const curr = playerRef.current.getCurrentTime();
        const dur = playerRef.current.getDuration();
        if (dur > 0) {
          setProgress((curr / dur) * 100);
          setCurrentTime(formatTime(curr));
          setTotalTime(formatTime(dur));
        }
      }
    }, 250);
  }, []);

  const stopProgressTracking = useCallback(() => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
  }, []);

  const goToNext = useCallback(() => {
    setProgress(0);
    setCurrentTime("0:00");
    shouldAutoplayRef.current = true;
    if (isShuffledRef.current) {
      let next: number;
      do {
        next = Math.floor(Math.random() * songs.length);
      } while (next === currentSongRef.current && songs.length > 1);
      setCurrentSong(next);
    } else {
      setCurrentSong((p) => (p + 1) % songs.length);
    }
  }, []);

  // Load YouTube API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => createPlayer();

    function createPlayer() {
      playerRef.current = new window.YT.Player("yt-audio-player", {
        height: "1",
        width: "1",
        videoId: songs[0].youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            setPlayerReady(true);
            playerRef.current.setVolume(80);
            // If a song was queued before ready
            if (pendingSongRef.current !== null) {
              playerRef.current.loadVideoById(
                songs[pendingSongRef.current].youtubeId,
              );
              pendingSongRef.current = null;
            }
          },
          onStateChange: (e: any) => {
            const state = e.data;
            if (state === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startProgressTracking();
            } else if (state === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              stopProgressTracking();
            } else if (state === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              stopProgressTracking();
              if (isRepeatRef.current) {
                playerRef.current.seekTo(0);
                playerRef.current.playVideo();
              } else {
                goToNext();
              }
            }
          },
        },
      });
    }

    return () => {
      stopProgressTracking();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // When song changes, load new video (no destroy/recreate!)
  useEffect(() => {
    if (!playerReady || !playerRef.current) {
      pendingSongRef.current = currentSong;
      return;
    }
    if (shouldAutoplayRef.current) {
      playerRef.current.loadVideoById(songs[currentSong].youtubeId);
      shouldAutoplayRef.current = false;
    } else {
      playerRef.current.cueVideoById(songs[currentSong].youtubeId);
    }
    setProgress(0);
    setCurrentTime("0:00");
  }, [currentSong, playerReady]);

  // Auto-play first song when section scrolls into view
  useEffect(() => {
    if (!sectionRef.current || !playerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayedRef.current) {
            hasAutoPlayedRef.current = true;
            // Delay slightly to ensure player is ready
            setTimeout(() => {
              if (playerRef.current) {
                playerRef.current.playVideo();
              }
            }, 100);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current || !playerReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume);
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (playerRef.current) {
      playerRef.current.setVolume(v);
    }
    if (v === 0) setIsMuted(true);
    else if (isMuted) {
      setIsMuted(false);
      playerRef.current?.unMute();
    }
  };

  const prevSong = () => {
    setProgress(0);
    setCurrentTime("0:00");
    shouldAutoplayRef.current = isPlaying;
    setCurrentSong((p) => (p - 1 + songs.length) % songs.length);
  };

  const nextSong = () => {
    shouldAutoplayRef.current = isPlaying;
    goToNext();
  };

  const selectSong = (idx: number) => {
    if (idx === currentSong) {
      togglePlay();
      return;
    }
    shouldAutoplayRef.current = true;
    setCurrentSong(idx);
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !playerReady) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const dur = playerRef.current.getDuration();
    playerRef.current.seekTo(pct * dur, true);
    setProgress(pct * 100);
  };

  const song = songs[currentSong];

  return (
    <section
      ref={sectionRef}
      id="playlist"
      className="py-28 md:py-36 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isPlaying ? 0.12 : 0.04 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{ background: song.color }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
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
            <Music className="w-3.5 h-3.5 text-sea-green-light" />
            <span className="text-sea-green-light text-xs font-medium tracking-wider uppercase">
              {musicData.badge}
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3">
            <span className="text-white/90">{musicData.title} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #FF69B4, #2E8B7B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {musicData.titleGradient}
            </span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-sm">
            {musicData.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-5">
          {/* ---- PLAYER CARD ---- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-6 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,105,180,0.05), rgba(46,139,123,0.03), rgba(6,6,9,0.95))",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Vinyl disc */}
            <div className="relative mx-auto w-44 h-44 md:w-52 md:h-52 mb-6">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center ${isPlaying ? "animate-vinyl-spin" : ""}`}
                style={{
                  background: `conic-gradient(from 0deg, ${song.color}15, #111 20%, ${song.color}08 40%, #0a0a0a 60%, ${song.color}12 80%, #111)`,
                  border: `1px solid ${song.color}20`,
                  boxShadow: isPlaying ? `0 0 40px ${song.color}15` : "none",
                  transition: "box-shadow 0.5s",
                }}
              >
                {/* Inner circle */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${song.color}25, ${song.color}08)`,
                    border: `1px solid ${song.color}20`,
                  }}
                >
                  <Disc3
                    className="w-8 h-8"
                    style={{ color: song.color, opacity: 0.6 }}
                  />
                </div>
                {/* Ring grooves */}
                <div className="absolute inset-[15%] rounded-full border border-white/[0.02]" />
                <div className="absolute inset-[25%] rounded-full border border-white/[0.02]" />
                <div className="absolute inset-[35%] rounded-full border border-white/[0.015]" />
              </div>
              {/* Playing glow ring */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: `${song.color}30` }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>

            {/* Song info */}
            <div className="text-center mb-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-semibold text-base md:text-lg text-white/90 mb-0.5">
                    {song.title}
                  </h3>
                  <p className="text-white/35 text-xs">
                    {song.artist} • {song.album}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress */}
            <div className="mb-4 px-1">
              <div
                className="h-1 rounded-full bg-white/[0.06] cursor-pointer relative group"
                onClick={seekTo}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${song.color}, ${song.color}99)`,
                  }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  style={{
                    left: `calc(${progress}% - 6px)`,
                    background: song.color,
                    boxShadow: `0 0 8px ${song.color}`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-white/20 font-mono">
                <span>{currentTime}</span>
                <span>{totalTime}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
              <button
                onClick={() => setIsShuffled(!isShuffled)}
                className={`p-2 rounded-full transition-all cursor-pointer ${isShuffled ? "text-sea-green-light bg-sea-green/10" : "text-white/25 hover:text-white/50"}`}
              >
                <Shuffle className="w-4 h-4" />
              </button>
              <button
                onClick={prevSong}
                className="p-2 text-white/60 hover:text-white transition cursor-pointer"
              >
                <SkipBack className="w-5 h-5 fill-current" />
              </button>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={togglePlay}
                className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${song.color}, ${song.color}cc)`,
                  boxShadow: `0 4px 24px ${song.color}33`,
                }}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </motion.button>
              <button
                onClick={nextSong}
                className="p-2 text-white/60 hover:text-white transition cursor-pointer"
              >
                <SkipForward className="w-5 h-5 fill-current" />
              </button>
              <button
                onClick={() => setIsRepeat(!isRepeat)}
                className={`p-2 rounded-full transition-all cursor-pointer ${isRepeat ? "text-pink-primary bg-pink-primary/10" : "text-white/25 hover:text-white/50"}`}
              >
                <Repeat className="w-4 h-4" />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center justify-center gap-2.5 px-6">
              <button
                onClick={toggleMute}
                className="text-white/30 hover:text-white/60 cursor-pointer transition"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolume}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${song.color} ${isMuted ? 0 : volume}%, rgba(255,255,255,0.06) ${isMuted ? 0 : volume}%)`,
                  accentColor: song.color,
                }}
              />
              <span className="text-[10px] text-white/20 w-6 text-right">
                {isMuted ? 0 : volume}
              </span>
            </div>

            {/* Hidden YT player */}
            <div
              className="hidden pointer-events-none"
              style={{
                position: "absolute",
                width: 0,
                height: 0,
                overflow: "hidden",
              }}
            >
              <div id="yt-audio-player" />
            </div>
          </motion.div>

          {/* ---- SONG LIST ---- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4 px-1">
              <ListMusic className="w-4 h-4 text-white/20" />
              <span className="text-xs text-white/30 uppercase tracking-wider font-medium">
                Queue • {songs.length} songs
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {songs.map((s, idx) => {
                const active = currentSong === idx;
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    onClick={() => selectSong(idx)}
                    className={`song-card flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                      active
                        ? "border border-white/[0.06]"
                        : "border border-transparent"
                    }`}
                    style={
                      active
                        ? {
                            background: `linear-gradient(135deg, ${s.color}08, ${s.color}04)`,
                          }
                        : {}
                    }
                  >
                    {/* Number / Equalizer */}
                    <div className="w-6 flex justify-center flex-shrink-0">
                      {active && isPlaying ? (
                        <div className="flex items-end gap-[2px] h-4">
                          {[0, 1, 2, 3].map((b) => (
                            <motion.div
                              key={b}
                              className="w-[2.5px] rounded-full"
                              style={{ background: s.color }}
                              animate={{
                                height: [
                                  "3px",
                                  `${8 + Math.random() * 8}px`,
                                  "3px",
                                ],
                              }}
                              transition={{
                                duration: 0.5 + Math.random() * 0.3,
                                repeat: Infinity,
                                delay: b * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <span
                          className={`text-xs font-medium ${active ? "text-pink-primary" : "text-white/20"}`}
                        >
                          {idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Art */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${s.color}0a`,
                        border: `1px solid ${s.color}12`,
                      }}
                    >
                      <Music
                        className="w-4 h-4"
                        style={{ color: s.color, opacity: 0.6 }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-sm font-medium truncate ${active ? "" : "text-white/80"}`}
                        style={active ? { color: s.color } : {}}
                      >
                        {s.title}
                      </h4>
                      <p className="text-[11px] text-white/30 truncate">
                        {s.artist}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-2.5 flex-shrink-0">
                      <Heart
                        className={`w-3.5 h-3.5 transition ${active ? "fill-current" : ""}`}
                        style={{
                          color: active ? s.color : "rgba(255,255,255,0.12)",
                        }}
                      />
                      <span className="text-[10px] text-white/20 font-mono w-9 text-right">
                        {s.duration}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* I Love You */}
            <span className="flex items-center justify-center gap-2 mt-5 py-2.5 rounded-xl transition-all text-xs border border-white/[0.04] hover:border-white/[0.08] group cursor-pointer">
              <span className="text-white/20 group-hover:bg-gradient-to-r group-hover:from-pink-primary group-hover:via-pink-light group-hover:to-sea-green-light group-hover:bg-clip-text group-hover:text-transparent transition-all">
                I Love You
              </span>
              <HeartIcon className="w-3.5 h-3.5 text-white/20 group-hover:fill-current group-hover:text-pink-primary transition-all" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
