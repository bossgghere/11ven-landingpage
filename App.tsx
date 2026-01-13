
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Connect from './components/Connect';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnRefundPolicy from './components/ReturnRefundPolicy';
import CancellationPolicy from './components/CancellationPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFadeOut(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (isLoading) {
    return (
      <div className={shouldFadeOut ? 'opacity-0 transition-opacity duration-500' : ''}>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-full transition-colors duration-500 bg-[var(--bg)] selection:bg-[var(--fg)] selection:text-[var(--bg)]">
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <div className="relative z-10 w-full">
        {/* Brand Hero - Centered Intro */}
        <section id="home">
          <Hero theme={theme} />
        </section>

        {/* Join/Connect Section - Centered */}
        <section id="connect" className="py-32 md:py-52 bg-[var(--bg)] flex items-center justify-center border-t border-main">
          <Connect />
        </section>

        {/* Policy Pages */}
        <section id="terms" className="border-t border-main">
          <TermsConditions />
        </section>

        <section id="privacy" className="border-t border-main">
          <PrivacyPolicy />
        </section>

        <section id="return-refund" className="border-t border-main">
          <ReturnRefundPolicy />
        </section>

        <section id="cancellation" className="border-t border-main">
          <CancellationPolicy />
        </section>

        <section id="shipping" className="border-t border-main">
          <ShippingPolicy />
        </section>

        <section id="about" className="border-t border-main">
          <AboutUs />
        </section>

        {/* Final Footer */}
        <section id="footer">
          <Footer theme={theme} />
        </section>
      </div>

      {/* Aesthetic Accents */}
      <div className="fixed bottom-10 left-10 hidden xl:block pointer-events-none z-0">
        <p className="font-tech text-[9px] tracking-[0.6em] opacity-10 uppercase rotate-90 origin-left">
          GEN_S24_DROP
        </p>
      </div>
    </main>
  );
};

export default App;
