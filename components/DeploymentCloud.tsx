import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code, Globe, Lock } from 'lucide-react';

export const DeploymentCloud: React.FC<{ id: string }> = ({ id }) => {
  const nodes = [
    { icon: Code, label: "Python/FastAPI" }, 
    { icon: Server, label: "Docker Cont." },
    { icon: Lock, label: "IAM Auth" },
    { icon: Globe, label: "REST API" },
  ];

  // Explicit positioning for desktop view to guarantee no overlap
  const getDesktopPosition = (index: number) => {
    // Large pixel values to clear the center hub
    const xDist = 260; 
    const yDist = 150;
    
    // Positions: TL, TR, BL, BR
    switch(index) {
        case 0: return { x: -xDist, y: -yDist }; 
        case 1: return { x: xDist, y: -yDist }; 
        case 2: return { x: -xDist, y: yDist }; 
        case 3: return { x: xDist, y: yDist }; 
        default: return { x: 0, y: 0 };
    }
  }

  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20">
      {/* Background Grid - Very Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-12 md:mb-20 text-center text-slate-900">Enterprise Deployment</h2>

        {/* --- MOBILE VIEW: VERTICAL STACK --- */}
        <div className="md:hidden flex flex-col items-center gap-8 w-full">
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 shadow-xl shadow-blue-500/10 animate-pulse-slow">
                 <Cloud className="w-16 h-16 text-brand-primary" />
            </div>
            
            <div className="flex flex-col gap-4 w-full max-w-xs relative">
                 {/* Vertical Connecting Line */}
                 <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 -z-10"></div>
                 
                 {nodes.map((node, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-4 rounded-xl flex items-center gap-4 border border-slate-200 shadow-sm z-10 ml-0"
                    >
                        <div className="p-2 bg-slate-50 rounded-lg shrink-0 border border-slate-100">
                            <node.icon className="w-6 h-6 text-brand-primary" />
                        </div>
                        <span className="font-mono text-sm text-slate-700 font-semibold">{node.label}</span>
                    </motion.div>
                 ))}
            </div>
        </div>

        {/* --- DESKTOP VIEW: HUB & SPOKE --- */}
        <div className="hidden md:block relative w-full h-[500px]">
             
             {/* Center Hub */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                 <motion.div 
                    className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center border border-slate-100 shadow-2xl"
                    animate={{ boxShadow: ["0 0 20px rgba(37,99,235,0.05)", "0 0 40px rgba(37,99,235,0.1)", "0 0 20px rgba(37,99,235,0.05)"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                 >
                    <Cloud className="w-20 h-20 text-brand-primary mb-2" />
                    <span className="font-bold text-brand-primary">Cloud Core</span>
                 </motion.div>
             </div>

             {/* Satellites & Lines */}
             {nodes.map((node, i) => {
                const pos = getDesktopPosition(i);
                // Calculate geometry for connecting line
                const dist = Math.sqrt(pos.x ** 2 + pos.y ** 2);
                const angle = Math.atan2(pos.y, pos.x) * (180 / Math.PI);

                return (
                    <React.Fragment key={i}>
                        {/* Connecting Line */}
                        <motion.div 
                            className="absolute left-1/2 top-1/2 h-[2px] bg-gradient-to-r from-brand-primary/20 to-transparent origin-left z-0"
                            style={{ width: dist, rotate: `${angle}deg` }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />

                        {/* Node Card */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 w-48 bg-white p-4 rounded-xl flex flex-col items-center gap-3 border border-slate-200 shadow-lg z-10 hover:border-brand-primary/50 transition-colors"
                            // Center the card on its destination point
                            style={{ marginLeft: -96, marginTop: -60 }} 
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            whileInView={{ x: pos.x, y: pos.y, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 + (i * 0.1) }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-3 bg-slate-50 rounded-full border border-slate-100">
                                <node.icon className="w-6 h-6 text-brand-primary" />
                            </div>
                            <span className="text-sm font-mono text-slate-700 font-bold">{node.label}</span>
                        </motion.div>
                    </React.Fragment>
                );
             })}
        </div>
      </div>
    </section>
  );
};