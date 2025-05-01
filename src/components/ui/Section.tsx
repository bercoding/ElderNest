import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-background-light',
    dark: 'bg-background-dark text-white'
  };
  
  return (
    <section 
      id={id}
      className={`section ${backgroundClasses[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};