
import React, { useState } from 'react';
import { Instagram, Mail, ChevronRight, ArrowUpRight, Sparkles, Send, MessageCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const MainContent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navItems = ['THE DROP', 'VAULT', 'VISION', 'CONNECT'];

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) return;

    setIsLoading(true);

    try {
      // Initialize EmailJS with your Public Key
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      // Better error messages for debugging
      if (!serviceId) {
        throw new Error('EmailJS Service ID is missing. Please check your .env file.');
      }
      if (!templateId) {
        throw new Error('EmailJS Template ID is missing. Please check your .env file.');
      }
      if (!publicKey) {
        throw new Error('EmailJS Public Key is missing. Please check your .env file.');
      }

      // Send email to the subscriber (welcome email)
      // Note: Template uses {{email}} variable for "To Email" field
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          email: email, // Template expects {{email}}
          to_name: email.split('@')[0],
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Failed to send email. Please try again later.');
      }
    } catch (err: any) {
      // More detailed error handling
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (err?.text) {
        // EmailJS specific error
        errorMessage = `Email service error: ${err.text}`;
      } else if (err?.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 max-w-xl mx-auto md:mx-0">
      {/* Mini Nav Bar - Scrollable on Mobile */}
      <nav className="flex gap-6 sm:gap-8 border-b border-white/5 pb-6 overflow-x-auto no-scrollbar mask-fade">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[9px] sm:text-[10px] font-tech tracking-[0.2em] sm:tracking-[0.3em] text-white/40 hover:text-lime-brand transition-all whitespace-nowrap uppercase"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Welcome Glass Card */}
      <div className="glass p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] relative group transition-all duration-500 hover:bg-white/5 overflow-hidden">
        <div className="absolute top-6 right-8 text-lime-brand opacity-20 group-hover:opacity-100 transition-opacity hidden sm:block">
          <ArrowUpRight size={24} />
        </div>
        
        <div className="absolute -bottom-4 -right-4 font-tech text-4xl sm:text-6xl text-white/5 select-none pointer-events-none uppercase">
          DRIP
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-tight">
          Engineered for the <br/>
          <span className="text-lime-brand italic font-normal glow-lime">Architects of Streetwear</span>
        </h2>
        
        <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8 max-w-sm">
          High-grade silhouettes for the new vanguard. 11VEN blends brutalist aesthetics with premium craftsmanship to create garments that are not just worn, but lived.
        </p>

        <button className="group relative w-full sm:w-auto flex items-center justify-center sm:justify-start gap-4 bg-lime-brand px-8 sm:px-10 py-4 sm:py-5 text-black rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95">
          VIEW THE COLLECTION
          <ChevronRight size={18} className="transition-transform group-hover:translate-x-2" />
        </button>
      </div>

      {/* Waitlist Module: THE PLUG LIST */}
      <div className="relative p-1 border-t border-white/10 pt-8 sm:pt-10">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <Sparkles size={14} className="text-lime-brand animate-pulse" />
          <h3 className="text-[9px] sm:text-[11px] font-tech tracking-[0.3em] sm:tracking-[0.5em] text-white/60 uppercase">The Plug List</h3>
        </div>

        {!submitted ? (
          <form onSubmit={handleWaitlistSubmit} className="relative group w-full max-w-md">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="YOUR.DATA@WAV.IO"
              disabled={isLoading}
              className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl py-4 sm:py-6 px-6 sm:px-8 text-white placeholder:text-white/20 focus:outline-none focus:border-lime-brand/50 focus:ring-1 focus:ring-lime-brand/20 transition-all font-light tracking-widest text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-lime-brand text-black rounded-lg sm:rounded-xl hover:scale-110 active:scale-90 transition-all shadow-[0_0_20px_rgba(217,255,128,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} sm:size={18} />
              )}
            </button>
            {error && (
              <p className="mt-3 text-[10px] sm:text-xs text-red-400 font-light tracking-wide">
                {error}
              </p>
            )}
          </form>
        ) : (
          <div className="glass py-4 sm:py-6 px-6 sm:px-8 rounded-xl sm:rounded-2xl border border-lime-brand/30 animate-in fade-in zoom-in duration-500">
            <p className="text-lime-brand text-[10px] sm:text-sm font-tech tracking-widest flex items-center gap-3 uppercase">
              <span className="w-2 h-2 rounded-full bg-lime-brand animate-ping" />
              ACCESS GRANTED.
            </p>
          </div>
        )}
        <p className="mt-4 text-[8px] sm:text-[10px] text-white/30 tracking-[0.1em] sm:tracking-widest uppercase italic leading-relaxed">
          *Get notified before the drop goes public. No gatekeeping.
        </p>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-4 pb-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h4 className="text-[9px] sm:text-[10px] font-tech tracking-[0.4em] text-white/30 uppercase">Local Node</h4>
          <div className="space-y-2 sm:space-y-3">
            <a href="mailto:theofficial11ven@gmail.com" className="block text-xs sm:text-sm text-white/80 hover:text-lime-brand transition-colors tracking-wide underline decoration-lime-brand/20 underline-offset-4 uppercase">
              theofficial11ven@gmail.com
            </a>
            <p className="text-[10px] sm:text-xs text-white/40 tracking-widest uppercase">
              HUB_STATION_011 // SEOUL_TX
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <h4 className="text-[9px] sm:text-[10px] font-tech tracking-[0.4em] text-white/30 uppercase">Sync Frequency</h4>
          <div className="flex gap-3 sm:gap-4">
            <a href="https://instagram.com/theofficial11ven" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl glass hover:bg-lime-brand hover:text-black transition-all group">
              <Instagram size={16} sm:size={18} className="group-hover:rotate-6 transition-transform" />
            </a>
            <a href="mailto:theofficial11ven@gmail.com" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl glass hover:bg-lime-brand hover:text-black transition-all group">
              <Mail size={16} sm:size={18} className="group-hover:rotate-6 transition-transform" />
            </a>
            <a href="https://wa.me/917416723763" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl glass hover:bg-lime-brand hover:text-black transition-all group">
              <MessageCircle size={16} sm:size={18} className="group-hover:rotate-6 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
