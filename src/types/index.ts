// ============================================
// MUSIC PLAYLIST TYPES
// ============================================
export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  youtubeId: string;
  color: string;
  duration: string;
}

// ============================================
// PHOTO GALLERY TYPES
// ============================================
export interface PhotoData {
  id: string;
  image: string;
  text: string;
}

export interface GalleryCard {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  photos: PhotoData[];
}

export interface GallerySection {
  label: string;
  items: GalleryCard[];
}

// ============================================
// VIDEO TYPES
// ============================================
export interface Video {
  id: number;
  title: string;
  desc: string;
  color: string;
  src?: string;
  link?: string;
}
