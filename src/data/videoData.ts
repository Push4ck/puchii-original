import type { Video } from "../types";

// Note: The 230MB local file is ignored by Git to allow pushing to GitHub.
// It's recommended to upload your video to Cloudinary or YouTube for production.
const GWWJ0307 =
  "https://drive.google.com/file/d/1Bstaw55NDzU497xsBa_MDWtimFcGCZ1a/preview";
const GWWJ0307_LINK =
  "https://drive.google.com/file/d/1Bstaw55NDzU497xsBa_MDWtimFcGCZ1a/view?usp=sharing";

export const videoData = {
  badge: "Our Videos",
  title: "Puchii",
  titleGradient: "Originals",
  description: "Our personal collection of precious video memories",
  videos: [
    {
      id: 1,
      title: "Our Story",
      desc: "How it all began — the Puchii origin",
      color: "#FF69B4",
      src: GWWJ0307,
      link: GWWJ0307_LINK,
    },
    // {
    //   id: 2,
    //   title: "GWWJ0307",
    //   desc: "A new memory from our videos collection",
    //   color: "#8A2BE2",
    // }
    // {
    //   id: 3,
    //   title: "Adventures",
    //   desc: "Travels & explorations together",
    //   color: "#FF1493",
    // },
    // {
    //   id: 4,
    //   title: "Birthday Messages",
    //   desc: "Special wishes just for you",
    //   color: "#3CB4A0",
    // },
  ] as Video[],
};
