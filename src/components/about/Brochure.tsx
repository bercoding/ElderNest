import React, { useRef } from 'react';
import { Section } from '../ui/Section';
import HTMLFlipBook from 'react-pageflip';

// Import tất cả hình ảnh từ thư mục assets
import hoatDongTriLuc from '../../assets/images/1.png';
import hoatDongTheLuc from '../../assets/images/2.png';
import ketNoiChiaSe from '../../assets/images/3.png';
import thienDinh from '../../assets/images/4.png';
import vanDongNhe from '../../assets/images/5.png';
import chamSocDinhDuong from '../../assets/images/6.png';
import scheduleImage from '../../assets/images/schedule.png';
import finalImage from '../../assets/images/final.png';
import firstImage from '../../assets/images/first.png';
import aboutImage from '../../assets/images/about.png';

// Define a Page component for better structure
// Sửa lại Page component để sử dụng forwardRef đúng cách với typing chính xác
const Page = React.forwardRef<HTMLDivElement, { page: any }>((props, ref) => {
  return (
    <div className="page bg-white h-full w-full overflow-hidden" ref={ref}>
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
          <img 
            src={props.page.image} 
            alt={props.page.title}
            className="w-auto h-auto max-h-[90%] max-w-[90%] object-contain"
          />
        </div>
        <div className="p-4 text-center bg-white border-t border-gray-200">
          <h3 className="text-xl font-bold mb-2 text-primary">{props.page.title}</h3>
          <p className="text-gray-700 text-sm">{props.page.description}</p>
        </div>
      </div>
    </div>
  );
});

// Add displayName for better debugging
Page.displayName = 'Page';

export const Brochure: React.FC = () => {
  const flipBookRef = useRef<any>(null);
  
  // Danh sách hình ảnh cho brochure
  const pages = [
    {
        type: 'image',
        image: firstImage,
        title: 'Giới thiệu',
        description: 'Eldernest là một cộng đồng nơi mọi người có thể kết nối, chia sẻ và tận hưởng cuộc sống.'
    },
    {
        type: 'image',
        image: aboutImage,
        title: 'Về Chúng Tôi',
        description: 'Eldernest là một cộng đồng nơi mọi người có thể kết nối, chia sẻ và tận hưởng cuộc sống.'
      },
    {
      type: 'image',
      image: hoatDongTriLuc,
      title: 'HOẠT ĐỘNG TRÍ LỰC',
      description: 'Các hoạt động kích thích trí não, giúp duy trì và cải thiện khả năng nhận thức cho người cao tuổi.'
    },
    {
      type: 'image',
      image: hoatDongTheLuc,
      title: 'HOẠT ĐỘNG THỂ LỰC',
      description: 'Các bài tập thể chất phù hợp với người cao tuổi, giúp duy trì sức khỏe và sự linh hoạt.'
    },
    {
      type: 'image',
      image: ketNoiChiaSe,
      title: 'KẾT NỐI - CHIA SẺ',
      description: 'Tạo không gian giao lưu, chia sẻ và kết nối giữa các thành viên trong cộng đồng.'
    },
    {
      type: 'image',
      image: thienDinh,
      title: 'THIỀN ĐỊNH',
      description: 'Các phương pháp thiền và thư giãn giúp cân bằng tinh thần và giảm căng thẳng.'
    },
    {
      type: 'image',
      image: vanDongNhe,
      title: 'VẬN ĐỘNG NHẸ',
      description: 'Các bài tập nhẹ nhàng như yoga, thái cực quyền phù hợp với người cao tuổi.'
    },
    {
      type: 'image',
      image: chamSocDinhDuong,
      title: 'CHĂM SÓC DINH DƯỠNG',
      description: 'Hướng dẫn và cung cấp chế độ dinh dưỡng cân bằng, phù hợp với nhu cầu của người cao tuổi.'
    },
    {
      type: 'image',
      image: scheduleImage,
      title: 'LỊCH TRÌNH HOẠT ĐỘNG',
      description: 'Lịch trình các hoạt động hàng ngày tại Eldernest.'
    },
    {
        type: 'image',
        image: finalImage,
        title: 'Hồi Kết',
        description: 'Cảm ơn bạn đã quan tâm đến chúng tôi.'
    }
  ];
  
  const handlePrevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };
  
  const handleNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-primary mb-4">Brochure Eldernest 3D</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Khám phá brochure tương tác 3D của chúng tôi
        </p>
      </div>

      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="flip-book-container" style={{ height: '600px' }}>
            <HTMLFlipBook
              ref={flipBookRef}
              width={550}
              height={600}
              size="fixed"
              showCover={true}
              className="demo-book"
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={false}
              autoSize={true}
              mobileScrollSupport={true}
              style={{}} // Add empty style object
            >
              {pages.map((page, index) => (
                <Page key={index} page={page} />
              ))}
            </HTMLFlipBook>
          </div>
          
          <div className="mt-6 flex justify-center space-x-4">
            <button 
              onClick={handlePrevPage}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            >
              Trang trước
            </button>
            <button 
              onClick={handleNextPage}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
            >
              Trang sau
            </button>
          </div>
          
          {/* Fallback content for mobile devices */}
          <div className="mt-12 md:hidden">
            <p className="text-center text-gray-600 mb-6">Nếu không thấy sách 3D, vui lòng xem các trang dưới đây:</p>
            <div className="grid grid-cols-1 gap-8">
              {pages.map((page, index) => (
                <div key={index} className="page bg-white p-4 shadow-lg rounded-lg">
                  <div className="h-64">
                    <img 
                      src={page.image} 
                      alt={page.title} 
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">{page.title}</h3>
                    <p className="text-gray-700">{page.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};