
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-main glass h-20 flex items-center px-6 md:px-12">
      <div className="w-1/3 flex items-center">
        <nav className="hidden md:flex gap-10">
          <a href="#connect" className="text-[10px] font-tech tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity uppercase">Connect</a>
        </nav>
      </div>
      
      <div className="w-1/3 flex justify-center">
        <a href="#home" className="text-3xl font-italic-heading logo-script hover:opacity-80 transition-opacity">11ven</a>
      </div>

      <div className="w-1/3 flex justify-end items-center gap-8">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all duration-300 border border-transparent hover:border-main"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Navigation;
