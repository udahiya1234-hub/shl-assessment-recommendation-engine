import React from 'react';
import { motion } from 'framer-motion';

export const BusinessImpact: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-8 bg-brand-bg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        
        {[
            { label: "Search Efficiency", val: "90%", suffix: "Faster", desc: "Reduced hours of manual lookup to seconds." },
            { label: "Candidate Fit", val: "2.5x", suffix: "Better", desc: "Higher quality hires through precise matching." },
            { label: "SHL Utilization", val: "+40%", suffix: "Growth", desc: "More assessments deployed per job role." }
        ].map((stat, i) => (
            <motion.div
                key={i}
                className="h-96 flex flex-col justify-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-slate-400 uppercase tracking-widest text-sm mb-4 font-bold">{stat.label}</h3>
                <div className="text-7xl md:text-8xl font-black text-slate-900 mb-2 tracking-tighter">
                    {stat.val}
                </div>
                <div className="text-2xl text-brand-primary font-light mb-8">{stat.suffix}</div>
                <p className="text-slate-500 max-w-xs leading-relaxed">{stat.desc}</p>
            </motion.div>
        ))}

      </div>
    </section>
  );
};