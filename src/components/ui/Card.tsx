import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverable = false
}) => {
  const hoverClasses = hoverable ? 'transform transition-transform duration-300 hover:-translate-y-2' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export const CardImage: React.FC<{ src: string; alt: string; className?: string }> = ({ 
  src, 
  alt,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`px-6 py-4 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
};