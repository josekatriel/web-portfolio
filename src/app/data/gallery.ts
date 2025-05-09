// Gallery image data for the fullscreen carousel
type GalleryMedia = {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
};

const galleryMedia: GalleryMedia[] = [
  { id: 'img1', type: 'image', src: '/images/Ban_Jalan_2_1920.jpg', alt: 'Gallery image 1', title: 'Visual Concept' },
  { id: 'img2', type: 'image', src: '/images/802.jpg', alt: 'Gallery image 2', title: 'Visual Concept' },
  { id: 'img3', type: 'image', src: '/images/background1.png', alt: 'Gallery image 3', title: 'Mobile Game Concept' },
  { id: 'img4', type: 'image', src: '/images/Paku_Perfect_Comp4.jpg', alt: 'Gallery image 4', title: 'Product Design' },
  { id: 'vid1', type: 'video', src: '/images/Logo Tokka Animasi.mp4', alt: 'Gallery video 1', title: 'Logo Animation' },
  { id: 'vid2', type: 'video', src: '/images/2021_1.mp4', alt: 'Gallery video 2', title: 'Motion Reel 2021' },
  { id: 'vid3', type: 'video', src: '/images/nyepi_sa_2021_2.mp4', alt: 'Gallery video 3', title: 'Nyepi Animation' },
  { id: 'img7', type: 'image', src: '/gallery/7.jpg', alt: 'Gallery image 7', title: 'Social Media Post' },
  { id: 'img8', type: 'image', src: '/gallery/8.jpg', alt: 'Gallery image 8', title: 'Web Banner' },
  { id: 'img9', type: 'image', src: '/gallery/9.jpg', alt: 'Gallery image 9', title: 'Product Render' },
  { id: 'img10', type: 'image', src: '/gallery/10.jpg', alt: 'Gallery image 10', title: 'Poster Design' },
  // Add more items as needed
];

export type { GalleryMedia };
export default galleryMedia;

