import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, Search, Star, ListFilter, ArrowRight } from 'lucide-react';

const steps = [
    { icon: FileText, label: "Job Desc" },
    { icon: Cpu, label: "Embeddings", sub: "Sentence Transformer" },
    { icon: Search, label: "FAISS Search", sub: "Vector Space" },
    { icon: Star, label: "Hybrid Boost", sub: "Keyword + Semantic" },
    { icon: ListFilter, label: "Ranking", sub: "Re-ranker" },
];

export const ArchitectureFlow: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-900">Architecture Pipeline</h2>
        <p className="text-slate-500 mt-2">End-to-end processing flow</p>
      </div>

      <div className="w-full max-w-7xl overflow-x-auto px-8 pb-12">
        <div className="flex items-center min-w-[1000px] justify-between relative">
            
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
            <motion.div 
                className="absolute top-1/2 left-0 h-1 bg-brand-primary -z-10 transform -translate-y-1/2"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
            ></motion.div>

            {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                    <motion.div
                        className="relative group"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.5, type: "spring" }}
                    >
                        {/* Glow behind */}
                        <div className="absolute inset-0 bg-blue-200 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="w-24 h-24 bg-white shadow-lg rounded-2xl border border-slate-200 flex flex-col items-center justify-center relative z-10">
                            <step.icon className="w-8 h-8 text-brand-primary mb-2" />
                            <span className="text-xs font-bold text-slate-800">{step.label}</span>
                        </div>

                        {step.sub && (
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap text-slate-500 font-medium">
                                {step.sub}
                            </div>
                        )}
                    </motion.div>

                    {i < steps.length - 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.5 + 0.2 }}
                        >
                            <ArrowRight className="text-slate-300 w-6 h-6" />
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
      </div>

      {/* Hybrid Logic Visualization */}
      <div className="mt-12 flex gap-12 text-center">
        <motion.div 
            className="p-6 bg-white shadow-md rounded-xl border-t-4 border-brand-secondary"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
        >
            <div className="text-3xl font-bold text-brand-secondary">70%</div>
            <div className="text-sm text-slate-500">Semantic Meaning</div>
        </motion.div>
        <div className="text-4xl font-thin flex items-center text-slate-300">+</div>
        <motion.div 
             className="p-6 bg-white shadow-md rounded-xl border-t-4 border-brand-primary"
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ delay: 2.7 }}
        >
            <div className="text-3xl font-bold text-brand-primary">30%</div>
            <div className="text-sm text-slate-500">Keyword Exact Match</div>
        </motion.div>
      </div>

    </section>
  );
};