
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collections: React.FC = () => {
  const categories = [
    { id: '01', name: 'CORE_COLLECTION', items: 'Limited Edition' },
    { id: '02', name: 'OUTER_LAYERS', items: 'Seasonal Drop' },
    { id: '03', name: 'TECHNICAL_ESSENTIALS', items: 'Restocked' },
    { id: '04', name: 'ARCHIVE_VAULT', items: 'Members Only' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="animate-in slide-in-from-left duration-700">
          <span className="font-tech text-[10px] tracking-[0.4em] opacity-30 uppercase block mb-4">The Deployment</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">RECENT_DROPS</h2>
        </div>
        <p className="text-xs md:text-sm opacity-40 max-w-xs leading-relaxed uppercase tracking-wider text-right">
          Sourced globally. <br/>
          Crafted for the elite collective.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0">
        {categories.map((cat) => (
          <a 
            key={cat.id} 
            href="#"
            className="group border-t border-main py-10 md:py-16 flex items-center justify-between transition-all hover:bg-[var(--fg)] hover:text-[var(--bg)] px-8 -mx-8"
          >
            <div className="flex items-center gap-8 md:gap-16">
              <span className="font-tech text-[10px] opacity-30 group-hover:opacity-100">{cat.id}</span>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                <h3 className="text-2xl md:text-5xl font-bold tracking-tight uppercase group-hover:translate-x-4 transition-transform duration-300">{cat.name}</h3>
                <p className="text-[10px] font-tech tracking-widest opacity-40 uppercase group-hover:opacity-60">{cat.items}</p>
              </div>
            </div>
            <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        ))}
        <div className="border-t border-main" />
      </div>
    </div>
  );
};

export default Collections;
