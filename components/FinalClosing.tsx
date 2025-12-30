import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const FinalClosing: React.FC<{ id: string }> = ({ id }) => {
  
  const restartDemo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id={id} className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>
      
      <motion.div 
        className="text-center z-10 px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-6 tracking-[0.2em] uppercase">Production Ready</h2>
        
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-10 leading-tight">
          AI that understands jobs.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            AI that recommends right.
          </span>
        </h1>

        <div className="relative group inline-block">
            <motion.button
                onClick={restartDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-3 px-10 py-5 bg-brand-primary text-white font-bold rounded-full text-xl shadow-xl hover:shadow-blue-500/30 transition-all ring-4 ring-blue-50 cursor-pointer"
            >
                 <div className="bg-white/20 p-1.5 rounded-full">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
                <span>Start Demo Session</span>
            </motion.button>

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 px-4 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Click to see how the AI recommends the best SHL assessments
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
            </div>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 text-slate-400 text-sm">
        SHL Assessment Engine v1.0 • Internal Confidential
      </footer>
    </section>
  );
};