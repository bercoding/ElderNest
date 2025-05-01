import React from 'react';
import bannerImage from '../../assets/images/banner.png';

export const ProgramsHero: React.FC = () => {
  return (
    <div className="relative pt-20 md:pt-24 lg:pt-28">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${bannerImage})`,
          height: '60vh'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24 lg:pb-28 text-white">
        <div className="max-w-3xl">
          <h1 className="mb-6 font-display w-full max-w-full break-words text-balance text-center">Chương Trình Của Chúng Tôi</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 w-full max-w-full break-words text-balance text-center">
            Khám phá các chương trình chăm sóc toàn diện được thiết kế để nâng cao sức khỏe và chất lượng cuộc sống.
          </p>
        </div>
      </div>
      
      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
        clipPath: 'ellipse(50% 50% at 50% 100%)'
      }}></div>
    </div>
  );
};