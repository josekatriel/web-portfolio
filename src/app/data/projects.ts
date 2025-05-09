// Type definitions
export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  url?: string; // Optional: external link (YouTube, Vimeo, etc.)
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imagePath: string;
  link: string;
  gallery: GalleryItem[];
};

export type ProjectCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  projects: Project[];
  link?: string; // Optional direct external link for categories with no projects
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "game-dev",
    title: "Game Development",
    subtitle: "Game Designer & Developer",
    description:
      "Making fun, memorable games with Unity and a love for pixel art and playful mechanics.",
    color: "#FF6B6B",
    projects: [
      {
        id: "tiny-chaos",
        title: "Tiny Chaos",
        description:
          "A duo developed Unity pixel-art game. Hand-coded (C#), hand-pixeled, and full of chaos and fun.",
        tags: ["Unity", "C#", "Pixel Art", "Game Design"],
        imagePath: "/images/tinychaos.png",
        link: "https://store.steampowered.com/app/2500680/Tiny_Chaos/",
        gallery: [
          {
            id: "tc1",
            type: "video",
            src: "/images/tc_clip_miner.mp4",
            alt: "Tiny Chaos Screenshot 1",
            caption: "Miner gameplay ",
          },
          {
            id: "tc2",
            type: "image",
            src: "/images/tinychaos_sw_pixelart.png",
            alt: "StarWander",
            caption: "StarWander Pixel Art",
          },
          {
            id: "tc3",
            type: "image",
            src: "/images/tinychaos_zane_pixelart.png",
            alt: "Zane",
            caption: "Zane Pixel Art",
          },
          {
            id: "tc4",
            type: "video",
            src: "/images/tc_clip_celestial.mp4",
            alt: "Celestial Trailer",
            caption: "New Character Celestial Trailer",
            url: "https://youtu.be/Cu13KvaR5cU?si=bS0nzjtRNjMdSbwf",
          },
          {
            id: "tc5",
            type: "video",
            src: "/images/tinychaos_showcase.mp4",
            alt: "Tiny Chaos Game Showcase",
            caption: "Game showcase on YouTube",
            url: "https://www.youtube.com/watch?v=flhmb5WvhPY",
          },
          {
            id: "tc6",
            type: "video",
            src: "/images/tinychaos_sw_teaser.mp4",
            alt: "Tiny Chaos Youtube Teaser",
            caption: "Starwanderer Trailer",
            url: "https://www.youtube.com/watch?v=-ktnZ5pa7Mo",
          },
        ],
      },
      {
        id: "mobile-games",
        title: "Mobile Games",
        description: "Mobile games development",
        tags: ["Mobile", "Unity", "Casual Game"],
        imagePath: "/images/mochidozer.png",
        link: "#",
        gallery: [
          {
            id: "md1",
            type: "image",
            src: "/images/mochidozer.png",
            alt: "Mochi Dozer Concept",
            caption: "Main game screen",
          },
          {
            id: "md2",
            type: "image",
            src: "/images/tr_concept.png",
            alt: "Traffic Rules",
            caption: "Traffic Rules",
          },
        ],
      },
    ],
  },
  {
    id: "youtube",
    title: "YouTube Content",
    subtitle: "Creator & Producer",
    description:
      "Sharing my gaming journey, tutorials, and development insights through engaging video content on my YouTube channel.",
    color: "#FF0000",
    projects: [
      {
        id: "youtube-1",
        title: "YouTube Content",
        description:
          "Sharing my gaming journey, tutorials, and development insights through engaging video content on my YouTube channel.",
        tags: ["YouTube", "Content", "Gaming"],
        imagePath: "/images/katrgames_channel.png",
        link: "https://www.youtube.com/@KatrGames",
        gallery: [],
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Full-Stack Developer",
    description:
      "Building responsive, modern web applications with React, Next.js, and other cutting-edge technologies for clients and personal projects.",
    color: "#6772E5",
    projects: [
      {
        id: "tokka",
        title: "Tokka.id",
        description:
          "A comprehensive web platform for Tokka where I contributed as a web designer, graphic designer, and video editor. My responsibilities included product design, visual content creation, and development support.",
        tags: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Web Design",
          "Video Editing",
          "Graphic Design",
        ],
        imagePath: "/images/tokka_cs.png", // Main showcase image
        link: "https://tokka.id",
        gallery: [
          {
            id: "tokka1",
            type: "image",
            src: "/images/tokka_web.png",
            alt: "Tokka Website UI",
            caption: "Web platform UI design",
            url: "https://tokka.id",
          },
          {
            id: "tokka2",
            type: "image",
            src: "/images/tokka_product_design.jpg",
            alt: "Product Design",
            caption: "Sample product design for Tokka",
          },
          {
            id: "tokka3",
            type: "video",
            src: "/images/tokka_logo_animation.mp4",
            alt: "Logo Animation",
            caption: "Animated logo intro",
          },
          {
            id: "tokka4",
            type: "video",
            src: "/images/tokka_clip_nyepi.mp4",
            alt: "Nyepi Clip",
            caption: "Social media clip for Nyepi celebration",
          },
          {
            id: "tokka5",
            type: "video",
            src: "/images/tokka_clip_animation.mp4",
            alt: "New Year Clip",
            caption: "New Year promotional clip",
          },
          {
            id: "tokka6",
            type: "video",
            src: "/images/tokka_video_pabrik.mp4",
            alt: "Company Introduction",
            caption: "Company profile video",
            url: "https://vimeo.com/1082810307/80c08e8781?ts=0&share=copy",
          },
        ],
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    subtitle: "Content Strategist",
    description:
      "Creating engaging social media content and managing campaigns to build brand awareness and community engagement.",
    color: "#8A2BE2",
    projects: [
      {
        id: "cocrea",
        title: "Cocrea Social Media",
        description:
          "Strategic social media management for Cocrea, focusing on audience growth and engagement through creative content.",
        tags: ["Instagram", "Content Strategy", "Community Building"],
        imagePath: "/images/cocrea_editing_602.jpg", // Temporary placeholder
        link: "https://www.instagram.com/cocrea_indonesia/",
        gallery: [
          {
            id: "sm1",
            type: "image",
            src: "/images/cocrea_editing.jpg",
            alt: "Social Media Post 1",
            caption: "Campaign visual",
          },
          {
            id: "sm2",
            type: "image",
            src: "/images/cocrea_editing_602.jpg",
            alt: "Social Media Post 2",
            caption: "Instagram story",
          },
          {
            id: "sm3",
            type: "image",
            src: "/images/cocrea_editing_903.jpg",
            alt: "Social Media Post 3",
            caption: "Content calendar",
          },
          {
            id: "sm4",
            type: "image",
            src: "/images/cocrea_calendar_design.jpg",
            alt: "Social Media Post 4",
            caption: "Content calendar with 3D Rendering",
          },
          {
            id: "sm5",
            type: "video",
            src: "/images/cocrea_802_video.mp4",
            alt: "Social Media Post 5",
            caption: "Company product video",
            url: "https://vimeo.com/1082827801/4a1008b51b?share=copy",
          },
        ],
      },
    ],
  },
  {
    id: "other-projects",
    title: "Other Projects",
    subtitle: "3D & Packaging Design",
    description:
      "A showcase of visual projects including 3D product renders and creative packaging design, emphasizing aesthetics, branding, and presentation.",
    color: "#FF7F50",
    projects: [
      {
        id: "visual-design",
        title: "Visual Design Showcase",
        description:
          "A collection of selected works focusing on 3D product visualization and unique packaging design for both digital and print use.",
        tags: ["3D Rendering", "Product Design", "Packaging", "Branding"],
        imagePath: "/images/3d_rendering.jpg", // Optional: set a main image
        link: "", // Optional: add a Behance or portfolio link
        gallery: [
          {
            id: "vis1",
            type: "image",
            src: "/images/3d_rendering.jpg",
            alt: "3D Product Render 1",
            caption: "3D rendering product",
          },
          {
            id: "vis2",
            type: "image",
            src: "/images/mamago_packaging.jpg",
            alt: "Packaging design",
            caption: "Packaging design",
          },
        ],
      },
    ],
  },
];
