"use client";
import React, { useEffect, useRef, useState } from "react";
import { MousePointerClick, Atom } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
];

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScroll = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const atomIconRef = useRef<HTMLDivElement>(null);
  
  // Check if we're on the client side and update mobile state
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      setShow(curr < 80 || curr < lastScroll.current);
      lastScroll.current = curr;
      
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Animate navbar on show/hide
  useEffect(() => {
    const nav = navRef.current;
    if (nav) {
      if (show) {
        gsap.to(nav, { y: 0, opacity: 1, duration: 0.3, ease: "easeInOut" });
      } else {
        gsap.to(nav, { y: -80, opacity: 0, duration: 0.3, ease: "easeInOut" });
      }
    }
  }, [show]);
  
  // Handle mobile menu animations
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const atomIcon = atomIconRef.current;
    
    if (menu) {
      if (mobileMenuOpen) {
        // Open animation
        gsap.to(menu, { 
          right: 0, 
          opacity: 1, 
          duration: 0.4, 
          ease: "power3.out" 
        });
        
        // Animate atom icon to X
        if (atomIcon) {
          gsap.to(atomIcon, {
            rotation: 90,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = "hidden";
      } else {
        // Close animation
        gsap.to(menu, { 
          right: "-100%", 
          opacity: 0.3, 
          duration: 0.3, 
          ease: "power3.in" 
        });
        
        // Reset atom icon
        if (atomIcon) {
          gsap.to(atomIcon, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
        
        // Restore body scroll
        document.body.style.overflow = "";
      }
    }
  }, [mobileMenuOpen]);
  
  // Close menu when clicking a link
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-[var(--color-tertiary)] border-b border-[var(--color-secondary)] shadow-lg shadow-black/5 font-sans backdrop-blur-md"
        style={{ opacity: 0, transform: 'translateY(-80px)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo + Mobile Menu Toggle: Single Atom icon that serves both purposes */}
          <div 
            ref={atomIconRef}
            className="group flex items-center font-bold text-2xl tracking-tight text-[var(--color-primary)] select-none cursor-pointer"
            onClick={() => isMobile ? setMobileMenuOpen(!mobileMenuOpen) : null}
            aria-expanded={mobileMenuOpen}
            aria-label={isMobile ? "Toggle menu" : "Home"}
            role="button"
            tabIndex={0}
          >
            <Atom 
              size={26} 
              className={`transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} 
            />
            <span className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 whitespace-nowrap md:inline-block">
              Jose Katriel
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-text)] text-base font-medium opacity-85 hover:text-[var(--color-accent)] transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Book a Call Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-base no-underline cursor-pointer px-3 py-1.5 rounded-lg hover:bg-[var(--color-secondary)]/10 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            <MousePointerClick size={18} />
            <span className="hidden md:inline">Book A Call</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-[-100%] w-full sm:w-80 h-full z-40 bg-[var(--color-tertiary)] backdrop-blur-lg shadow-xl pt-20 opacity-0 transition-opacity duration-300 overflow-y-auto`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col p-6 gap-6">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-1">Navigation</h3>
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--color-text)] text-xl font-medium hover:text-[var(--color-accent)] transition-colors duration-200 py-1"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Book A Call */}
          <div className="mt-6 pt-6 border-t border-[var(--color-secondary)]/30">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 text-[var(--color-primary)] bg-[var(--color-secondary)]/10 font-semibold text-base no-underline cursor-pointer px-4 py-3 rounded-lg hover:bg-[var(--color-secondary)]/20 transition-colors duration-200 w-full"
              onClick={handleLinkClick}
            >
              <MousePointerClick size={18} />
              <span>Book A Call</span>
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-auto pt-6 text-center text-sm text-[var(--color-text)]/70">
            <p>© 2025 Jose Katriel</p>
            <p className="mt-1">Game Developer & Designer</p>
          </div>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavBar;
