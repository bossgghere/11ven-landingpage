
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Logo Text in White for Loader */}
        <div className="overflow-hidden mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-italic-heading tracking-tighter animate-pulse">
            11ven
          </h1>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-white animate-reveal origin-left" />
        </div>

        <div className="mt-8">
          <p className="font-tech text-[8px] tracking-[0.5em] text-white/30 uppercase">
            COLLECTION_LOADING
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
