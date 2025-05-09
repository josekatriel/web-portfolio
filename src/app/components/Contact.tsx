"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface SocialIconProps {
  icon: string;
  url: string;
  label: string;
  color: string;
}

const socialIcons: SocialIconProps[] = [
  {
    icon: "ri-discord-fill",
    url: "https://discord.com/invite/KRADGAwmu5", // <-- valid Discord invite for testing
    label: "Discord",
    color: "#5865F2",
  },
  {
    icon: "ri-github-fill",
    url: "https://github.com/josekatriel",
    label: "GitHub",
    color: "#333333",
  },
  {
    icon: "ri-instagram-fill",
    url: "https://instagram.com/josekatriel",
    label: "Instagram",
    color: "#E1306C",
  },
  {
    icon: "ri-twitter-fill",
    url: "https://x.com/katrjjjj",
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    icon: "ri-youtube-fill",
    url: "https://www.youtube.com/@katrgames",
    label: "YouTube",
    color: "#FF0000",
  },
  {
    icon: "ri-steam-fill",
    url: "https://store.steampowered.com/app/2500680/Tiny_Chaos/", // <-- replace with your actual Steam profile link
    label: "Steam",
    color: "#171A21",
  },
];

const SocialIcon: React.FC<SocialIconProps> = ({ icon, url, label, color }) => {
  const iconRef = useRef<HTMLAnchorElement>(null);
  const iconCircleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const icon = iconRef.current;
    const circle = iconCircleRef.current;
    
    if (!icon || !circle) return;
    
    // Create magnetic effect
    icon.addEventListener("mousemove", (e) => {
      console.log('mousemove on', label); // Debug: see if event fires for all icons
      const { clientX, clientY } = e;
      const { left, top, width, height } = icon.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) * 0.5;
      const y = (clientY - top - height / 2) * 0.5;
      
      gsap.to(circle, {
        x,
        y,
        scale: 1.12,
        duration: 0.25,
        ease: "power2.out",
      });
      
      gsap.to(icon, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    icon.addEventListener("mouseleave", () => {
      gsap.to(circle, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
      
      gsap.to(icon, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    });
    
    return () => {
      icon.removeEventListener("mousemove", () => {});
      icon.removeEventListener("mouseleave", () => {});
    };
  }, []);
  
  return (
    <a 
      ref={iconRef}
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-300"
      aria-label={label}
      style={{ pointerEvents: 'auto' }}
      tabIndex={0}
    >
      <div 
        ref={iconCircleRef}
        className="absolute inset-0 w-full h-full rounded-full"
        style={{ background: `radial-gradient(circle, ${color}40 0%, transparent 70%)` }}
      ></div>
      <i className={`${icon} text-3xl`} style={{ color }}></i>
    </a>
  );
};

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
        },
      });
      
      gsap.from(".contact-icons .icon-wrapper", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 60%",
        },
      });
      
      gsap.from(".contact-email", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 60%",
        },
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={contactRef} className="relative w-full py-24 px-6 flex flex-col items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0001] opacity-50"></div>
      
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
          Let&apos;s Connect
        </h2>
        
        <div className="contact-icons grid grid-cols-3 sm:grid-cols-6 gap-6 justify-center mb-16">
          {socialIcons.map((icon) => (
            <div key={icon.label} className="icon-wrapper flex justify-center">
              <SocialIcon {...icon} />
            </div>
          ))}
        </div>
        
        <div className="contact-email text-center">
          <p className="text-lg text-secondary mb-3">Or reach out</p>
          <a 
            href="mailto:work.josekatriel@gmail.com" 
            className="inline-block text-xl md:text-2xl font-medium text-accent hover:underline transition-all duration-300"
          >
            work.josekatriel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
