'use client';

import { useEffect, useRef, useState } from "react";
import { projectCategories } from "@/app/data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".project-category");

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveCategoryIndex(index),
          onEnterBack: () => setActiveCategoryIndex(index),
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex w-full">
      {/* Left sticky panel */}
      <div className="w-1/3 sticky top-0 h-screen p-8 flex flex-col justify-center z-10 bg-white">
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

      {/* Right scrolling panel (natural page scroll) */}
      <div className="w-2/3 py-20 px-8 space-y-40">
        {projectCategories.map((category) => (
          <div key={category.id} className="project-category min-h-[100vh]">
            {category.projects.map((project) => (
              <div key={project.id} className="mb-12 p-6">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full rounded-xl shadow-md mb-4"
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
                <a
                  href={project.link}
                  className="text-accent font-medium text-sm mt-2 inline-block hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
