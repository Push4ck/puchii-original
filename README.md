# Netflix Birthday Website - Project Documentation

> A beautiful, personalized birthday website built with React, TypeScript, and Framer Motion

---

## 🚀 Quick Start

### Where to Edit Content

All website content is stored in data files. **Don't edit components** - edit the data files instead!

| What to Change   | File                           | Key Fields                                 |
| ---------------- | ------------------------------ | ------------------------------------------ |
| 🎂 Birthday Date | `src/data/countdownData.ts`    | `birthdayDate`                             |
| 🎵 Songs         | `src/data/musicData.ts`        | `title`, `artist`, `youtubeId`, `duration` |
| 📸 Photos        | `src/data/photoGalleryData.ts` | `image` URLs, `text` descriptions          |
| 💝 Love Letter   | `src/data/loveLetterData.ts`   | `letterContent`                            |
| ❤️ 22 Reasons    | `src/data/reasonsData.ts`      | `title`, `text`                            |
| 📅 Timeline      | `src/data/timelineData.ts`     | `title`, `desc`, `icon`, `color`           |
| 🎬 Videos        | `src/data/videoData.ts`        | `title`, `desc`                            |
| 💬 Quotes        | `src/data/quotesData.ts`       | Array of quote strings                     |
| 🎂 Cake Message  | `src/data/birthdayData.ts`     | `personName`, `age`, `cakeMessage`         |

---

## 📁 Project Structure

```
netflix-theme-birthday-website/
│
├── src/
│   ├── components/               # React Components (don't edit content here)
│   │   ├── NetflixIntro.tsx      # Netflix intro animation
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── HeroSection.tsx       # Landing section
│   │   ├── CountdownTimer.tsx    # Birthday countdown
│   │   ├── Timeline.tsx          # Love story timeline
│   │   ├── PhotoGallery.tsx      # Photo gallery
│   │   ├── DetailedPhotoViewer.tsx # Photo detail view
│   │   ├── VideoSection.tsx      # Video section
│   │   ├── MusicPlaylist.tsx     # Music player
│   │   ├── ReasonsILoveYou.tsx   # 22 reasons cards
│   │   ├── LoveLetter.tsx        # Love letter
│   │   ├── BirthdayCake.tsx      # Interactive cake
│   │   ├── QuotesMarquee.tsx     # Scrolling quotes
│   │   ├── Footer.tsx            # Footer
│   │   ├── FloatingElements.tsx  # Background animations
│   │   └── SectionDivider.tsx    # Section separators
│   │
│   ├── data/                     # ⭐ EDIT HERE! All Content
│   │   ├── heroData.ts           # Hero section
│   │   ├── countdownData.ts      # Countdown timer
│   │   ├── timelineData.ts       # Love story
│   │   ├── reasonsData.ts        # 22 reasons
│   │   ├── quotesData.ts         # Love quotes
│   │   ├── videoData.ts          # Videos
│   │   ├── musicData.ts          # Music playlist
│   │   ├── loveLetterData.ts     # Love letter
│   │   ├── birthdayData.ts       # Cake section
│   │   └── photoGalleryData.ts   # Photo gallery
│   │
│   ├── types/                    # ⭐ Centralized TypeScript Interfaces
│   │   └── index.ts              # All project types
│   │
│   ├── utils/
│   │   └── cn.ts                 # Utility functions
│   │
│   ├── main.tsx                  # Entry point
│   ├── App.tsx                   # Main component
│   └── index.css                 # Global styles
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## 📋 Content Update Guide

### 🎂 Birthday Date (MOST IMPORTANT!)

**File:** `src/data/countdownData.ts`

```typescript
birthdayDate: "2026-05-30T00:00:00"; // Change to actual birthday
```

Format: `YYYY-MM-DDTHH:MM:SS`

---

### 🎵 Music Songs

**File:** `src/data/musicData.ts`

Update each song object:

- `title`: Song name
- `artist`: Singer name
- `youtubeId`: YouTube video ID (from URL: `youtube.com/watch?v=XXXXX`)
- `duration`: Song length (e.g., `3:45`)
- `color`: Hex color code for the player

**Getting YouTube IDs:**

1. Open YouTube video
2. Copy from URL: `youtube.com/watch?v=**COPY_THIS**`
3. Make sure the video is embeddable

---

### 📸 Photo Gallery

**File:** `src/data/photoGalleryData.ts`

Each gallery card has:

- `title`: Card title
- `subtitle`: Card subtitle
- `photos`: Array of 3 photos with `id`, `image` URL, and `text`
- `color`: Hex color code

**Getting Free Images:** Use Unsplash, Pexels, or other free image services

---

### 💝 Love Letter

**File:** `src/data/loveLetterData.ts`

Update `letterContent` with your personal message:

```typescript
letterContent: `My Dearest [Name],

Happy Birthday!
...your message here...

Forever yours,
[Your Name]`;
```

Use `\n` for line breaks.

---

### ❤️ 22 Reasons I Love You

**File:** `src/data/reasonsData.ts`

Each reason card has:

- `title`: Short title
- `text`: Full description

Add more or edit existing reasons.

---

### 📅 Timeline

**File:** `src/data/timelineData.ts`

Each milestone has:

- `title`: Event name
- `desc`: Description
- `icon`: Choose from: `Heart`, `MessageCircle`, `Star`, `MapPin`, `Calendar`, `Sparkles`
- `color`: Hex color code

---

### 🎬 Videos

**File:** `src/data/videoData.ts`

Each video has:

- `title`: Video title
- `desc`: Short description
- `color`: Hex color code

---

### 💬 Love Quotes

**File:** `src/data/quotesData.ts`

Simple array of quote strings:

```typescript
export const quotesData = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  // ...
];
```

---

### 🎂 Cake Message

**File:** `src/data/birthdayData.ts`

Update:

- `personName`: Name for cake
- `age`: Birthday age
- `cakeMessage`: Main message on cake

---

## 🎨 Customization

### Change Theme Colors

Common colors used:

- `#FF69B4` → Hot Pink
- `#2E8B7B` → Teal
- `#FF1493` → Deep Pink
- `#3CB4A0` → Medium Aquamarine

