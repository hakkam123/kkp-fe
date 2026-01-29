import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseStyles = `
    px-5 py-2 text-base font-medium 
    border-2 border-white rounded-lg 
    transition-all duration-300 ease-in-out 
    cursor-pointer
    hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)]
  `;

  const variants = {
    primary: `
      bg-white text-[#0891b2] 
      hover:bg-white/90
    `,
    primaryDark: `
      bg-white text-[#002057] 
      hover:bg-white/90
    `,
    glass: `
      backdrop-blur-[2px] text-white 
      hover:bg-white/5
    `,
    outline: `
      bg-transparent text-white 
      hover:bg-white/15
    `
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
