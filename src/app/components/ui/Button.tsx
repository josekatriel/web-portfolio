import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-block font-medium rounded-lg transition-colors duration-200 focus:outline-none';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-opacity-90',
    secondary: 'bg-[var(--color-secondary)] text-white hover:bg-opacity-90',
    outline: 'bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
