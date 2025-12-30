import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileCode, ArrowRight, Database } from 'lucide-react';

export const SolutionAction: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">The Engine in Action</h2>
        <p className="text-slate-500">Seamless transformation from requirement to recommendation</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl relative z-10">
        
        {/* Input: Job Description */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-64 bg-white shadow-lg p-6 rounded-xl border border-slate-100 flex flex-col items-center gap-4"
        >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-primary">
                <FileCode size={32} />
            </div>
            <div className="text-center">
                <h3 className="font-semibold text-lg text-slate-900">Job Description</h3>
                <p className="text-xs text-slate-500 mt-2">"Looking for a React Native expert with 5 years experience..."</p>
            </div>
        </motion.div>

        {/* Animated Arrow 1 */}
        <div className="hidden md:flex flex-col items-center">
            <motion.div
                animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ArrowRight className="text-brand-primary" />
            </motion.div>
            <span className="text-[10px] text-brand-primary mt-1 uppercase tracking-widest font-semibold">Vectorize</span>
        </div>

        {/* Central Brain */}
        <motion.div 
            className="relative w-64 h-64 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
        >
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute inset-0 border border-blue-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-teal-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center relative z-10 border border-slate-100 shadow-xl shadow-blue-500/10">
                <Brain className="w-16 h-16 text-brand-primary" />
            </div>

            {/* Orbiting particles */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-brand-primary rounded-full shadow-sm"
                    animate={{ rotate: 360 }}
                    style={{ offsetPath: "path('M 0 -100 A 100 100 0 1 1 0 100 A 100 100 0 1 1 0 -100')", offsetDistance: `${i * 33}%` }} 
                />
            ))}
        </motion.div>

         {/* Animated Arrow 2 */}
         <div className="hidden md:flex flex-col items-center">
            <motion.div
                animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
                <ArrowRight className="text-brand-secondary" />
            </motion.div>
            <span className="text-[10px] text-brand-secondary mt-1 uppercase tracking-widest font-semibold">Rank</span>
        </div>

        {/* Output: Assessments */}
        <div className="flex flex-col gap-4">
            {[1, 2].map((i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.2) }}
                    className="w-72 bg-white shadow-md p-4 rounded-xl border border-slate-100 border-l-4 border-l-brand-secondary flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer"
                >
                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-brand-secondary shrink-0">
                        <Database size={18} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm text-slate-900">Mobile Skills L2</h4>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] bg-green-50 text-green-700 border border-green-100 px-1.5 py-0.5 rounded font-medium">High Relevance</span>
                            <span className="text-[10px] text-slate-400">ID: SHL-99{i}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};