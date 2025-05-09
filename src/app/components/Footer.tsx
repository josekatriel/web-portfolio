"use client";
import React from "react";

const Footer = () => (
  <footer className="w-full bg-[var(--color-primary)] border-t border-white/10 py-8 mt-12">
    <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-4">
      {/* Social icons row (optional, add your own icons or use Contact.tsx data) */}
      {/*
      <div className="flex gap-4 mb-2">
        <a href="https://github.com" className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com" className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/katrjjjj" className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.youtube.com/@katrgames" className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
      */}
      <div className="text-sm text-white/70 text-center w-full">
        &copy; {new Date().getFullYear()} Jose Katriel. All rights reserved.
      </div>
      <div className="flex gap-4 text-xs text-white/40 mt-1">
        <a href="#" className="hover:text-accent transition">Privacy Policy</a>
        <span className="opacity-40">|</span>
        <a href="#" className="hover:text-accent transition">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
