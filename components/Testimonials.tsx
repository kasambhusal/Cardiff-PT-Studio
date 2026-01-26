'use client';

import React from 'react';
import { testimonials as testimonialsData } from '../src/data/testimonials';
import { RiDoubleQuotesL } from 'react-icons/ri';
import Button from './Button'; 

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#F8F8F8] py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl relative">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic leading-none tracking-tighter">
            Real <span className="text-[#0149ac]">Results.</span>
          </h2>
          <p className="mt-4 text-slate-500 font-bold uppercase tracking-[0.3em]">The Impact of our Program</p>
        </div>

        {/* THE TRACK (Central Spine) - Only visible on LG screens */}
        <div className="hidden lg:block absolute left-1/2 top-[300px] bottom-0 w-1 bg-slate-200 -translate-x-1/2 z-0" />

        <div className="space-y-40 relative z-10">
          {testimonialsData.map((t, i) => {
            const isEven = i % 2 === 0;
            const resultNumber = i + 1;
            
            return (
              <React.Fragment key={i}>
                <div className="relative">
                  
                  {/* BRINCH/INDEX CIRCLE (Center Point) */}
                  <div className="hidden lg:flex absolute left-1/2 -top-12 -translate-x-1/2 w-14 h-14 bg-white border-4 border-[#0149ac] rounded-full items-center justify-center z-20 shadow-xl">
                    <span className="text-[#0149ac] font-black text-xl italic">{resultNumber}</span>
                  </div>

                  {/* Testimonial Card */}
                  <div 
                    className={`flex flex-col lg:flex-row shadow-2xl overflow-hidden border border-gray-100 bg-white lg:h-[550px] transition-transform duration-500 hover:scale-[1.01] ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* IMAGE SIDE */}
                    <div className="relative w-full h-[400px] lg:w-[45%] lg:h-full bg-[#44444C] shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-5 left-6">
                        <span className="bg-[#0149ac] text-white px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] italic">
                          Case Study #0{resultNumber}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                      <RiDoubleQuotesL className="text-7xl text-blue-600/10 absolute top-8 right-8" />
                      
                      <blockquote className="text-xl md:text-2xl lg:text-3xl font-black italic leading-tight text-slate-800 mb-8">
                        "{t.quote}"
                      </blockquote>
                      
                      {t.update && (
                        <div className="mb-8 p-4 bg-blue-50 border-l-4 border-[#0149ac]">
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#0149ac] mb-1">Current Status</p>
                          <p className="text-base font-bold text-slate-600 italic leading-snug">{t.update}</p>
                        </div>
                      )}

                      <div className="pt-6 border-t border-gray-100">
                        <h4 className="text-2xl font-black text-slate-900 uppercase italic leading-none">
                          {t.name}
                        </h4>
                        <p className="text-[#0149ac] font-bold uppercase tracking-widest text-xs mt-2">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CALL TO ACTION BUTTON (Every 3 Testimonials) */}
                {(i + 1) % 3 === 0 && (
                  <div className="relative flex flex-col items-center justify-center py-20 space-y-6 z-20">
                    {/* Visual break in the line for the button */}
                    <div className="hidden lg:block absolute inset-0 self-center w-1 bg-[#F8F8F8] -z-10" />
                    
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic text-slate-900 text-center">
                      Like {t.name.split(' ')[0]}, <span className="text-[#0149ac]">Start Your Story</span>
                    </h3>
                    <Button text="Claim Your Transformation" variant="long" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}