import React from 'react';
import bannerImage from '../../assets/images/nutrition-banner.png';

interface BannerProps {
  title?: string;
  subtitle?: string;
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="relative w-full">
      <img 
        src={bannerImage} 
        alt="Elderly people enjoying a nutritious meal together" 
        className="w-full h-auto object-cover"
      />
      {(title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4">
          {title && <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>}
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      )}
    </div>
  );
};