import React, { useEffect, useState } from 'react';

const sections = [
  'hero', 'problem', 'solution', 'data', 'architecture', 
  'models', 'metrics', 'edge-cases', 'deployment', 'impact', 'closing'
];

export const NavigationDots: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 hidden md:flex">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeSection === section 
              ? 'bg-brand-primary scale-125 shadow-[0_0_8px_rgba(37,99,235,0.4)]' 
              : 'bg-slate-300 hover:bg-slate-400'
          }`}
          aria-label={`Scroll to ${section}`}
        />
      ))}
    </div>
  );
};