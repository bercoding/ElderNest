import React from 'react';
import { Link } from '../ui/Link';
import { Logo } from '../ui/Logo';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Logo inverted />
            </div>
            <p className="text-gray-300 mb-6">
              Eldernest là nơi chăm sóc sức khỏe và tinh thần cho người cao tuổi thông qua các phương pháp toàn diện, nuôi dưỡng tâm trí, cơ thể và tinh thần.
            </p>
            <div className="flex space-x-4">
          
              
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Trang Chủ</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">Giới Thiệu</Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Chương Trình</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">Đánh Giá</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Liên Hệ</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Chương Trình Của Chúng Tôi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Hoạt Động Thể Lực</Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Hoạt Động Trí Lực</Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Kết Nối Chia Sẻ</Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Thiền Định</Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Chăm Sóc Dinh Dưỡng</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Liên Hệ Với Chúng Tôi</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Khu đô thị FPT City, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="tel:+84123456789" className="text-gray-300 hover:text-white transition-colors">Hotline: (+84) 833 315 018</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="mailto:info@eldernest.vn" className="text-gray-300 hover:text-white transition-colors">eldernest.danang@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Facebook size={24} className="mr-3 text-primary flex-shrink-0" />
                <a href="https://www.facebook.com/eldernest.danang" className="text-gray-300 hover:text-white transition-colors">Eldernest - Dịch Vụ Lớp Học Bán Trú Dành Cho Người Cao Tuổi  </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Eldernest. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};