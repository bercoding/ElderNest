import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const [animationClass, setAnimationClass] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      setAnimationClass('animate-fadeIn');
      // Khóa cuộn trang khi modal mở
      document.body.style.overflow = 'hidden';
    } else {
      setAnimationClass('animate-fadeOut');
      // Cho phép cuộn trang khi modal đóng
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${animationClass}`}>
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scaleIn">
        <div className="flex justify-between items-center p-4 border-b">
          {title && <h3 className="text-xl font-semibold text-primary">{title}</h3>}
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};