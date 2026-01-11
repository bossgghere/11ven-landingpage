
import React, { useState, useEffect } from 'react';
import LogoSection from './components/LogoSection';
import MainContent from './components/MainContent';
import LoadingScreen from './components/LoadingScreen';
import logoImage from './assets/11logobgless.png';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    // Show loader for a shorter duration (1.2s instead of 2.8s)
    const timer = setTimeout(() => {
      setShouldFadeOut(true);
      // Brief delay for the fade out animation before unmounting
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={shouldFadeOut ? 'loader-fade-out' : ''}>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row animate-in fade-in duration-1000">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[50%] h-[50%] bg-[#D9FF80]/10 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-white/5 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen">
        {/* Visual/Logo Core Section */}
        <section className="w-full md:w-[50%] lg:w-[55%] flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 pt-20 md:pt-0">
          <div className="w-full flex justify-center md:-mt-32 lg:-mt-44">
            <LogoSection />
          </div>
        </section>

        {/* Interface Section */}
        <section className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center items-center md:items-start p-6 sm:p-12 lg:p-16 pb-20 md:pb-16">
          <MainContent />
        </section>
      </div>

      {/* Decorative Hud Elements - Responsive hiding/sizing */}
      <div className="hidden sm:block fixed bottom-8 lg:bottom-12 left-8 lg:left-12 font-tech text-[8px] lg:text-[10px] tracking-[0.5em] text-white/20 uppercase z-20">
        System 11.0 // Latency 0.02ms // Online
      </div>
      
      {/* Logo at top left */}
      <div className="fixed top-6 lg:top-8 left-6 lg:left-8 z-20">
        <img 
          src={logoImage} 
          alt="11VEN Logo" 
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </main>
  );
};

export default App;
