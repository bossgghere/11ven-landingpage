
import React from 'react';

const LogoSection: React.FC = () => {
  return (
    <div className="perspective-container relative w-full flex items-center justify-center py-10 md:py-20">
      {/* 3D Floating Wrapper */}
      <div className="animate-float relative transition-transform duration-1000 hover:scale-105 group">
        
        {/* Background Depth Effect */}
        <div className="absolute inset-0 bg-lime-brand/5 blur-[60px] md:blur-[100px] rounded-full scale-125 group-hover:bg-lime-brand/10 transition-colors pointer-events-none" />

        {/* The Core Content Container */}
        <div className="relative z-10 flex flex-col items-center px-8 sm:px-12">
          
          {/* Logo Main Box with Corner Accents */}
          <div className="relative inline-block px-4 py-2">
            {/* Top Right Accent */}
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-lime-brand/30 transition-all duration-500 group-hover:border-lime-brand" />
            
            {/* Bottom Left Accent */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-lime-brand/30 transition-all duration-500 group-hover:border-lime-brand" />

            <h1 className="font-tech text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-bold text-white tracking-tighter leading-none mb-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              11<span className="text-lime-brand">ven</span>
            </h1>
            
            {/* Holographic Scan Effect */}
            <div className="scanning-line" />
          </div>

          {/* Subtitle / Tagline */}
          <div className="mt-8 md:mt-12 overflow-hidden text-center">
            <p className="font-tech text-[9px] sm:text-[11px] md:text-base lg:text-lg tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] text-lime-brand/80 uppercase font-light animate-pulse">
              Not Just a Number.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Rotating Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg className="w-[120%] h-[120%] opacity-10 animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <text fontSize="1.8" fill="currentColor" className="font-tech">
            <textPath href="#circlePath">11VEN PROTOCOL // NO GATEKEEPING // 2030 // ELITE ONLY // SYNCHRONIZING //</textPath>
          </text>
          <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default LogoSection;
