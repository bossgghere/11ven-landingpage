
import React from 'react';

interface LoadingScreenProps {
  onFinished?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-1000">
      {/* Background Tech Detail */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      
      <div className="relative flex flex-col items-center">
        {/* Animated Text */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-tech text-5xl md:text-7xl font-bold text-lime-brand tracking-[0.5em] animate-glitch">
            11ven
          </h1>
        </div>

        {/* Progress Line */}
        <div className="w-48 md:w-64 h-[1px] bg-white/10 relative">
          <div className="absolute inset-0 bg-lime-brand animate-reveal shadow-[0_0_10px_#D9FF80]" />
        </div>

        {/* Subtitle */}
        <div className="mt-8 flex items-center gap-4 text-white/20 font-tech text-[8px] tracking-[0.6em] uppercase">
          <span>Initializing Protocol</span>
          <span className="w-1 h-1 bg-lime-brand rounded-full animate-ping" />
          <span>V.2030.11</span>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute bottom-12 left-12 w-24 h-24 border-l border-b border-white/5 opacity-50" />
      <div className="absolute top-12 right-12 w-24 h-24 border-r border-t border-white/5 opacity-50" />
    </div>
  );
};

export default LoadingScreen;
