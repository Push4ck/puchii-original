import type { PhotoData, GalleryCard, GallerySection } from "../types";

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
            image: "/src/assets/first_meet/IMG_4293.jpg",
            text: "The moment our eyes met, everything changed. A spark of connection that felt like destiny.",
          },
          {
            id: "fm2",
            image: "/src/assets/first_meet/IMG_4294.png",
            text: "Standing nervously before you, my heart racing with possibility and hope.",
          },
          {
            id: "fm3",
            image: "/src/assets/first_meet/IMG_4296.jpg",
            text: "Your smile melted away all my worries. I knew this was the beginning of something beautiful.",
          },
          {
            id: "fm4",
            image: "/src/assets/first_meet/IMG_4297.jpg",
            text: "That first conversation, those first laughs - the foundation of our incredible journey together.",
          },
          {
            id: "fm5",
            image: "/src/assets/first_meet/IMG_4298.jpg",
            text: "From strangers to something so much more. I am forever grateful for that day we met.",
          },
          {
            id: "fm6",
            image: "/src/assets/first_meet/IMG_4299.jpg",
            text: "The start of our love story, captured in these precious photos. I cherish every single one.",
          },
        ],
      },
      {
        id: 2,
        title: "Our Dates",
        subtitle: "Every moment matters",
        color: "#2E8B7B",
        photos: [
          {
            id: "d1",
            image: "/src/assets/IMG_2923.JPG",
            text: "Candlelit nights where time seemed to stand still, lost in your eyes and our endless conversations.",
          },
          {
            id: "d2",
            image: "src/assets/IMG_2924.JPG",
            text: "Walking through the city with your hand in mine, feeling like we own the world.",
          },
          {
            id: "d3",
            image: "src/assets/IMG_2933.JPG",
            text: "Simple moments, simple smiles, yet everything felt extraordinary with you by my side.",
          },
          {
            id: "d4",
            image: "src/assets/IMG_2947.JPG",
            text: "Every date with you is a new adventure, a new memory to treasure forever.",
          },
          {
            id: "d5",
            image: "src/assets/IMG_2938.JPG",
            text: "From fancy dinners to casual strolls, every moment with you is a moment I want to relive.",
          },
        ],
      },
      {
        id: 3,
        title: "That Smile",
        subtitle: "My favorite view",
        color: "#FF1493",
        photos: [
          {
            id: "ts1",
            image: "src/assets/IMG_3901.JPG",
            text: "That smile that makes my heart skip a beat every single time. Pure joy, pure you.",
          },
          {
            id: "ts2",
            image: "src/assets/IMG_3875.JPG",
            text: "The way your eyes light up when you laugh - my favorite sight in the entire world.",
          },
          {
            id: "ts3",
            image: "src/assets/IMG_3797.JPG",
            text: "I could stare at that smile forever and never get tired of this feeling.",
          },
        ],
      },
      {
        id: 4,
        title: "Together",
        subtitle: "Us against the world",
        color: "#3CB4A0",
        photos: [
          {
            id: "tg1",
            image: "src/assets/IMG_3841.JPG",
            text: "Two souls united, stronger together. You are my anchor, my safe place, my everything.",
          },
          {
            id: "tg2",
            image: "src/assets/IMG_3836.JPG",
            text: "In your arms is where I belong. Nothing else in the world matters when we're together.",
          },
          {
            id: "tg3",
            image: "src/assets/IMG_3860.JPG",
            text: "Forever isn't long enough to love someone like you. We are unstoppable together.",
          },
        ],
      },
      {
        id: 5,
        title: "Adventures",
        subtitle: "Our little escapes",
        color: "#DB2777",
        photos: [
          {
            id: "adv1",
            image: "src/assets/IMG_3836.JPG",
            text: "Exploring new places with you makes every moment an adventure. The world feels brighter with you.",
          },
          {
            id: "adv2",
            image: "/src/assets/IMG_3785.JPG",
            text: "Chasing sunsets and dreams together. Every journey becomes magical with you by my side.",
          },
          {
            id: "adv3",
            image: "src/assets/IMG_2942.JPG",
            text: "Creating memories in places we've never been before. Our love story spans continents and moments.",
          },
        ],
      },
      {
        id: 6,
        title: "Candid Moments",
        subtitle: "Unfiltered love",
        color: "#20B2AA",
        photos: [
          {
            id: "cm1",
            image: "src/assets/IMG_2948.JPG",
            text: "The unguarded moments are the best. Your natural beauty takes my breath away every time.",
          },
          {
            id: "cm2",
            image: "src/assets/IMG_2924.JPG",
            text: "Captured in genuine laughter and real connection. This is us - perfectly imperfect and absolutely amazing.",
          },
          {
            id: "cm3",
            image: "src/assets/IMG_2932.JPG",
            text: "No filter, no pretense - just pure, honest love. You make me want to be my best self.",
          },
        ],
      },
      {
        id: 7,
        title: "Gorgeous",
        subtitle: "Stunning as always",
        color: "#FF69B4",
        photos: [
          {
            id: "g1",
            image: "src/assets/IMG_3797.JPG",
            text: "Absolutely stunning in every way. Your beauty radiates from within and lights up every room.",
          },
          {
            id: "g2",
            image: "src/assets/IMG_3901.JPG",
            text: "The kind of gorgeous that takes my breath away. You are my definition of perfection.",
          },
          {
            id: "g3",
            image: "src/assets/IMG_3831.JPG",
            text: "Every photo of you captures a fraction of your true beauty. Mesmerizing and enchanting.",
          },
        ],
      },
      {
        id: 8,
        title: "Cute Mode",
        subtitle: "Being adorable",
        color: "#2E8B7B",
        photos: [
          {
            id: "cute1",
            image: "src/assets/IMG_3786.JPG",
            text: "Your cute moments are the ones I cherish most. That innocent smile melts my heart instantly.",
          },
          {
            id: "cute2",
            image: "src/assets/IMG_3875.JPG",
            text: "Adorable in ways you could never comprehend. The world needs more of this sweetness.",
          },
        ],
      },
    ],
  },
  // {
  //   label: "The Prachi Collection",
  //   items: [
  //     {
  //       id: 7,
  //       title: "Gorgeous",
  //       subtitle: "Stunning as always",
  //       color: "#FF69B4",
  //       photos: [
  //         {
  //           id: "g1",
  //           image: "src/assets/IMG_3797.JPG",
  //           text: "Absolutely stunning in every way. Your beauty radiates from within and lights up every room.",
  //         },
  //         {
  //           id: "g2",
  //           image: "src/assets/IMG_3901.JPG",
  //           text: "The kind of gorgeous that takes my breath away. You are my definition of perfection.",
  //         },
  //         {
  //           id: "g3",
  //           image: "src/assets/IMG_3831.JPG",
  //           text: "Every photo of you captures a fraction of your true beauty. Mesmerizing and enchanting.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 8,
  //       title: "Cute Mode",
  //       subtitle: "Being adorable",
  //       color: "#2E8B7B",
  //       photos: [
  //         {
  //           id: "cute1",
  //           image: "src/assets/IMG_3786.JPG",
  //           text: "Your cute moments are the ones I cherish most. That innocent smile melts my heart instantly.",
  //         },
  //         {
  //           id: "cute2",
  //           image: "src/assets/IMG_3875.JPG",
  //           text: "Adorable in ways you could never comprehend. The world needs more of this sweetness.",
  //         }
  //         // {
  //         //   id: "cute3",
  //         //   image: "",
  //         //   text: "Being cute is your superpower. I could pinch your cheeks all day long!",
  //         // },
  //       ],
  //     },
  //     {
  //       id: 9,
  //       title: "Diva Vibes",
  //       subtitle: "Slaying it queen",
  //       color: "#FF1493",
  //       photos: [
  //         {
  //           id: "diva1",
  //           image: "",
  //           text: "You own it, you slay it, you conquer it. This is what confidence and grace look like.",
  //         },
  //         {
  //           id: "diva2",
  //           image: "",
  //           text: "Diva mode activated and you're absolutely killing it. The queen deserves her crown!",
  //         },
  //         {
  //           id: "diva3",
  //           image: "",
  //           text: "Fierce, fabulous, and phenomenal. You are the definition of a true diva queen.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 10,
  //       title: "My Sunshine",
  //       subtitle: "Brightening my world",
  //       color: "#3CB4A0",
  //       photos: [
  //         {
  //           id: "sun1",
  //           image: "",
  //           text: "You are the sunshine that brightens even my darkest days. My light, my hope, my everything.",
  //         },
  //         {
  //           id: "sun2",
  //           image: "",
  //           text: "Every day with you feels like a beautiful sunny day. You're my favorite kind of warmth.",
  //         },
  //         {
  //           id: "sun3",
  //           image: "",
  //           text: "My world was incomplete until you brought your sunshine into it. Thank you for existing.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 11,
  //       title: "My World",
  //       subtitle: "Everything to me",
  //       color: "#DB2777",
  //       photos: [
  //         {
  //           id: "w1",
  //           image: "",
  //           text: "You are my entire world. Everything I am, everything I want to be revolves around you.",
  //         },
  //         {
  //           id: "w2",
  //           image: "",
  //           text: "My world, my heart, my soul - all belong to you. You complete me in every way.",
  //         },
  //         {
  //           id: "w3",
  //           image: "",
  //           text: "If my world could be anything, it would always be you. Forever and always.",
  //         },
  //       ],
  //     },
  //     {
  //       id: 12,
  //       title: "The Queen",
  //       subtitle: "Crown suits you",
  //       color: "#20B2AA",
  //       photos: [
  //         {
  //           id: "q1",
  //           image: "",
  //           text: "You wear the crown of queen with such grace and elegance. Royalty has nothing on you.",
  //         },
  //         {
  //           id: "q2",
  //           image: "",
  //           text: "Every queen needs a king, but you are magnificent even standing alone. Powerful and beautiful.",
  //         },
  //         {
  //           id: "q3",
  //           image: "",
  //           text: "Long may you reign, your majesty. You are the true queen of my heart and my world.",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
