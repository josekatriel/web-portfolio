'use client';

import { useEffect, useState, useRef } from 'react';
import { projectCategories, GalleryItem } from '@/app/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Utility function to find a project by category and project ID
const findProject = (categoryId: string, projectId: string) => {
  const category = projectCategories.find(cat => cat.id === categoryId);
  if (!category) return null;
  
  const project = category.projects.find(proj => proj.id === projectId);
  return project ? { ...project, category } : null;
};

export default function ProjectDetail({ params }: { params: { categoryId: string; projectId: string } }) {
  const { categoryId, projectId } = params;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find the project data based on params
    const projectData = findProject(params.categoryId, params.projectId);
    setProject(projectData);
    setLoading(false);

    // If project not found, this will trigger the notFound() in the next render
  }, [params.categoryId, params.projectId]);

  // Close lightbox when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null);
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Show 404 if project not found
  if (!loading && !project) {
    notFound();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-xl">Loading project...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Header with back button and title */}
      <header className="fixed top-0 left-0 w-full z-50 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/#projects" className="text-white font-medium hover:text-accent transition">
            ← Back to Projects
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{project.title}</h1>
            <p className="text-sm opacity-70">{project.category.title}</p>
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-80 transition"
          >
            Visit Project
          </a>
        </div>
      </header>

      {/* Full screen gallery grid */}
      <div 
        ref={galleryRef}
        className="gallery-grid pt-20 pb-8 px-4 md:p-20 w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {project.gallery.map((item: GalleryItem) => (
          item.type === 'video' && item.url ? (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg block"
              title={item.caption || item.alt}
            >
              <video
                src={item.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                style={{ pointerEvents: 'none' }}
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                Watch on external site
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-lg font-semibold text-white">{item.caption || item.alt}</p>
              </div>
            </a>
          ) : (
            <div 
              key={item.id}
              className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setLightboxItem(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
            ) : item.type === 'video' ? (
              <div className="relative aspect-square bg-black/30 flex items-center justify-center">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Video
                </div>
              </div>
            ) : null
          }
          {/* Hover overlay with details */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-lg font-semibold text-white">{item.caption || item.alt}</p>
          </div>
        </div>
      )
    ))}      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightboxItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setLightboxItem(null)}
          >
            ✕
          </button>
          
          <div 
            className="relative max-w-5xl max-h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxItem.type === 'image' ? (
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : lightboxItem.type === 'video' ? (
              <video
                src={lightboxItem.src}
                className="w-full h-auto max-h-[80vh] object-contain"
                controls
                autoPlay
                loop
                playsInline
              />
            ) : null}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-xl font-semibold text-white">{lightboxItem.caption || lightboxItem.alt}</h3>
              <p className="text-white/70 mt-1">{project.title} • {project.category.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
