import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, Zap, Target, Brain, Play } from 'lucide-react';

export const HeroSection: React.FC<{ id: string }> = ({ id }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Senior Java Developer with Microservices...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const startDemo = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center relative p-8">
      {/* Background Animation Canvas Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-100/50 rounded-full blur-xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
            }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            style={{ width: Math.random() * 300 + 50, height: Math.random() * 300 + 50 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center space-y-8 md:space-y-12">
        
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-brand-primary text-sm font-medium mb-4 shadow-sm">
            <Sparkles size={16} />
            <span>Next Gen SHL Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            AI-Powered SHL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Assessment Engine
            </span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Instantly matching job roles with the right psychometric assessments using advanced vector embeddings.
          </p>
        </motion.div>

        {/* Search Bar Simulation */}
        <motion.div 
          className="w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg shadow-blue-900/5 border border-blue-100">
            <Search className="text-brand-primary w-6 h-6" />
            <div className="h-6 flex items-center text-lg text-slate-600 font-mono w-full">
              {typedText}
              <span className="animate-pulse ml-1 w-[2px] h-5 bg-brand-primary block"></span>
            </div>
            <div className="hidden md:block px-3 py-1 bg-blue-50 text-brand-primary text-xs font-semibold rounded border border-blue-100">
              JD Parsing Active
            </div>
          </div>
        </motion.div>

        {/* CTA Button Block - NEW */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-3 w-full"
        >
            <motion.button
                onClick={startDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 20px rgba(37,99,235,0.3)", "0 0 0px rgba(37,99,235,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-600/30 overflow-hidden ring-4 ring-blue-50 cursor-pointer z-50"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <div className="bg-white/20 p-1.5 rounded-full">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                </div>
                <span>Start Demo Session</span>
            </motion.button>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-tight">
                Click to see how the AI recommends the best SHL assessments for any job description.
            </p>
        </motion.div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
          {[
            { icon: Zap, title: "<2s Response", subtitle: "Real-time Inference", color: "text-amber-500", bg: "bg-amber-50" },
            { icon: Target, title: "100% Recall", subtitle: "@Top 10 Results", color: "text-brand-secondary", bg: "bg-teal-50" },
            { icon: Brain, title: "95%+ Precision", subtitle: "Semantic Matching", color: "text-brand-primary", bg: "bg-blue-50" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl flex flex-col items-center gap-3 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`p-3 rounded-full ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{item.title}</div>
                <div className="text-sm text-slate-500">{item.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};