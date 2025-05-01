import React from 'react';
import bannerImage from '../../assets/images/nutrition-banner.jpg';

export const SimpleBanner: React.FC = () => {
  return (
    <div className="w-full">
      <img 
        src={bannerImage} 
        alt="Chăm Sóc Dinh Dưỡng - Nutritional Care" 
        className="w-full h-auto object-cover"
      />
    </div>
  );
};