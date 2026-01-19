'use client';

import { useEffect, useState } from 'react';
import { testimonials as testimonialsData, type Testimonial } from '../src/data/testimonials';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { RiDoubleQuotesL } from 'react-icons/ri';
import Button from './Button'; 

export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  
  const t: Testimonial = testimonialsData[index];

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
      setIsFading(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="w-full bg-white py-24 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* FIX: Added lg:h-[600px] 
            This forces the desktop view to be exactly 600px tall. 
            On mobile (flex-col), it stays auto-height so it stacks naturally.
        */}
        <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden border border-gray-100 lg:h-[600px]">
          
          {/* IMAGE SIDE */}
          {/* Mobile: 400px height. Desktop: Full height of the parent (600px) */}
          <div className="relative w-full h-[400px] lg:w-[45%] lg:h-full bg-[#44444C] shrink-0">
            <div className={`w-full h-full transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Marketing Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-4">
                <span className="bg-[var(--primary-blue)] text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] italic">
                  Verified Result
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          {/* Desktop: Full height, with overflow-y-auto just in case text is massive */}
          <div className="w-full lg:w-[55%] bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            
            <div className={`transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              
              <header className="mb-6 lg:mb-8">
                 <h2 className="text-3xl md:text-5xl font-black text-[var(--primary-black)] uppercase italic leading-none tracking-tighter">
                  The <span className="text-[var(--primary-blue)]">Impact.</span>
                </h2>
              </header>

              <RiDoubleQuotesL className="text-5xl md:text-6xl text-blue-600/10 absolute top-8 right-8 lg:top-12 lg:right-12" />
              
              <blockquote className="text-lg md:text-xl lg:text-2xl font-bold italic leading-relaxed text-[var(--primary-black)] mb-6 lg:mb-8">
                "{t.quote}"
              </blockquote>
              
              {t.update && (
                <div className="mb-8 p-4 bg-gray-50 border-l-4 border-[var(--primary-blue)]">
                  <p className="text-xs font-black uppercase tracking-widest text-[var(--primary-blue)] mb-1">Status Update</p>
                  <p className="text-sm font-medium text-gray-600 italic">{t.update}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-100 mt-auto">
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-[var(--primary-black)] uppercase italic leading-none">{t.name}</h4>
                  <p className="text-[var(--primary-blue)] font-bold uppercase tracking-widest text-[10px] mt-2">{t.role}</p>
                </div>

                <div className="flex bg-[var(--primary-black)]">
                  <button 
                    onClick={handlePrev} 
                    className="p-4 md:p-5 text-white hover:bg-[var(--primary-blue)] cursor-pointer transition-colors border-r border-white/10"
                    aria-label="Previous"
                  >
                    <FaChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="p-4 md:p-5 text-white hover:bg-[var(--primary-blue)] cursor-pointer transition-colors"
                    aria-label="Next"
                  >
                    <FaChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
              <Button text="Join the Community" variant="long" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 flex justify-center gap-1">
          {testimonialsData.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-700 ${i === index ? 'w-12 bg-[var(--primary-blue)]' : 'w-4 bg-[var(--primary-black)]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}