import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  background?: 'default' | 'tertiary' | 'glass';
}

const Section = ({ 
  id, 
  children, 
  className = '',
  fullHeight = false,
  background = 'default',
}: SectionProps) => {
  // Base styles
  const baseStyles = 'w-full max-w-[1920px] mx-auto py-16 px-[8vw]';
  
  // Height styles
  const heightStyles = fullHeight ? 'min-h-[90vh] flex items-center justify-center' : '';
  
  // Background styles
  const bgStyles = {
    default: 'bg-[var(--color-bg)]',
    tertiary: 'bg-[var(--color-tertiary)]',
    glass: 'glass'
  };
  
  return (
    <section 
      id={id}
      className={`${baseStyles} ${heightStyles} ${bgStyles[background]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
