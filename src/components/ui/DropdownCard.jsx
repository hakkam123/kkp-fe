import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DropdownCard = ({ 
  icon: Icon, 
  isImage = false,
  text, 
  highlightText,
  children,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Function to render text with highlighted portions
  const renderText = () => {
    if (!highlightText) return text;
    
    const parts = text.split(highlightText);
    if (parts.length === 1) return text;
    
    return (
      <>
        {parts[0]}
        <span className="underline underline-offset-4">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between gap-4 
          px-6 py-4 
          bg-black/20 backdrop-blur-[2px] 
          border border-white/20 
          rounded-xl
          text-white text-left
          transition-all duration-300 ease-in-out
          hover:bg-black/30
          cursor-pointer
        "
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="shrink-0">
              {isImage ? (
                <img src={Icon} alt="" className="w-6 h-6 object-contain" />
              ) : (
                <Icon size={24} strokeWidth={1.5} />
              )}
            </div>
          )}
          <span className="text-base md:text-lg font-normal">
            {renderText()}
          </span>
        </div>
        
        <ChevronDown 
          size={24} 
          className={`
            shrink-0 transition-transform duration-300
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        />
      </button>
      
      {/* Dropdown Content */}
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-175 opacity-100 mt-2' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="
          px-6 py-4 
          bg-black/15 backdrop-blur-[2px] 
          border border-white/10 
          rounded-xl
          text-white text-sm md:text-base
        ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropdownCard;
