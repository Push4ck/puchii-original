# Data Files Documentation

All website content is now organized into separate data files for easy management and updates. Each section has its own file in the `src/data/` directory.

## 📁 Data Files Structure

### 1. **heroData.ts** - Hero Section

Contains the main landing section content.

```typescript
export const heroData = {
  badge: "Welcome to Puchii",
  title: "Happy 22nd Birthday",
  subtitle: "My Love, My Life, My Everything",
  description: "A special tribute to the most incredible person in my life...",
  cta: "Scroll to explore our journey",
};
```

**Location:** Hero Section (top of page)
**Edit:** Change `title`, `subtitle`, `description`

---

### 2. **countdownData.ts** - Countdown Timer

Manages the birthday countdown section.

```typescript
export const countdownData = {
  birthdayDate: "2026-05-30T00:00:00", // Change to actual birthday
  badge: "Countdown",
  title: "Days Until",
  subtitle: "Your Special Day",
  description: "Every moment brings us closer",
  celebrationMessage: "Happy Birthday! 🎉",
  celebrationSubtitle: "The day of love has arrived!",
};
```

**Location:** Countdown Timer section
**Important:** Update `birthdayDate` to the actual birthday date
**Format:** `YYYY-MM-DDTHH:MM:SS`

---

### 3. **timelineData.ts** - Our Love Story

Timeline with 6 major milestones of your relationship.

```typescript
export const timelineData = {
  badge: "Our Journey",
  title: "Our Love",
  titleGradient: "Story",
  description:
    "Every chapter of us, every milestone that made this love what it is",
  milestones: [
    {
      icon: Heart,
      title: "The Day We Met",
      desc: "Two strangers became...",
      color: "#FF69B4",
    },
    // ... 6 milestones total
  ],
};
```

**Location:** Timeline section
**Edit:** Update `title`, `desc`, and `color` for each milestone
**Note:** Icon types available: `Heart`, `MessageCircle`, `Star`, `MapPin`, `Calendar`, `Sparkles`

---

### 4. **reasonsData.ts** - 22 Reasons I Love You

Contains 22 reasons organized as flip cards.

```typescript
export const reasonsData = {
  badge: "22 Reasons",
  title: "22 Reasons",
  titleGradient: "I Love You",
  description: "One reason for every beautiful year of your life...",
  reasons: [
    { title: "Your Smile", text: "The way you smile can light up..." },
    // ... 22 total reasons
  ],
};
```

**Location:** Reasons section
**Edit:** Update individual reason `title` and `text`
**Note:** Can add or remove reasons - pagination automatically adjusts

---

### 5. **quotesData.ts** - Love Quotes Marquee

Scrolling quotes throughout the website.

```typescript
export const quotesData = [
  "You're my today and all of my tomorrows",
  "In a sea of people, my eyes will always search for you",
  // ... 8 quotes total
];
```

**Location:** Appears between sections
**Edit:** Add or modify quotes - they loop infinitely

---

### 6. **videoData.ts** - Video Section

4 video placeholders with embedded player.

```typescript
export const videoData = {
  badge: "Our Videos",
  title: "Puchii",
  titleGradient: "Originals",
  description: "Our personal collection of precious video memories",
  videos: [
    {
      id: 1,
      title: "Our Story",
      desc: "How it all began...",
      color: "#FF69B4",
    },
    // ... 4 videos
  ],
};
```

**Location:** Video section
**Edit:** Update video `title`, `desc`, and `color`
**Note:** Replace placeholder video embeds in `VideoSection.tsx`

---

### 7. **musicData.ts** - Music Playlist

Contains 5 songs with YouTube IDs.

```typescript
export const musicData = {
  badge: "Prachi's Playlist",
  title: "Songs That",
  titleGradient: "Define Us",
  description: "Every melody here carries a memory...",
  songs: [
    {
      id: 1,
      title: "Tum Ho",
      artist: "Mohit Chauhan",
      album: "Rockstar",
      youtubeId: "dQw4w9WgXcQ", // <- YouTube video ID
      color: "#FF69B4",
      duration: "5:42",
    },
    // ... 5 songs
  ],
};
```

**Location:** Music Playlist section
**Edit:** Update song details and YouTube IDs
**To get YouTube ID:** Open video → Copy the `v` parameter from URL

---

### 8. **loveLetterData.ts** - Love Letter Section

