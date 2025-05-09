"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { services } from "@/app/data/services";

const Services: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, {
        autoAlpha: 0,
        x: 300,
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.to(card, {
          duration: 1,
          x: 0,
          autoAlpha: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold text-primary mb-8">Services</h1>
      {services.map((service, idx) => (
        <div
          key={service.title}
          ref={(el) => {
            cardsRef.current[idx] = el;
          }}
          className="relative group w-[90%] max-w-2xl h-[300px] overflow-hidden transition-all duration-300 cursor-pointer"
          style={{ minHeight: 220 }}
        >
          {/* Card Main */}
          <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6 text-left">
            <div className="text-5xl">{service.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-base text-secondary opacity-80">{service.description}</p>
            </div>
          </div>
          {/* Card Details (hover reveal) */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 px-10 py-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-12 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <p className="text-lg text-accent font-semibold text-center">{service.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
