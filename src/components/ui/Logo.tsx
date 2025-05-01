import React from 'react';
import { Link } from './Link';
import logoImage from '../../assets/images/eldernest-logo.png';

interface LogoProps {
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ inverted = false }) => {
  return (
    <Link 
      href="/" 
      className={`flex items-center ${inverted ? 'text-white' : 'text-primary'} font-semibold text-2xl`}
    >
      <img 
        src={logoImage} 
        alt="Eldernest" 
        className="h-24 mr-2"
      />
      <span className="font-display"></span>
    </Link>
  );
};