import React, { useState, useEffect, useRef } from 'react';

interface ButtonProps {
  variant?: 'short' | 'long';
  text?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'short', text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const getTargetText = () => {
    if (text) return text;
    return variant === 'short' ? "Book Now" : "Book Your Space Now";
  };

  const targetText = getTargetText();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } 
    );

    if (buttonRef.current) observer.observe(buttonRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    setDisplayText(""); 

    const typing = setInterval(() => {
      if (currentIndex < targetText.length) {
        const nextChar = targetText.charAt(currentIndex);
        setDisplayText((prev) => prev + nextChar);
        currentIndex++;
      } else {
        clearInterval(typing);
      }
    }, 50); 

    return () => clearInterval(typing);
  }, [hasStarted, targetText]);

  return (
    <button 
      ref={buttonRef}
      className={`
        relative group overflow-hidden cursor-pointer
        bg-[#0149ac] text-white
        -skew-x-6 border-2 border-transparent hover:border-white
        
        /* TYPOGRAPHY UPGRADES */
        font-black uppercase italic tracking-tighter
        text-2xl lg:text-3xl /* Larger text */
        
        /* PADDING ADJUSTMENTS */
        py-3 px-12 /* Reduced vertical, increased horizontal for a "sleek" look */
        
        transition-all duration-300 ease-out transform
        hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0
        shadow-[0_4px_14px_0_rgba(1,73,172,0.39)] 
        hover:shadow-[0_8px_25px_rgba(1,73,172,0.4)] 
        hover:bg-[#013e91]
        min-w-[280px]
        ${className}
      `}
    >
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

      <span className="relative z-10 flex items-center justify-center min-h-[2.5rem] skew-x-6">
        <span className="drop-shadow-lg">{displayText}</span>
        
        {/* Cursor matches larger text */}
        {displayText.length < targetText.length && (
          <span className="w-2.5 h-8 bg-white animate-pulse ml-1 inline-block shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
        )}
        
        {/* Arrow matches larger text */}
        {displayText.length === targetText.length && (
          <svg className="ml-3 h-8 w-8 stroke-[4px] transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>

      <div className="absolute bottom-0 left-0 h-2 w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};

export default Button;