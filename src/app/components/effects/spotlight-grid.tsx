'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

const GRID_SIZE = 60; // Size of each grid square
const GRID_SPACING = 1; // Space between squares
const ELEVATION_FACTOR = 20; // Max elevation in pixels
const FOLLOW_SPEED = 0.08; // Speed of cursor follow (0-1, lower is slower)
const EFFECT_RADIUS = 300; // Radius in pixels where the effect is visible
const PERSPECTIVE = 500; // 3D perspective value

interface GridCell {
  id: number;
  x: number;
  y: number;
}

export default function SpotlightGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedMousePosition, setDelayedMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(true); // Start with hover effect active
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [gridCells, setGridCells] = useState<GridCell[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  // Handle component mount
  useEffect(() => {
    setMounted(true);
    return () => {
      // Clean up on unmount
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle window resize and initial dimensions
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set initial mouse position to center of screen
    const initialPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    setMousePosition(initialPos);
    setDelayedMousePosition(initialPos);

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Handle delayed mouse position for smooth following
  useEffect(() => {
    if (!mounted) return;

    const animateFollow = () => {
      setDelayedMousePosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * FOLLOW_SPEED,
        y: prev.y + (mousePosition.y - prev.y) * FOLLOW_SPEED
      }));

      animationRef.current = requestAnimationFrame(animateFollow);
    };

    animationRef.current = requestAnimationFrame(animateFollow);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted, mousePosition]);

  // Generate grid cells only on client side
  useEffect(() => {
    if (!mounted || dimensions.width === 0) return;

    const cells: GridCell[] = [];
    const rows = Math.ceil(dimensions.height / GRID_SIZE);
    const cols = Math.ceil(dimensions.width / GRID_SIZE);

    // Generate cells more efficiently
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        cells.push({
          id: y * cols + x,
          x: x * GRID_SIZE + GRID_SPACING / 2,
          y: y * GRID_SIZE + GRID_SPACING / 2,
        });
      }
    }

    setGridCells(cells);
  }, [dimensions, mounted]);

  // Calculate lift effect based on distance from cursor
  const calculateLift = (cellX: number, cellY: number) => {
    const dx = cellX + GRID_SIZE / 2 - delayedMousePosition.x;
    const dy = cellY + GRID_SIZE / 2 - delayedMousePosition.y;
    const distanceSquared = dx * dx + dy * dy;
    
    if (distanceSquared > EFFECT_RADIUS * EFFECT_RADIUS) return 0;
    
    const distance = Math.sqrt(distanceSquared);
    // Higher value means more elevation (closer to cursor)
    // Use a non-linear curve for more dramatic effect
    const elevationValue = Math.pow(1 - distance / EFFECT_RADIUS, 2);
    return elevationValue * ELEVATION_FACTOR;
  };

  // Memoize the spotlight gradients to reduce re-renders
  const spotlightStyles = useMemo(() => {
    return {
      primary: {
        background: `radial-gradient(
          280px circle at ${delayedMousePosition.x}px ${delayedMousePosition.y}px, 
          var(--color-dark-purple-100) 50%,
          var(--color-azure-500) 10%,
          transparent 100%
        )`,
        opacity:0.7,
        filter: 'blur(80px)',
        transform: isHovered ? 'scale(1)' : 'scale(0.9)',
      },
      secondary: {
        background: `radial-gradient(
          600px circle at ${delayedMousePosition.x}px ${delayedMousePosition.y}px, 
          var(--color-dark-purple-600) 50%,
          transparent 10%
        )`,
        opacity: 0.5,
        filter: 'blur(40px)',
        mixBlendMode: 'screen' as const,
      }
    };
  }, [delayedMousePosition.x, delayedMousePosition.y, isHovered]);

  // If not mounted yet, return empty div to prevent SSR issues
  if (!mounted) {
    return <div className="w-screen h-screen bg-[var(--color-night-500)]" />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-[var(--color-night-500)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={spotlightStyles.primary}
      />

      {/* Secondary Spotlight for added effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={spotlightStyles.secondary}
      />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          perspective: `${PERSPECTIVE}px`,
          transformStyle: 'preserve-3d'
        }}
      >
        {gridCells.map(cell => {
          const elevation = calculateLift(cell.x, cell.y);
          
          // Skip rendering cells with no elevation effect for performance
          if (elevation === 0) {
            return (
              <div
                key={cell.id}
                className="absolute grid-square"
                style={{
                  width: GRID_SIZE - GRID_SPACING,
                  height: GRID_SIZE - GRID_SPACING,
                  left: cell.x,
                  top: cell.y,
                  backgroundColor: 'var(--color-night-500)',
                }}
              />
            );
          }
          
          // Calculate a subtle rotation based on position relative to cursor
          const rotX = ((cell.y + GRID_SIZE / 2) - delayedMousePosition.y) * 0.02;
          const rotY = (delayedMousePosition.x - (cell.x + GRID_SIZE / 2)) * 0.02;
          
          return (
            <div
              key={cell.id}
              className="absolute grid-square"
              style={{
                width: GRID_SIZE - GRID_SPACING,
                height: GRID_SIZE - GRID_SPACING,
                left: cell.x,
                top: cell.y,
                backgroundColor: elevation > ELEVATION_FACTOR / 2 
                  ? 'var(--color-dark-purple-400)' 
                  : elevation > ELEVATION_FACTOR / 3 
                    ? 'var(--color-night-400)'
                    : 'var(--color-night-500)',
                transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.8s ease',
                transform: `translateZ(${elevation}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${1 + elevation / 70})`,
                opacity: 1 - elevation / 20,
                boxShadow: `0 ${elevation * 2}px ${elevation * 3}px rgba(0, 0, 0, 1)`,
                zIndex: Math.floor(elevation),
                transformStyle: 'preserve-3d',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
