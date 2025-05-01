import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Thay đổi cách import

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await emailjs.sendForm(
        'service_pfrdfhm',
        'template_d7xerwu', 
        e.currentTarget,
        '9g8JkCWhyEfP3HeN5' // Thay bằng Public Key từ EmailJS
      );
      
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      });
    } catch (error) {
      setError('Gửi thông tin thất bại. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-primary mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-gray-600 mb-6">
            Bạn có câu hỏi về dịch vụ hoặc chương trình của chúng tôi? Muốn đặt lịch tư vấn? Hãy điền vào biểu mẫu và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Ghé Thăm Trung Tâm</h3>
            <p className="mb-2">
              <strong>Địa chỉ:</strong> Khu đô thị FPT City, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng
            </p>
            <p className="mb-2">
              <strong>Điện thoại:</strong> Hotline: (+84) 833 315 018
            </p>
            <p className="mb-2">
              <strong>Email:</strong> eldernest.danang@gmail.com
            </p>
            <p>
              <strong>Giờ làm việc:</strong> Thứ 2 - Thứ 6: 7h - 17h |
              Thứ 7: 7h - 12h
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Theo Dõi Chúng Tôi</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/eldernest.danang" className="text-gray-600 hover:text-primary transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Cảm Ơn Bạn!</h3>
              <p className="text-gray-600">
                Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại với bạn sớm.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Quan tâm đến</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="Tư vấn toàn diện">Tư vấn toàn diện</option>
                  <option value="Trải nghiệm Workshop">Trải nghiệm Workshop</option>
                  <option value="Dịch vụ đưa đón">Dịch vụ đưa đón</option>
                  <option value="Tư vấn tâm lý">Tư vấn tâm lý</option>
                  <option value="Hỗ trợ đăng ký">Hỗ trợ đăng ký</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Tin nhắn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};