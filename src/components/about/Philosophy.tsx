import React from 'react';
import { Section } from '../ui/Section';
import { Heart, Shield, LifeBuoy, Leaf } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Philosophy: React.FC = () => {
  const values = [
    {
      icon: <Heart size={24} />,
      title: 'Chăm Sóc Toàn Diện',
      description: 'Đáp ứng đầy đủ nhu cầu thể chất, tinh thần và y tế, giúp người cao tuổi sống khỏe mạnh và an tâm mỗi ngày.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Hoạt Động Hữu Ích',
      description: 'Đa dạng hoạt động như thể dục, cắm hoa, đọc sách, vẽ tranh… giúp duy trì sự linh hoạt và niềm vui sống.',
    },
    {
      icon: <LifeBuoy size={24} />,
      title: 'Kết Nối Cộng Đồng',
      description: 'Tạo môi trường gắn kết, chia sẻ, giúp người cao tuổi mở rộng mối quan hệ và giảm cảm giác cô đơn.',
    },
    {
      icon: <Leaf size={24} />,
      title: 'Tâm Lý Chuyên Sâu',
      description: 'Hỗ trợ tâm lý định kỳ bởi chuyên gia, giúp người cao tuổi giải tỏa cảm xúc và giữ vững tinh thần tích cực.',
    },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-primary mb-4">Triết Lý Của Chúng Tôi</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Tại Eldernest, chúng tôi được dẫn dắt bởi những nguyên tắc cốt lõi định hình mọi hoạt động của chúng tôi.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <Value
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </Section>
  );
};