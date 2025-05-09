"use client";
import React, { useRef, useEffect } from "react";
import galleryMedia from "../data/gallery";
import gsap from "gsap";

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  
  // Split gallery media into two parts for top and bottom rows
  const halfLength = Math.ceil(galleryMedia.length / 2);
  const topRowMedia = [...galleryMedia.slice(0, halfLength), ...galleryMedia.slice(0, halfLength)];
  const bottomRowMedia = [...galleryMedia.slice(halfLength), ...galleryMedia.slice(halfLength)];

  useEffect(() => {
    const container = containerRef.current;
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    
    if (!container || !topRow || !bottomRow) return;
    
    // Set initial positions
    gsap.set(topRow, { x: 0 });
    gsap.set(bottomRow, { x: 0 });
    
    // Create smooth auto-scrolling animations
    const topRowAnimation = gsap.to(topRow, {
      x: "-50%", // Move to the left
      duration: 30,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(topRow, { x: 0 });
      }
    });
    
    const bottomRowAnimation = gsap.to(bottomRow, {
      x: "50%", // Move to the right
      duration: 30,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(bottomRow, { x: 0 });
      }
    });
    
    // Handle wheel events to speed up or slow down the scrolling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Determine direction and factor
      const speedFactor = e.deltaY > 0 ? 1.5 : 0.5;
      
      // Speed up or slow down animations based on wheel direction
      topRowAnimation.timeScale(speedFactor);
      bottomRowAnimation.timeScale(speedFactor);
      
      // Reset timeScale after a moment
      gsap.delayedCall(1, () => {
        topRowAnimation.timeScale(1);
        bottomRowAnimation.timeScale(1);
      });
    };
    
    // Add event listener for wheel event
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      topRowAnimation.kill();
      bottomRowAnimation.kill();
    };
  }, []);

  // Common styles for gallery items
  const itemStyle = {
    minWidth: '25vw',
    height: '35vh',
    borderRadius: '1vw',
    overflow: 'hidden',
    flexShrink: 0,
    cursor: 'pointer',
    margin: '0 1vw',
  };
  
  // Common styles for rows
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row' as const,
    flexWrap: 'nowrap' as const,
    gap: '0',
    padding: '2vh 0',
    position: 'relative' as const,
    willChange: 'transform',
  };

  return (
    <div
      id="gallery"
      ref={containerRef}
      className="gallery-container"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#111',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        position: 'relative',
      }}
    >
      {/* Top row - moving left */}
      <div 
        ref={topRowRef}
        className="gallery-row top-row"
        style={rowStyle}
      >
        {topRowMedia.map((media, index) => (
          <div
            key={`top-${media.id}-${index}`}
            className="gallery-item relative group"
            style={itemStyle}
            tabIndex={0}
          >
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={media.alt}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '1vw',
                  userSelect: 'none',
                  display: 'block',
                }}
                draggable={false}
              />
            ) : (
              <video
                src={media.src}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '1vw',
                  userSelect: 'none',
                  background: '#000',
                  display: 'block',
                }}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            )}
            
            {/* Overlay detail on hover/focus */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
              style={{
                background: 'rgba(20,20,20,0.65)',
                color: '#fff',
                fontSize: '1.4rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textShadow: '0 2px 12px #000b',
                borderRadius: '1vw',
                padding: '0 1vw',
                textAlign: 'center',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {media.title}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom row - moving right */}
      <div 
        ref={bottomRowRef}
        className="gallery-row bottom-row"
        style={rowStyle}
      >
        {bottomRowMedia.map((media, index) => (
          <div
            key={`bottom-${media.id}-${index}`}
            className="gallery-item relative group"
            style={itemStyle}
            tabIndex={0}
          >
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={media.alt}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '1vw',
                  userSelect: 'none',
                  display: 'block',
                }}
                draggable={false}
              />
            ) : (
              <video
                src={media.src}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '1vw',
                  userSelect: 'none',
                  background: '#000',
                  display: 'block',
                }}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            )}
            
            {/* Overlay detail on hover/focus */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
              style={{
                background: 'rgba(20,20,20,0.65)',
                color: '#fff',
                fontSize: '1.4rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textShadow: '0 2px 12px #000b',
                borderRadius: '1vw',
                padding: '0 1vw',
                textAlign: 'center',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {media.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
