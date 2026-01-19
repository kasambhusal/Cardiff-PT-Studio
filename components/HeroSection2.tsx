import React from 'react';
import backgroundPic from '../src/images/hero/main-bg.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image */}
      <img 
        src={backgroundPic.src} 
        alt="Joe Cardiff PT Studio" 
        className="absolute inset-0 w-full h-full object-cover -z-20"
        loading="eager"
      />

      {/* Overlay - Using your theme color with transparency for a tinted look */}
      <div className="absolute inset-0 bg-[#44444C]/70 -z-10" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        <p className="uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-blue-400">
          Finally... A Fitness Programme Designed for Real Life
        </p>

        <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 uppercase italic">
          Mindset <span className="text-blue-500">Mastery</span>
        </h1>

        <p className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          No more starting and stopping. No more confusion. 
          <span className="block font-medium mt-2">Just results that actually stick.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="bg-[#44444C] hover:bg-black text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-90 shadow-2xl uppercase tracking-wider cursor-pointer"
          >
            Enroll Now — Start Your Transformation
          </button>
        </div>
        
        <p className="mt-6 text-sm italic opacity-70">
          Stop trying to stay motivated on your own. Let's do it together.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;