import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Box, Grid, ChevronDown, ChevronUp } from 'lucide-react';

export const ModelVisuals: React.FC<{ id: string }> = ({ id }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Model Intelligence
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
            Three layers of advanced processing working in harmony to deliver the perfect recommendation.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
        {[
            { 
                icon: Layers, 
                title: "Language Model", 
                subtitle: "Sentence Transformer", 
                tech: "all-MiniLM-L6-v2",
                desc: "We use a high-performance transformer to understand the nuance of job descriptions, not just keywords.",
                color: "text-blue-600",
                bgIcon: "bg-blue-50"
            },
            { 
                icon: Grid, 
                title: "Vector Space", 
                subtitle: "Semantic Mapping", 
                tech: "384 Dimensions",
                desc: "Jobs are mapped into a high-dimensional space where 'Java' and 'JVM' sit close together automatically.",
                color: "text-teal-600",
                bgIcon: "bg-teal-50"
            },
            { 
                icon: Box, 
                title: "Fast Retrieval", 
                subtitle: "FAISS Indexing", 
                tech: "Billion-scale Search",
                desc: "Facebook AI Similarity Search allows us to search millions of assessment combinations in milliseconds.",
                color: "text-indigo-600",
                bgIcon: "bg-indigo-50"
            }
        ].map((card, i) => (
            <motion.div
                key={i}
                className="w-80 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
            >
                <div 
                    className={`bg-white rounded-2xl border ${activeCard === i ? 'border-brand-primary ring-1 ring-brand-primary' : 'border-slate-200'} shadow-lg p-6 flex flex-col h-full transition-all duration-300`}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${card.bgIcon} flex items-center justify-center`}>
                            <card.icon className={`w-6 h-6 ${card.color}`} />
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-4">{card.subtitle}</p>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {card.desc}
                    </p>

                    <div className="mt-auto">
                        <button 
                            onClick={() => toggleCard(i)}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-primary/80 transition-colors focus:outline-none"
                        >
                            {activeCard === i ? "Hide Specs" : "Learn More"}
                            {activeCard === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {activeCard === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                className="overflow-hidden border-t border-slate-100"
                            >
                                <div className="pt-4 flex flex-col gap-1">
                                    <span className="text-[10px] text-slate-400 uppercase font-bold">Technical Spec</span>
                                    <span className="text-sm font-mono text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">{card.tech}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
};