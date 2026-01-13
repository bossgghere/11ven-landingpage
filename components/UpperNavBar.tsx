import React from 'react';

const UpperNavBar: React.FC = () => {
  const policyLinks = [
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Return & Refund', href: '#return-refund' },
    { name: 'Cancellation', href: '#cancellation' },
    { name: 'Shipping', href: '#shipping' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)] border-b border-main/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-12 md:h-14">
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar">
            {policyLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[8px] md:text-[9px] font-tech tracking-[0.2em] md:tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavBar;
