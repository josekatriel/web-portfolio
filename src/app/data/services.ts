export interface Service {
  title: string;
  description: string;
  details: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps built with React, Next.js, and more.",
    details:
      "Full-stack development, API integration, CMS, e-commerce, and more. Tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Game Development",
    description: "Engaging 2D/3D games for web and mobile platforms.",
    details:
      "Unity, Godot, and custom backend. Prototyping, publishing, and live ops support.",
    icon: "🎮",
  },
  {
    title: "Content Creation",
    description:
      "Video production, streaming, and social media content production.",
    details:
      "Video editing, channel branding, social media management, and audience growth.",
    icon: "📹",
  },
  {
    title: "Brand & Social Media",
    description:
      "Branding, design, and social media strategy for creators and businesses.",
    details:
      "Logo design, visual identity, content calendars, and analytics-driven campaigns.",
    icon: "📈",
  },
];
