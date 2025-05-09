"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height to determine when to show button
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection?.getBoundingClientRect().height || 700;
      
      setShow(window.scrollY > heroHeight - 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      if (show) {
        gsap.to(button, { opacity: 1, y: 0, duration: 0.3 });
      } else {
        gsap.to(button, { opacity: 0, y: 20, duration: 0.3 });
      }
    }
  }, [show]);
  
  return (
    <a
      ref={buttonRef}
      href="#hero"
      className="
        fixed right-8 bottom-8 bg-transparent text-[var(--color-secondary)]
        rounded px-4 py-2.5 text-sm flex items-center gap-1 z-50 no-underline
        transition-colors duration-200 hover:bg-[var(--color-secondary)] hover:text-white
      "
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <span className="transform -rotate-90 mr-1.5 text-sm">↑</span>
      Back to top
    </a>
  );
};

export default BackToTop;
