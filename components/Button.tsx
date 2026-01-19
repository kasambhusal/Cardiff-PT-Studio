import React, { useState, useEffect, useRef } from 'react';

interface ButtonProps {
  variant?: 'short' | 'long';
  text?: string; // New flexible parameter
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'short', text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Logic to prioritize the 'text' prop if provided, else use variants
  const getTargetText = () => {
    if (text) return text;
    return variant === 'short' ? "Book Now" : "Book Your Space Now";
  };

  const targetText = getTargetText();

  // 1. Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger earlier for better UX
    );

    if (buttonRef.current) observer.observe(buttonRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Fixed Typewriter Effect
  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    setDisplayText(""); 

    const typing = setInterval(() => {
      // Use the local currentIndex to ensure we never skip a character
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
        bg-[#44444C] text-white
        font-black uppercase italic tracking-tighter
        py-5 px-10 text-xl
        transition-all duration-300 transform
        hover:scale-105 hover:bg-black active:scale-95
        shadow-xl min-w-[200px]
        ${className}
      `}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

      {/* Text Content */}
      <span className="relative z-10 flex items-center justify-center min-h-[1.5rem]">
        {displayText}
        
        {/* Cursor: Visible until finished */}
        {displayText.length < targetText.length && (
          <span className="w-1.5 h-6 bg-blue-500 animate-pulse ml-1 inline-block" />
        )}
        
        {/* Arrow: Appears after typing finishes */}
        {displayText.length === targetText.length && (
          <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>

      {/* Modern Bottom Border */}
      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-blue-500 transition-all duration-700 group-hover:w-full" />
    </button>
  );
};

export default Button;