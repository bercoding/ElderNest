import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardBody, CardImage, CardFooter } from '../ui/Card';
import { Link } from '../ui/Link';
import { ArrowRight } from 'lucide-react';
import { Program } from '../../types';

// Import the images from your assets folder
import hoatDongTriLuc from '../../assets/images/1.png';
import hoatDongTheLuc from '../../assets/images/2.png';
import ketNoiChiaSe from '../../assets/images/3.png';
import thienDinh from '../../assets/images/4.png';
import vanDongNhe from '../../assets/images/5.png';
import chamSocDinhDuong from '../../assets/images/6.png';

export const ProgramList: React.FC = () => {
  const programs: Program[] = [
    {
      id: '1',
      title: 'HOẠT ĐỘNG TRÍ LỰC',
      description: 'Các hoạt động kích thích trí não, giúp duy trì và cải thiện khả năng nhận thức cho người cao tuổi.',
      imageUrl: hoatDongTriLuc,
     
    },
    {
      id: '2',
      title: 'HOẠT ĐỘNG THỂ LỰC',
      description: 'Các bài tập thể chất phù hợp với người cao tuổi, giúp duy trì sức khỏe và sự linh hoạt.',
      imageUrl: hoatDongTheLuc,
 
    },
    {
      id: '3',
      title: 'KẾT NỐI - CHIA SẺ',
      description: 'Tạo không gian giao lưu, chia sẻ và kết nối giữa các thành viên trong cộng đồng.',
      imageUrl: ketNoiChiaSe,
     
    },
    {
      id: '4',
      title: 'THIỀN ĐỊNH',
      description: 'Các phương pháp thiền và thư giãn giúp cân bằng tinh thần và giảm căng thẳng.',
      imageUrl: thienDinh,
   
    },
    {
      id: '5',
      title: 'VẬN ĐỘNG NHẸ',
      description: 'Các bài tập nhẹ nhàng như yoga, thái cực quyền phù hợp với người cao tuổi.',
      imageUrl: vanDongNhe,
    
    },
    {
      id: '6',
      title: 'CHĂM SÓC DINH DƯỠNG',
      description: 'Hướng dẫn và cung cấp chế độ dinh dưỡng cân bằng, phù hợp với nhu cầu của người cao tuổi.',
      imageUrl: chamSocDinhDuong,
     
    }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Card key={program.id} hoverable>
            <CardImage 
              src={program.imageUrl} 
              alt={program.title}
              className="h-56 object-cover"
            />
            <CardBody>
              <h3 className="text-xl font-semibold mb-2 text-center">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{program.duration}</span>
                <span className="font-semibold text-primary">{program.price}</span>
              </div>
            </CardBody>
            <CardFooter>
              <Link href={`/programs/${program.id}`} className="inline-flex items-center text-primary font-medium">
                Tìm hiểu thêm
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};