
import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center">
      {/* Brand Identity Stack */}
      <div className="max-w-4xl animate-in fade-in zoom-in duration-1000">
        <h1 className="text-8xl md:text-9xl lg:text-[13rem] font-italic-heading leading-none logo-script mb-8 select-none">
          11ven
        </h1>
        
        <p className="font-tech text-[10px] md:text-sm tracking-[1em] opacity-40 uppercase mb-20">
          The brand.
        </p>

        <div className="space-y-8 flex flex-col items-center">
          <div className="h-16 w-[1px] bg-[var(--fg)] opacity-20" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight uppercase max-w-2xl">
            A NEW STANDARD IN <br/> STREETWEAR  EVOLUTION.
          </h2>
          
          <p className="text-sm md:text-base opacity-50 font-light leading-relaxed max-w-md mx-auto">
            Architecting  silhouettes  for  the  modern  vanguard. 11VEN  blends  minimalist  brutalism  with  technical  precision  to  define  the  future of  high-performance  apparel.
          </p>
          
          <a 
            href="https://app.11ven.store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 bg-[var(--fg)] text-[var(--bg)] font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
