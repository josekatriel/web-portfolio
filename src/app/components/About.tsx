"use client";
import React from "react";
import { Pickaxe, Video, Gamepad2, Rocket, Palette, Film, Blocks as ImageIcon, Code2 } from "lucide-react";
import { Section, Card } from "./ui";

const About = () => (
  <Section id="about" fullHeight>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
         style={{ gridTemplateAreas: 
          `'about journey game1' 
           'skills journey game2'` 
         }}>
      {/* Left Top: About Me */}
      <Card variant="solid" className="flex flex-col justify-start h-full" style={{ gridArea: 'about' }}>
        <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-4">About Me</h2>
        <p className="text-xl text-[var(--color-secondary)] mb-4">
          Graduated as a <b>Bachelor in Design (2019)</b><br />
          Expert in Photoshop, Illustrator, After Effects, Premiere. Now blending design with game dev.
        </p>
        <p className="text-lg text-[var(--color-text)] leading-relaxed">
          I started crafting visuals, then fell in love with bringing them to life in games. Today, I code, animate, and design worlds one pixel at a time.
        </p>
      </Card>
      
      {/* Left Bottom: App Icons */}
      <Card variant="glass" className="flex flex-col h-full" style={{ gridArea: 'skills' }}>
        <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Skills</h3>
        <div className="grid grid-cols-5 gap-4 md:gap-3">
          <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl p-4 transition-all hover:translate-y-[-3px] hover:bg-[var(--color-secondary)] hover:text-white">
            <Palette size={32} className="mb-2" />
            <small className="text-xs font-medium">Design</small>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl p-4 transition-all hover:translate-y-[-3px] hover:bg-[var(--color-secondary)] hover:text-white">
            <Film size={32} className="mb-2" />
            <small className="text-xs font-medium">Video</small>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl p-4 transition-all hover:translate-y-[-3px] hover:bg-[var(--color-secondary)] hover:text-white">
            <Gamepad2 size={32} className="mb-2" />
            <small className="text-xs font-medium">Unity</small>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl p-4 transition-all hover:translate-y-[-3px] hover:bg-[var(--color-secondary)] hover:text-white">
            <ImageIcon size={32} className="mb-2" />
            <small className="text-xs font-medium">Pixel Art</small>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl p-4 transition-all hover:translate-y-[-3px] hover:bg-[var(--color-secondary)] hover:text-white">
            <Code2 size={32} className="mb-2" />
            <small className="text-xs font-medium">C#</small>
          </div>
        </div>
      </Card>

      {/* Center: My Journey Timeline */}
      <Card variant="solid" className="flex flex-col row-span-2 h-full md:p-10" style={{ gridArea: 'journey' }}>
        <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-10">My Journey</h3>
        <ul className="flex flex-col gap-8">
          <li className="flex items-start gap-5">
            <Video className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={28} />
            <div className="text-base leading-relaxed">
              <b>2019–2021</b><br />
              Designed & edited videos for brands. Learned to make ideas move.
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Pickaxe className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={28} />
            <div className="text-base leading-relaxed">
              <b>2021</b><br />
              Built a Minecraft server with Zhang. First taste of game worlds. Here is Zhang Modpack: <a href="https://www.curseforge.com/members/zhangyg/projects">Curse Forge</a>
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Gamepad2 className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={28} />
            <div className="text-base leading-relaxed">
              <b>2022–Now</b><br />
              Launched Tiny Chaos a duo Unity project. Hand-coded (C#), hand-pixeled.
            </div>
          </li>
          <li className="flex items-start gap-5">
            <Rocket className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={28} />
            <div className="text-base leading-relaxed">
              <b>2024</b><br />
              Developing a new mobile game. Bigger, smoother, bolder.
            </div>
          </li>
        </ul>
      </Card>

      {/* Right Top: Tiny Chaos Game */}
      <Card variant="glass" className="flex flex-col items-center h-full p-0 overflow-hidden" style={{ gridArea: 'game1' }}>
        <div className="w-full h-48 relative overflow-hidden">
          <img
            src="/images/tinychaos.png"
            alt="Tiny Chaos Game Cover"
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="w-full text-center p-6 pt-4">
          <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Tiny Chaos</h4>
          <p className="text-base text-[var(--color-text)] mb-2 leading-relaxed">
            A duo developed Unity pixel-art game. Hand-coded, hand-pixeled, and full of chaos and fun.
            <span className="block text-sm font-semibold text-[var(--color-accent)] mt-2">2022–Now</span>
          </p>
          <a href="https://store.steampowered.com/app/2500680/Tiny_Chaos/" className="inline-block mt-4 text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)] pb-0.5 transition-colors hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">View Project</a>
        </div>
      </Card>
      
      {/* Right Bottom: Mochi Coin Dozer Game */}
      <Card variant="glass" className="flex flex-col md:flex-row items-stretch h-full p-0 overflow-hidden" style={{ gridArea: 'game2' }}>
        {/* Image Left */}
        <div className="w-full md:w-40 flex-shrink-0 h-60 md:h-auto relative overflow-hidden flex items-center justify-center bg-black/5">
          <img
            src="/images/mochidozer.png"
            alt="Mochi Coin Dozer Game Cover"
            className="h-full w-auto max-h-60 md:max-h-none md:h-full object-cover object-center rounded-none md:rounded-l-xl transition-transform hover:scale-105 duration-700"
          />
        </div>
        {/* Details Right */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left p-6">
          <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Mochi Coin Dozer</h4>
          <p className="text-base text-[var(--color-text)] mb-2 leading-relaxed">
            A delightful mobile game coming soon. Relaxing, addictive, and adorable.
            <span className="block text-sm font-semibold text-[var(--color-accent)] mt-2">2024</span>
          </p>
          <a href="#" className="inline-block mt-4 text-[var(--color-accent)] font-semibold border-b border-[var(--color-accent)] pb-0.5 transition-colors hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">Coming Soon</a>
        </div>
      </Card>
    </div>
  </Section>
);

export default About;