"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  
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
  
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          href="#hero"
          className="
            fixed right-8 bottom-8 bg-transparent text-[var(--color-secondary)]
            rounded px-4 py-2.5 text-sm flex items-center gap-1 z-50 no-underline
            transition-colors duration-200 hover:bg-[var(--color-secondary)] hover:text-white
          "
        >
          <span className="transform -rotate-90 mr-1.5 text-sm">↑</span>
          Back to top
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
