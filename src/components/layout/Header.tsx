import React, { useState, useEffect } from 'react';
import { Link } from '../ui/Link';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { name: 'Trang Chủ', path: '/' },
  { name: 'Giới Thiệu', path: '/about' },
  { name: 'Chương Trình', path: '/programs' },
  { name: 'Đánh Giá', path: '/testimonials' },
  { name: 'Liên Hệ', path: '/contact' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`nav-link ${item.isActive ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary ml-4">
              Đặt Lịch Hẹn
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2" 
            onClick={toggleMenu}
            aria-label="Mở menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`nav-link ${item.isActive ? 'nav-link-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="btn btn-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Đặt Lịch Hẹn
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};