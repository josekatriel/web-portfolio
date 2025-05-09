'use client';

import { useEffect, useRef, useState } from "react";
import { projectCategories } from "@/app/data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Link from "next/link";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Projects() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".project-category");
      const leftPanel = leftPanelRef.current;

      // Hide the panel initially
      gsap.set(leftPanel, { opacity: 0, y: 20 });
      
      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            console.log(`Entering section: ${index}`);
            setActiveCategoryIndex(index);
            // Show the panel with animation
            gsap.to(leftPanel, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          },
          onLeave: () => {
            console.log(`Leaving section: ${index}`);
            // Hide the panel with animation if not entering another project section
            if (index === sections.length - 1) {
              gsap.to(leftPanel, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power3.out",
              });
            }
          },
          onEnterBack: () => {
            console.log(`Re-entering section: ${index}`);
            setActiveCategoryIndex(index);
            // Show the panel with animation
            gsap.to(leftPanel, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            console.log(`Leaving section back: ${index}`);
            // Hide the panel with animation if not entering another project section
            if (index === 0) {
              gsap.to(leftPanel, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power3.out",
              });
            }
          },
          toggleActions: "play none none none",
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-auto">
      <div className="flex">
        {/* Left Fixed Panel */}
        <div 
          ref={leftPanelRef} 
          className="hidden md:block w-1/3 h-auto p-8 z-10 fixed left-0 top-1/2 transform -translate-y-1/2"
        >
          <div className="bg-[var(--color-tertiary)] p-6 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-primary">
              {projectCategories[activeCategoryIndex].title}
            </h2>
            <h3 className="text-lg font-medium text-accent">
              {projectCategories[activeCategoryIndex].subtitle}
            </h3>
            <p className="mt-4 text-secondary">
              {projectCategories[activeCategoryIndex].description}
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full px-4 md:px-8 ml-0 md:w-2/3 md:ml-[33%] space-y-1 flex flex-col items-center">
          {projectCategories.map((category) => (
            category.projects.length === 0 && category.link ? (
              <div key={category.id} className="project-category min-h-[10vh]">
                <a
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-12 bg-white/5 rounded-xl shadow-md hover:bg-accent/10 transition group"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <h4 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition">
                      {category.title}
                    </h4>
                    <p className="text-secondary text-lg mb-2">{category.subtitle}</p>
                    <p className="text-secondary mb-4">{category.description}</p>
                    <span className="inline-block px-4 py-2 bg-accent text-white rounded-full font-semibold text-base mt-2 group-hover:bg-accent/80 transition">
                      Visit {category.title}
                    </span>
                  </div>
                </a>
              </div>
            ) : (
              <div key={category.id} className="project-category min-h-[10vh]">
                {category.projects.map((project) => (
                  <div key={project.id} className="p-12">
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-[500px] object-cover rounded-xl shadow-md mb-4"
                    />
                    <h4 className="text-xl font-bold text-primary">
                      {project.title}
                    </h4>
                    <p className="text-secondary mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-slate-200 text-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/project/${category.id}/${project.id}`}
                      className="text-accent font-medium text-sm mt-2 inline-block hover:underline"
                    >
                      View Project →
                    </Link>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
