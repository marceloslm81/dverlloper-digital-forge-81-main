import React from 'react';

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', showSlogan = false, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-11',
    lg: 'h-20'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Dvelloper Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default Logo; 