Romantic letter from the heart.

```typescript
export const loveLetterData = {
  badge: "A Letter For You",
  title: "Words From",
  titleGradient: "My Heart",
  subtitle: "Every word written with love, sealed with a heartbeat",
  letterTo: "To: My Prachi",
  letterContent: `My Dearest Prachi,\n\nHappy 22nd Birthday...`,
};
```

**Location:** Love Letter section
**Edit:** Update `letterContent` with your personal message
**Note:** Use `\n` for line breaks

---

### 9. **birthdayData.ts** - Birthday Cake

Interactive birthday cake animation.

```typescript
export const birthdayData = {
  badge: "Make a Wish",
  title: "Your Birthday",
  titleGradient: "Cake",
  description: "Close your eyes, make a wish, and blow the candles!",
  personName: "Prachi",
  age: 22,
  cakeMessage: "Prachi 22",
  celebrationMessage: "Happy Birthday! 🎉",
};
```

**Location:** Birthday Cake section
**Edit:** Update `personName`, `age`, `cakeMessage`

---

### 10. **photoGalleryData.ts** - Photo Gallery

Two sections with 12 cards, each containing 3 photos and descriptions.

```typescript
export const photoGalleryData: GallerySection[] = [
  {
    label: "Our Beautiful Moments",
    items: [
      {
        id: 1,
        title: "First Meet",
        subtitle: "Where it all began",
        color: "#FF69B4",
        photos: [
          {
            id: "fm1",
            image: "https://images.unsplash.com/...",
            text: "The moment our eyes met...",
          },
          // ... 3 photos per card
        ],
      },
      // ... 12 cards total (6 per section)
    ],
  },
  {
    label: "The Prachi Collection",
    items: [
      // ... 6 cards
    ],
  },
];
```

**Location:** Photo Gallery section
**Edit:** Update `image` URLs and `text` descriptions
**Sections:**

- Our Beautiful Moments (6 cards)
- The Prachi Collection (6 cards)

---

## 🎨 Color Reference

Colors used throughout the website:

| Color           | Hex       | Usage            |
| --------------- | --------- | ---------------- |
| Pink Primary    | `#FF69B4` | Primary accent   |
| Dark Pink       | `#FF1493` | Secondary accent |
| Pink Light      | `#DB2777` | Tertiary accent  |
| Sea Green       | `#2E8B7B` | Green accent     |
| Sea Green Light | `#3CB4A0` | Light green      |
| Teal            | `#20B2AA` | Teal accent      |

---

## 🔄 How to Update Content

### Step 1: Find the Right Data File

Identify which section you want to edit and open the corresponding file.

### Step 2: Update the Data

Modify the content directly in the data object.

### Step 3: Component Auto-Updates

The components automatically import and use the data - no additional changes needed!

### Example: Update a Song

```typescript
// src/data/musicData.ts
songs: [
  {
    id: 1,
    title: "Your Song Title", // ← Change this
    artist: "Artist Name", // ← Change this
    album: "Album Name", // ← Change this
    youtubeId: "VIDEO_ID_HERE", // ← Change YouTube ID
    color: "#FF69B4", // ← Change color if needed
    duration: "3:45", // ← Update duration
  },
  // ...
];
```

---

## ✅ Checklist for Personalization

- [ ] Update `countdownData.ts` with actual birthday date
- [ ] Update `musicData.ts` with your actual song YouTube IDs
- [ ] Customize `timelineData.ts` with your relationship milestones
- [ ] Personalize `reasonsData.ts` with unique reasons
- [ ] Write your own `loveLetterData.ts` message
- [ ] Update `birthdayData.ts` with person's name and age
- [ ] Replace `photoGalleryData.ts` images with your photos
- [ ] Customize `quotesData.ts` with meaningful quotes
- [ ] Update `heroData.ts` with personal message

---

## 📱 Responsive Design

All components are responsive and work on:

- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

---

## 🚀 Tips for Best Results

1. **Images:** Use high-quality images (min 800x800px for gallery)
2. **YouTube IDs:** Always use valid, embeddable video IDs
3. **Text:** Keep descriptions concise and heartfelt
4. **Colors:** Use the provided color palette for consistency
5. **Dates:** Always use ISO format (YYYY-MM-DDTHH:MM:SS)

---

For questions or issues, refer to the component files that import these data files.
