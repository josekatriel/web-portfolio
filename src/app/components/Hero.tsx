import React from "react";
import { Section } from "./ui";
import SpotlightGrid from "./effects/spotlight-grid";

const Hero = () => (
  <Section 
    id="hero"
    background="tertiary"
    fullHeight
    className="relative flex flex-row items-stretch overflow-hidden"
  >
    {/* Spotlight effect background */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <SpotlightGrid />
    </div>
    {/* Left Column */}
    <div className="relative flex-1 flex flex-col justify-center items-start pl-[5vw] z-10">
      <h1 className="text-[6vw] font-bold tracking-tighter m-0 text-[var(--color-primary)]">
        Hello
      </h1>
      <div className="text-lg text-[var(--color-text)] mt-6 mb-10 max-w-md">
        — It's Jose, crafting worlds with code, pixels, and passion.
      </div>
      <div className="absolute -left-[20%] top-[40%] [writing-mode:vertical-rl] [text-orientation:auto] text-[var(--color-secondary)] text-sm tracking-widest opacity-70 rotate-180 z-10">
        Game Developer
      </div>
      <a 
        href="#about" 
        className="absolute left-0 bottom-0 text-[var(--color-secondary)] text-sm opacity-70 no-underline py-2 px-5 rounded-2xl transition-colors duration-300 hover:bg-[var(--color-secondary)] hover:text-white hover:opacity-90"
      >
        Scroll down ↓
      </a>
    </div>
    {/* Removed right column image for a cleaner, effect-driven hero */}
  </Section>
);

export default Hero;
