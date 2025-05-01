import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../../types';

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; toggle: () => void }> = ({ 
  faq, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        <span className="ml-4 flex-shrink-0 text-primary">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQs: React.FC = () => {
  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'Làm thế nào để biết chương trình nào phù hợp với tôi?',
      answer: 'Chúng tôi khuyên bạn nên đặt lịch tư vấn miễn phí 15 phút với một trong những chuyên gia chăm sóc sức khỏe của chúng tôi. Họ có thể đánh giá nhu cầu và mục tiêu của bạn để đề xuất chương trình phù hợp nhất.'
    },
    {
      id: '2',
      question: 'Tôi và người nhà có thể tham gia trải nghiệm trực tiếp được không?',
      answer: 'Được! Eldernest có buổi trải nghiệm miễn phí để gia đình và người thâm cảm nhận dịch vụ trước khi đăng ký chính thức.'
    },
    {
      id: '3',
      question: 'Có chương trình khám sức khoẻ tại Eldernest không?',
      answer: 'Có. Mỗi thứ Hai hằng tuần, các cụ sẽ được kiểm tra huyết áp, nhịp tim để theo dõi và điều chỉnh chế độ hoạt động phù hợp.'
    },
    {
      id: '4',
      question: 'Nếu tôi cần hủy hoặc đổi lịch thì sao?',
      answer: 'Eldernest sẽ hỗ trợ hoàn 80% phí gói nếu có lý do HUỶ chính đáng. Gói chưa sử dụng có thể được chuyển trực tiếp qua tháng sau.'
    },
    {
      id: '5',
      question: 'Bạn có cung cấp các buổi tư vấn trực tuyến không?',
      answer: 'Có, nhiều dịch vụ của chúng tôi có sẵn trực tuyến cho khách hàng không thể đến trung tâm của chúng tôi trực tiếp. Các buổi tư vấn trực tuyến được thực hiện thông qua nền tảng y tế từ xa an toàn.'
    }
  ];
  
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({
    [faqs[0].id]: true // Open the first FAQ by default
  });
  
  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-primary mb-4">Câu Hỏi Thường Gặp</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Bạn có thắc mắc về các chương trình của chúng tôi? Tìm câu trả lời cho những câu hỏi thường gặp dưới đây.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <FAQItem 
            key={faq.id} 
            faq={faq} 
            isOpen={!!openFAQs[faq.id]} 
            toggle={() => toggleFAQ(faq.id)} 
          />
        ))}
      </div>
    </Section>
  );
};