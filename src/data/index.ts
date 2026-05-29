// Central export point for all data files
// Import from this file instead of individual files for cleaner imports

export { heroData } from "./heroData";
export { countdownData } from "./countdownData";
export { timelineData } from "./timelineData";
export { reasonsData } from "./reasonsData";
export { quotesData } from "./quotesData";
export { videoData } from "./videoData";
export { musicData } from "./musicData";
export { loveLetterData } from "./loveLetterData";
export { birthdayData } from "./birthdayData";
export { photoGalleryData } from "./photoGalleryData";

// Type exports
export type {
  PhotoData,
  GalleryCard,
  GallerySection,
} from "./photoGalleryData";
export type { Song } from "./musicData";
export type { Video } from "./videoData";
