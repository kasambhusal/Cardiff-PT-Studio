import React, { useState, useEffect, useRef } from 'react';

interface ButtonProps {
  variant?: 'short' | 'long';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'short', className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const shortText = "Book Now";
  const longText = "Book Your Space Now";
  const targetText = variant === 'short' ? shortText : longText;

  // 1. Intersection Observer to detect when button is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target); // Only run once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the button is visible
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Typewriter Effect (Triggers only when hasStarted is true)
  useEffect(() => {
    if (!hasStarted) return;

    let i = 0;
    setDisplayText(""); 
    const typing = setInterval(() => {
      if (i < targetText.length) {
        setDisplayText((prev) => prev + targetText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 60); 

    return () => clearInterval(typing);
  }, [hasStarted, targetText]);

  return (
    <button 
      ref={buttonRef}
      className={`
        relative group overflow-hidden
        bg-[var(--primary-black)] text-white
        font-black uppercase italic tracking-tighter
        py-5 px-12 text-xl
        transition-all duration-300 transform
        hover:scale-105 hover:bg-black active:scale-95
        shadow-xl
        ${className}
      `}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

      {/* Text Content */}
      <span className="relative z-10 flex items-center justify-center">
        {displayText}
        {/* Only show cursor while typing or if not finished */}
        {displayText.length < targetText.length && (
          <span className="w-1.5 h-6 bg-[var(--primary-blue)] animate-pulse ml-1 inline-block" />
        )}
        
        {/* Icon that appears only after typing finishes */}
        {displayText.length === targetText.length && (
          <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>

      {/* Modern Bottom Border */}
      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[var(--primary-blue)] transition-all duration-700 group-hover:w-full" />
    </button>
  );
};

export default Button;