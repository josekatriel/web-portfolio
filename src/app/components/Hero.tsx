import React from "react";
import { Section } from "./ui";

const Hero = () => (
  <Section 
    id="hero"
    background="tertiary"
    fullHeight
    className="flex flex-row items-stretch overflow-hidden"
  >
    {/* Left Column */}
    <div className="flex-1 flex flex-col justify-center items-start pl-[5vw] relative">
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
    {/* Right Column */}
    <div className="flex-[1.1] flex items-center justify-center relative">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="Profile"
        className="w-3/4 max-w-[420px] rounded-full object-cover shadow-2xl border-6 border-[var(--color-bg)] transition-transform duration-500 hover:scale-105"
      />
    </div>
  </Section>
);

export default Hero;
