import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Cụ Nguyễn Văn Minh',
      role: '78 tuổi, Khách hàng thường xuyên',
      content: 'Tôi đã tham gia các hoạt động tại Eldernest được hơn 6 tháng và cảm thấy sức khỏe của mình cải thiện rõ rệt. Các bài tập thể dục nhẹ nhàng và chương trình dinh dưỡng đã giúp tôi giảm đau nhức khớp và ngủ ngon hơn. Đội ngũ nhân viên rất tận tâm và luôn quan tâm đến từng nhu cầu của chúng tôi.',
      imageUrl: 'https://cafefcdn.com/203337114487263232/2025/3/28/4-nu-cuoi-cua-nguoi-gia-song-trong-kdt-ecopark-3132-1743082061789383042470-1743129849247-1743129849451290715366.jpg'
    },
    {
      id: '2',
      name: 'Cụ Trần Thị Lan',
      role: '82 tuổi, Tham gia chương trình thiền định',
      content: 'Ở tuổi của tôi, việc tìm được một nơi an toàn và thân thiện để tham gia các hoạt động xã hội rất quan trọng. Eldernest không chỉ cung cấp các dịch vụ chăm sóc sức khỏe mà còn tạo ra một cộng đồng ấm áp. Các buổi thiền định đã giúp tôi cảm thấy bình an và giảm lo âu đáng kể.',
      imageUrl: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-hai-ong-ba-tai-ha-noi-nhan-ky-niem-60-nam-ngay-cuoi-05.jpg?v=1578302913540'
    },
    {
      id: '3',
      name: 'Cụ Lê Văn Thành',
      role: '75 tuổi, Tham gia chương trình hoạt động trí lực',
      content: 'Tôi rất thích các hoạt động kích thích trí não tại Eldernest. Ở tuổi này, việc giữ cho đầu óc hoạt động là rất quan trọng. Các trò chơi trí tuệ và hoạt động nhóm không chỉ giúp tôi duy trì sự minh mẫn mà còn mang lại niềm vui và cơ hội gặp gỡ bạn bè mới. Tôi cảm thấy trẻ trung hơn nhiều kể từ khi tham gia.',
      imageUrl: 'https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/202005/original/images5404674_img_3474.jpg'
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const activeTestimonial = testimonials[activeIndex];
  
  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <h2 className="text-white mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Lắng nghe từ những người cao tuổi đã trải nghiệm và cảm nhận sự chăm sóc tận tâm tại Eldernest.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-0 left-0 text-primary opacity-30">
          <Quote size={80} />
        </div>
        
        <div className="relative z-10 pt-8 px-4">
          <div className="text-xl md:text-2xl italic mb-8 text-gray-200">
            {activeTestimonial.content}
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src={activeTestimonial.imageUrl} 
              alt={activeTestimonial.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-white">{activeTestimonial.name}</p>
              <p className="text-gray-300">{activeTestimonial.role}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-700 text-white hover:bg-primary transition-colors"
            aria-label="Đánh giá trước"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-700 text-white hover:bg-primary transition-colors"
            aria-label="Đánh giá tiếp theo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
              } transition-colors`}
              aria-label={`Chuyển đến đánh giá ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};