Search for hex codes and replace throughout data files.

### Add More Reasons

Open `src/data/reasonsData.ts` and add to the `reasons` array:

```typescript
{
  title: "Your Sense of Humor",
  text: "You make me laugh every single day..."
}
```

---

## 📊 Feature Status

| Feature         | Status | Notes                 |
| --------------- | ------ | --------------------- |
| Netflix Intro   | ✅     | Smooth animation      |
| Navbar          | ✅     | All links functional  |
| Hero Section    | ✅     | Responsive            |
| Countdown Timer | ✅     | Update date needed    |
| Timeline        | ✅     | Love story milestones |
| Photo Gallery   | ✅     | With detailed viewer  |
| Music Playlist  | ✅     | All songs working     |
| Reasons Cards   | ✅     | Flip animation        |
| Love Letter     | ✅     | Typewriter effect     |
| Birthday Cake   | ✅     | Interactive           |
| Videos Section  | ✅     | Ready for content     |
| Quotes Marquee  | ✅     | Scrolling             |
| Footer          | ✅     | Social links          |

### Player Features

| Feature        | Status |
| -------------- | ------ |
| Play/Pause     | ✅     |
| Next/Previous  | ✅     |
| Shuffle        | ✅     |
| Repeat         | ✅     |
| Volume Control | ✅     |
| Progress Bar   | ✅     |
| Seek           | ✅     |
| Time Display   | ✅     |

---

## 🛠️ Type Safety

All TypeScript types are centralized in `src/types/index.ts`:

- `Song` - Music playlist song
- `PhotoData` - Individual photo
- `GalleryCard` - Photo gallery card
- `GallerySection` - Gallery section
- `Video` - Video item

This ensures type consistency across the entire project.

---

## 📱 Responsive Design

- ✅ Mobile (<640px)
- ✅ Tablet (640-1024px)
- ✅ Desktop (>1024px)

---

## 🔐 Security & Performance

- ✅ No vulnerabilities
- ✅ Optimized images
- ✅ Type-safe code
- ✅ Efficient animations
- ✅ No console errors

---

## 💡 Tips

1. **Always edit data files, never component text**
2. **Update birthday date first** - it's the most important
3. **Use hex color codes** consistently
4. **Test changes in browser** - live reload is enabled
5. **Keep descriptions concise** for better mobile display
6. **Get free images** from Unsplash or Pexels

---

## 🎯 Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📞 Support

For issues or customization help:

1. Check the data files first
2. Ensure date format is correct (YYYY-MM-DDTHH:MM:SS)
3. Verify image URLs are accessible
4. Check browser console for errors

---

**Last Updated:** May 2026 | Built with ❤️
