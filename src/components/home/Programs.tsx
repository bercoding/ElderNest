import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Card, CardBody, CardImage, CardFooter } from '../ui/Card';
import { ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';
import { Program } from '../../types';
import { Modal } from '../ui/Modal';

// Import the images from your assets folder
import hoatDongTriLuc from '../../assets/images/1.png';
import hoatDongTheLuc from '../../assets/images/2.png';
import ketNoiChiaSe from '../../assets/images/3.png';
import thienDinh from '../../assets/images/4.png';
import vanDongNhe from '../../assets/images/5.png';
import chamSocDinhDuong from '../../assets/images/6.png';
import scheduleImage from '../../assets/images/schedule.png';

export const Programs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const openModal = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    },
  ];

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <h2 className="text-primary mb-4">Các Chương Trình Của Chúng Tôi</h2>
          <p className="max-w-2xl text-gray-600 text-lg">
            Khám phá các chương trình được thiết kế để giúp người cao tuổi duy trì sức khỏe thể chất và tinh thần.
          </p>
        </div>
        <Link href="/programs" className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium">
          Xem Tất Cả Chương Trình
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
      
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
            </CardBody>
            <CardFooter>
              <button 
                onClick={() => openModal(program)}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Tìm Hiểu Thêm
                <ArrowRight size={16} className="ml-2" />
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={selectedProgram?.title}
      >
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">LỊCH TRÌNH DỰ KIẾN</h3>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src={scheduleImage} 
              alt="Lịch trình dự kiến" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p className="mt-6 text-gray-700 text-center">
            Đây là lịch trình dự kiến cho chương trình {selectedProgram?.title.toLowerCase()}. 
            Lịch trình được thiết kế để tối ưu hóa trải nghiệm và mang lại lợi ích tốt nhất cho người cao tuổi.
          </p>
          <button
            onClick={closeModal}
            className="mt-8 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Đóng
          </button>
        </div>
      </Modal>
    </Section>
  );
};