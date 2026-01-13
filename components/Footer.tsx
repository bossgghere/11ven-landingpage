
import React from 'react';
import { Instagram, Mail, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps { theme: 'dark' | 'light'; }

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className="w-full border-t border-main py-20 pb-24 px-6 md:px-12 bg-[var(--bg)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <h2 className="text-4xl font-italic-heading logo-script">11ven</h2>
            <div className="space-y-4">
              <p className="opacity-40 text-[10px] tracking-[0.3em] uppercase leading-relaxed max-w-xs">
                Not Just a Number. <br/>
                Defining the new vanguard of global streetwear.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-tech tracking-[0.5em] opacity-30 uppercase">Information</h4>
            <div className="space-y-4">
              <a href="mailto:theofficial11ven@gmail.com" className="text-xs block hover:opacity-60 transition-opacity tracking-wider uppercase">theofficial11ven@gmail.com</a>
              <p className="text-[10px] font-tech tracking-widest opacity-40 uppercase">HUB_STATION_011 // SEOUL_TX</p>
              <div className="mt-4 space-y-2">
                <p className="text-[9px] font-tech tracking-widest opacity-40 uppercase">Registered Address:</p>
                <p className="text-[9px] opacity-50 leading-relaxed">
                  Tribikram Prasad Sahoo<br/>
                  Flat No: 1-10-88/S2<br/>
                  Priya Residency<br/>
                  J J Nagar Colony<br/>
                  Alwal, Hyderabad<br/>
                  Telangana - 500010
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-tech tracking-[0.5em] opacity-30 uppercase">Connect</h4>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/11ven_store/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="https://wa.me/917416723763" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-all hover:-translate-y-1"><MessageCircle size={20} /></a>
              <a href="mailto:theofficial11ven@gmail.com" className="opacity-40 hover:opacity-100 transition-all hover:-translate-y-1"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-main/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
            <p className="text-[9px] font-tech tracking-widest opacity-20 uppercase">© 11VEN PROJECT_2024</p>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
               <a href="#terms" className="text-[9px] font-tech tracking-widest opacity-20 hover:opacity-100 uppercase transition-opacity">Terms</a>
               <a href="#privacy" className="text-[9px] font-tech tracking-widest opacity-20 hover:opacity-100 uppercase transition-opacity">Privacy</a>
               <a href="#return-refund" className="text-[9px] font-tech tracking-widest opacity-20 hover:opacity-100 uppercase transition-opacity">Returns</a>
               <a href="#cancellation" className="text-[9px] font-tech tracking-widest opacity-20 hover:opacity-100 uppercase transition-opacity">Cancellation</a>
               <a href="#shipping" className="text-[9px] font-tech tracking-widest opacity-20 hover:opacity-100 uppercase transition-opacity">Shipping</a>
               <a href="#about" className="text-[9px] font-tech tracking-widest opacity-20 hover:opacity-100 uppercase transition-opacity">About</a>
            </div>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-4 text-[9px] font-tech tracking-[0.4em] opacity-20 hover:opacity-100 uppercase transition-all">
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
