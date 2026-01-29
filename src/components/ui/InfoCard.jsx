import React, { useEffect, useState, useRef, useCallback } from 'react';

const InfoCard = ({ icon: Icon, value, label, isImage = false, shouldAnimate = false, hoverImage = null }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(() => {
    if (shouldAnimate) {
      const numericMatch = value.match(/([\d,.]+)/);
      if (numericMatch) {
        const prefix = value.substring(0, value.indexOf(numericMatch[1]));
        const suffix = value.substring(value.indexOf(numericMatch[1]) + numericMatch[1].length);
        return prefix + '0' + suffix;
      }
    }
    return value;
  });
  const hasAnimated = useRef(false);
  const animationRef = useRef(null);

  const startAnimation = useCallback(() => {
    const numericMatch = value.match(/([\d,.]+)/);
    if (!numericMatch) return;
    
    const numericPart = numericMatch[1].replace(/,/g, '');
    const targetNum = parseFloat(numericPart);
    const prefix = value.substring(0, value.indexOf(numericMatch[1]));
    const suffix = value.substring(value.indexOf(numericMatch[1]) + numericMatch[1].length);
    const hasComma = numericMatch[1].includes(',');
    const isDecimal = numericMatch[1].includes('.');
    
    if (isNaN(targetNum)) return;
    
    let startTime;
    const duration = 4000; 
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(targetNum * easeOut);
      
      let formattedNum;
      if (hasComma) {
        formattedNum = currentNum.toLocaleString('id-ID');
      } else if (isDecimal) {
        formattedNum = currentNum.toFixed(1);
      } else {
        formattedNum = currentNum.toString();
      }
      
      setDisplayValue(prefix + formattedNum + suffix);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  }, [value]);

  useEffect(() => {
    if (shouldAnimate && !hasAnimated.current) {
      hasAnimated.current = true;
      startAnimation();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldAnimate, startAnimation]);

  return (
    <div 
      className="
        relative overflow-hidden
        flex flex-col justify-start items-start text-left
        w-full max-w-62.5 min-h-47.5
        p-6 rounded-3xl
        border-2 border-white/40
        shadow-xl
        cursor-pointer
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.02]
        hover:border-white/60
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer - default (blur) */}
      <div 
        className={`
          absolute inset-0 z-0
          bg-black/20 backdrop-blur-[2px]
          transition-opacity duration-0
          ${isHovered && hoverImage ? 'opacity-0' : 'opacity-100'}
        `}
      />
      
      {/* Background layer - hover image (instant transition) */}
      {hoverImage && (
        <div 
          className={`
            absolute inset-0 z-0
            transition-opacity duration-0
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <img 
            src={hoverImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-white mb-3">
        {isImage ? (
          <img src={Icon} alt={label} className="w-10 h-10 object-contain" />
        ) : (
          <Icon size={56} strokeWidth={1.5} />
        )}
      </div>

      <div className="relative z-10 mt-auto">
        <h2 className="text-5xl font-butler font-black text-white leading-none mb-2 tracking-tight whitespace-pre-line">
          {displayValue}
        </h2>
        <p className="text-lg font-medium text-white/95 leading-tight whitespace-pre-line">
          {label}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;