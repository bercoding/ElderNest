import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';
import nutritionBanner from '../../assets/images/nutrition-banner.png';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 md:pt-24 lg:pt-28">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 h-screen"
        style={{ 
          backgroundImage: `url(${nutritionBanner})`,
          height: '90vh'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-20 md:pt-32 lg:pt-40 pb-20 md:pb-32 lg:pb-40 text-white">
        <div className="max-w-3xl">
          <h1 className="mb-3 font-display w-full max-w-full break-words text-balance text-center">
           ELDERNEST LỚP HỌC BÁN TRÚ DÀNH CHO NGƯỜI CAO TUỔI
          </h1>
          <p className="text-xl md:text-2xl mb-5 text-gray-200 w-full max-w-full break-words text-balance text-center">
          Chương trình sức khỏe toàn diện được thiết kế để nuôi dưỡng tâm trí, cơ thể và tinh thần. Bắt đầu hành trình đến với cuộc sống!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/programs" className="btn btn-primary">
              Khám Phá Các Dịch Vụ 
            </Link>
            <Link href="/about" className="btn btn-secondary">
             Tìm Hiểu Thêm <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
        clipPath: 'ellipse(50% 50% at 50% 100%)'
      }}></div>
    </div>
  );
};