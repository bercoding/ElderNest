import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  // In a real application, we would use React Router's Link component
  // But for this demo, we'll create a simple Link component
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    // In a real app, we would use history.push(href) or similar
    console.log(`Navigate to: ${href}`);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};