"use client";
import React, { useEffect, useRef, useState } from "react";
import { MousePointerClick, Atom } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Portfolio", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
];

const NavBar = () => {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      setShow(curr < 80 || curr < lastScroll.current);
      lastScroll.current = curr;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-[var(--color-tertiary)] border-b border-[var(--color-secondary)] shadow-lg shadow-black/5 font-sans backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center py-4 gap-4">
            {/* Logo: Atom icon, reveal text on hover */}
            <div className="group flex items-center font-bold text-2xl tracking-tight text-[var(--color-primary)] mr-12 select-none cursor-pointer">
              <Atom size={26} className="transition-all duration-300" />
              <span className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Jose Katriel
              </span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex gap-8" style={{ marginRight: 'auto' }}>
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--color-text)] text-base font-medium opacity-85 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Book a Call: always show icon and text, no animation */}
            <a
              href="#contact"
              className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-base no-underline ml-2 cursor-pointer px-2 py-1"
              style={{ marginLeft: 'auto' }}
            >
              <MousePointerClick size={18} className="mr-1" />
              Book A Call
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
