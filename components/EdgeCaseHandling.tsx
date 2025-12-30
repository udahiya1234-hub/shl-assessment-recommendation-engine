import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, SearchX, FileQuestion, Check } from 'lucide-react';

const cases = [
    { icon: FileQuestion, title: "Vague Input", desc: "Handles sparse descriptions (e.g., 'Java Dev') by inferring standard seniority skills automatically from market data." },
    { icon: AlertTriangle, title: "Typo Correction", desc: "Intelligently maps typos like 'Phyton' to 'Python' using fuzzy matching before vectorization." },
    { icon: SearchX, title: "Rare Skills", desc: "Smooth fallback to nearest domain-level recommendations when specific niche tools aren't found." },
];

export const EdgeCaseHandling: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center py-20 relative bg-slate-50">
      <div className="text-center mb-16 px-4">
        <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-mono mb-4 border border-amber-200">Robustness</div>
        <h2 className="text-4xl font-bold text-slate-900">Edge Case Management</h2>
        <p className="text-slate-500 mt-4 max-w-2xl">Ensuring reliability even when inputs are imperfect.</p>
      </div>

      {/* Grid container with proper spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-8">
        {cases.map((item, i) => (
            <motion.div
                key={i}
                className="relative h-80 w-full group perspective-1000 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
            >
                {/* 3D Container */}
                <div className="w-full h-full relative preserve-3d group-hover:my-rotate-y-180 duration-700 transition-all">
                    
                    {/* Front Face */}
                    <div className="absolute backface-hidden inset-0 bg-white rounded-2xl p-8 flex flex-col items-center justify-center border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
                            <item.icon className="w-8 h-8 text-slate-400 group-hover:text-brand-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-center text-slate-900 mb-2">{item.title}</h3>
                        <div className="mt-auto pt-4">
                            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full">Hover to Resolve</span>
                        </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute my-rotate-y-180 backface-hidden inset-0 bg-brand-primary rounded-2xl p-8 flex flex-col items-center justify-center border border-blue-600 shadow-xl">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                            <Check className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white/90 font-bold mb-3 uppercase tracking-wider text-xs">AI Resolution</h4>
                        <p className="text-center text-white leading-relaxed text-sm font-medium">
                            {item.desc}
                        </p>
                    </div>

                </div>
            </motion.div>
        ))}
      </div>
      
      {/* CSS Helper for 3D Flip */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .my-rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};