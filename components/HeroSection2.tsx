import React from 'react';
import backgroundPic from '../src/images/hero/main-bg-3.png';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 mt-[-30px]">
      {/* Background Image */}
      <img 
        src={backgroundPic.src} 
        alt="Joe Cardiff PT Studio" 
        className="absolute inset-0 w-full h-full object-cover -z-20"
        loading="eager"
      />

      {/* Overlay - Using your theme color with transparency for a tinted look */}
<div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-black)]/20 via-[var(--primary-black)]/50 to-[var(--primary-black)]/90 backdrop-blur-[2px] -z-10" />
      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        {/* <p className="uppercase tracking-[0.2em] text-sm font-semibold mb-4 text-blue-400">
          Finally... A Fitness Programme Designed for Real Life
        </p> */}

       <h1 className="text-5xl md:text-9xl font-black leading-tight mb-6 uppercase italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]" 
    style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.15)' }}>
  Studio <span className="text-[var(--primary-blue)] drop-shadow-[0_2px_10px_rgba(var(--primary-blue-rgb),0.5)]">Link</span>
</h1>

       <p className="text-lg md:text-3xl font-bold mb-10 max-w-3xl mx-auto leading-tight opacity-100 uppercase tracking-wide"
   style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
  Stop restarting. <span className="text-[var(--primary-blue)]">Start reshaping.</span>
  <span className="block text-base md:text-xl font-medium mt-3 opacity-90 normal-case italic">
    The direct link to the physique you’ve always dreamed of.
  </span>
</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <button 
    className="bg-[var(--primary-blue)] font-black hover:text-[#383836] text-white px-10 py-4 rounded-full font-bold text-2xl transition-all duration-100 hover:scale-99 transform shadow-2xl uppercase tracking-wider cursor-pointer"
>
    Enroll Now — Start Your Transformation
</button> */}
            <Button variant="long"/>
        </div>
        
        <p className="mt-6 text-sm italic opacity-70">
          Stop trying to stay motivated on your own. Let's do it together.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;