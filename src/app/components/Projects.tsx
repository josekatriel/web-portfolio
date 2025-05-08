"use client";
import React from "react";
import { Section, Card } from "./ui";

const projectData = [
  {
    id: 1,
    title: "Video Animation Portfolio",
    description: "A collection of motion graphics and animated videos for various clients, showcasing visual storytelling techniques.",
    tags: ["Video", "Animation", "After Effects"],
    imagePath: "/images/project-video.jpg"
  },
  {
    id: 2,
    title: "Interactive 3D Experience",
    description: "Web-based 3D experience built with Three.js, featuring interactive animations and immersive environments.",
    tags: ["Three.js", "WebGL", "Interactive"],
    imagePath: "/images/project-3d.jpg"
  },
  {
    id: 3,
    title: "UI Animation Library",
    description: "A collection of reusable UI animations and transitions built with Framer Motion for modern web applications.",
    tags: ["UI", "Framer Motion", "React"],
    imagePath: "/images/project-ui.jpg"
  },
];

const Projects = () => (
  <Section id="projects" background="glass">
    <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projectData.map(project => (
        <Card 
          key={project.id} 
          variant="glass"
          hover={true}
          className="overflow-hidden p-0 flex flex-col cursor-pointer"
        >
          <div className="h-[180px] bg-[var(--color-secondary)] relative overflow-hidden">
            {project.imagePath ? (
              <img 
                src={project.imagePath} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[var(--color-tertiary)] font-semibold">
                [Project Image]
              </div>
            )}
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
              {project.title}
            </h3>
            
            <p className="text-[var(--color-text)] text-[0.95rem] leading-relaxed flex-1">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="text-xs py-1 px-3 bg-[var(--color-tertiary)] text-[var(--color-primary)] rounded font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

export default Projects;
