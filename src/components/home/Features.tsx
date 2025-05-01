import React from 'react';
import { Section } from '../ui/Section';
import { Heart, Compass, BookOpen, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart size={28} />,
      title: 'SỨ MỆNH',
      description: 'Đa dạng dịch vụ toàn diện. Dịch vụ chăm sóc chất lượng cao, chi phí hợp lý. Khẳng định môi trường chăm sóc chuyên nghiệp.',
    },
    {
      icon: <Compass size={28} />,
      title: 'GIÁ TRỊ CỐT LÕI',
      description: 'Môi trường sống năng động, phong phú và trọn vẹn. Xây dựng cộng đồng kết nối, sáng tạo và hạnh phúc. Trao quyền cho cá nhân phát triển bản thân và nuôi dưỡng trí tuệ.',
    },
    {
      icon: <BookOpen size={28} />,
      title: 'TẦM NHÌN',
      description: 'Chăm sóc toàn diện, thay đổi nhận thức xã hội. Hệ thống lớp học nội trú hàng đầu tại Việt Nam. Môi trường chuyên nghiệp, hiện đại cho người cao tuổi.',
    },
    {
      icon: <Users size={28} />,
      title: 'CỘNG ĐỒNG',
      description: 'Tham gia cộng đồng những người có cùng chí hướng trên con đường hướng tới sức khỏe và sự an lành tốt hơn.',
    },
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-primary mb-4">Tại sao chọn Eldernest</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Chúng tôi tin vào cách tiếp cận toàn diện về sức khỏe và sự an lành, giúp bạn sống cuộc sống tốt nhất.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};