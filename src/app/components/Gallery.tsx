"use client";
import React, { useState } from "react";
import { Section, Card, Button } from "./ui";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
};

type GalleryData = {
  images: GalleryItem[];
  videos: GalleryItem[];
  animations: GalleryItem[];
  [key: string]: GalleryItem[] | undefined;
};

// Sample gallery data
const galleryData: GalleryData = {
  images: [
    { id: 'img1', title: 'Photography 1', description: 'Landscape photography' },
    { id: 'img2', title: 'Photography 2', description: 'Portrait session' },
    { id: 'img3', title: 'Photography 3', description: 'Abstract composition' },
    { id: 'img4', title: 'Photography 4', description: 'Product photography' },
  ],
  videos: [
    { id: 'vid1', title: 'Demo Reel', description: 'Animation demo reel' },
    { id: 'vid2', title: 'Corporate Video', description: 'Brand showcase' },
    { id: 'vid3', title: 'Music Video', description: 'Visual effects work' },
  ],
  animations: [
    { id: 'anim1', title: '3D Animation', description: '3D character animation' },
    { id: 'anim2', title: 'Motion Graphics', description: 'Logo animation' },
    { id: 'anim3', title: 'UI Animation', description: 'Interface transitions' },
  ],
};

type TabType = 'all' | 'images' | 'videos' | 'animations';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  
  const getFilteredItems = (): GalleryItem[] => {
    if (activeTab === 'all') {
      return [
        ...galleryData.images,
        ...galleryData.videos,
        ...galleryData.animations
      ];
    }
    return galleryData[activeTab] || [];
  };
  
  return (
    <Section id="gallery" background="glass">
      <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Gallery</h2>
      
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-4 mt-6 mb-8">
        {['all', 'images', 'videos', 'animations'].map(tab => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab as TabType)}
            variant={activeTab === tab ? 'primary' : 'outline'}
            size="md"
            className="capitalize"
          >
            {tab}
          </Button>
        ))}
      </div>
      
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {getFilteredItems().map(item => (
          <Card 
            key={item.id} 
            hover={true}
            variant="outline"
            className="aspect-[3/2] p-0 bg-[var(--color-secondary)] overflow-hidden relative cursor-pointer"
          >
            {/* Item type indicator */}
            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-tertiary)] font-semibold opacity-80 text-3xl">
              {item.id.startsWith('img') ? '📷' : item.id.startsWith('vid') ? '🎬' : '✨'}
            </div>
            
            {/* Item info overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white">
              <div className="text-[0.9rem] font-semibold">{item.title}</div>
              <div className="text-xs opacity-90">{item.description}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
