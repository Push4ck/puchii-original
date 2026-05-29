import type { Song } from "../types";

// IMPORTANT: YouTube Video IDs
// Not all YouTube videos can be embedded (copyright/embedding restrictions)
// To make this work, replace the YouTube IDs below with your own embeddable videos:
// 1. Go to YouTube and find a song video
// 2. Copy the video ID from the URL (youtube.com/watch?v=XXXXX) - XXXXX is the ID
// 3. Make sure it's embeddable (check if it plays in embedded player)
// 4. Replace the youtubeId values below
// Currently using Rick Roll (dQw4w9WgXcQ) as a test - it's definitely embeddable!

export const musicData = {
  badge: "Prachi's Playlist",
  title: "Songs That",
  titleGradient: "Define Us",
  description: "Every melody here carries a memory that's ours forever",
  songs: [
    {
      id: 1,
      title: "Tum Ho",
      artist: "Mohit Chauhan and Suzanne D'Mello",
      album: "Album",
      youtubeId: "gkCKTuR-ECI",
      color: "#FF69B4",
      duration: "5:21",
    },
    {
      id: 2,
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      album: "Album",
      youtubeId: "LJRA8UrlqCM",
      color: "#2E8B7B",
      duration: "3:02",
    },
    {
      id: 3,
      title: "What If I Told You That I Love You",
      artist: "Ali Gatie",
      album: "Album",
      youtubeId: "NKzd_YiW9AQ",
      color: "#FF1493",
      duration: "3:33",
    },
    {
      id: 4,
      title: "Those Eyes",
      artist: "New West",
      album: "Album",
      youtubeId: "GDND88fqt1o",
      color: "#3CB4A0",
      duration: "3:41",
    },
    {
      id: 5,
      title: "wish you were gay",
      artist: "Billie Eilish",
      album: "Album",
      youtubeId: "yaJx0Gj_LCY",
      color: "#DB2777",
      duration: "3:41",
    },
  ] as Song[],
};
