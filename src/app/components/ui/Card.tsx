import React, { CSSProperties } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'glass' | 'outline';
  hover?: boolean;
  style?: CSSProperties;
}

const Card = ({ 
  children, 
  className = '', 
  variant = 'solid',
  hover = true,
  style,
}: CardProps) => {
  // Base styles
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  
  // Variant styles
  const variantStyles = {
    solid: 'bg-[var(--color-tertiary)] shadow-md',
    glass: 'bg-[var(--glass-bg)] backdrop-blur-md shadow-lg border border-[var(--glass-border)]',
    outline: 'border border-[var(--color-secondary)] bg-transparent',
  };

  // Hover effect
  const hoverStyles = hover ? 'hover:shadow-xl hover:transform hover:scale-[1.01]' : '';
  
  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
