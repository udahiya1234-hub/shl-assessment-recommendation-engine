import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity, ShoppingCart, Truck, Landmark, Server, ShieldCheck, ChevronUp } from 'lucide-react';

// Adjusted colors for light theme
const skills = [
  { name: 'Java', size: 'text-5xl', color: 'text-blue-600' },
  { name: 'Python', size: 'text-4xl', color: 'text-teal-600' },
  { name: 'AWS', size: 'text-3xl', color: 'text-slate-700' },
  { name: 'Leadership', size: 'text-4xl', color: 'text-indigo-600' },
  { name: 'SQL', size: 'text-2xl', color: 'text-slate-500' },
  { name: 'React', size: 'text-3xl', color: 'text-blue-500' },
  { name: 'Microservices', size: 'text-xl', color: 'text-purple-600' },
  { name: 'Docker', size: 'text-2xl', color: 'text-cyan-600' },
  { name: 'Agile', size: 'text-3xl', color: 'text-green-600' },
  { name: 'Kubernetes', size: 'text-xl', color: 'text-blue-700' },
  { name: 'Communication', size: 'text-2xl', color: 'text-pink-600' },
  { name: 'Problem Solving', size: 'text-3xl', color: 'text-amber-600' },
];

const domains = [
    { name: 'Finance', icon: Landmark, desc: "Concurrency & Security" },
    { name: 'Healthcare', icon: Activity, desc: "Compliance & Data" },
    { name: 'SaaS', icon: Server, desc: "Scale & Microservices" },
    { name: 'E-commerce', icon: ShoppingCart, desc: "High Availability" },
    { name: 'Retail', icon: Briefcase, desc: "POS & Inventory" },
    { name: 'Logistics', icon: Truck, desc: "Route Optimization" },
];

export const DataVisualization: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-brand-bg">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Word Cloud */}
        <div className="relative h-[400px] flex items-center justify-center order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent blur-3xl"></div>
          <div className="relative flex flex-wrap justify-center content-center gap-6 p-8">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                className={`${skill.size} ${skill.color} font-bold cursor-default`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.2, rotate: Math.random() * 10 - 5 }}
                animate={{ y: [0, -10, 0] }}
                // @ts-ignore
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "mirror" }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right: Structure/Domains */}
        <div className="flex flex-col justify-center space-y-12 order-1 md:order-2">
            
            {/* Improved Domain Expertise Card */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-brand-primary w-6 h-6" />
                    <h3 className="text-3xl font-bold text-slate-900">Domain Intelligence</h3>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed relative z-10">
                        The engine contextualizes skills based on industry. <br/>
                        <span className="font-semibold text-brand-primary">Why it matters:</span> "Java" in Finance implies <span className="italic">concurrency</span>, whereas in SaaS it implies <span className="italic">microservices</span>.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                        {domains.map((d, i) => (
                            <motion.div 
                                key={d.name}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-slate-100 hover:border-blue-100 cursor-default"
                            >
                                <d.icon size={18} className="text-slate-400 group-hover:text-brand-secondary transition-colors" />
                                <div>
                                    <div className="text-sm text-slate-700 font-bold leading-none">{d.name}</div>
                                    <div className="text-[10px] text-slate-400 font-medium mt-1 group-hover:text-brand-primary transition-colors">{d.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Seniority Calibration - Tier Cards */}
            <div>
                 <h3 className="text-2xl font-bold mb-6 text-slate-900">
                    Seniority Calibration
                </h3>
                <div className="flex items-end gap-3 h-40 pb-2">
                    {['Entry', 'Mid', 'Senior', 'Lead', 'C-Level'].map((level, i) => (
                        <motion.div
                            key={level}
                            className="flex-1 flex flex-col justify-end group cursor-pointer"
                            initial={{ height: "20%", opacity: 0 }}
                            whileInView={{ height: "100%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                             <div 
                                className="w-full bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md hover:border-brand-primary/50 transition-all flex flex-col items-center justify-end p-2 relative overflow-hidden"
                                style={{ height: `${(i + 2) * 20}%` }}
                             >
                                <div className={`absolute inset-0 bg-blue-${(i + 1) * 100}/10 group-hover:bg-brand-primary/5 transition-colors`}></div>
                                <span className="text-[10px] font-bold text-slate-400 mb-1 group-hover:text-brand-primary transition-colors">Lv {i + 1}</span>
                                <span className="text-xs font-bold text-slate-700 writing-mode-vertical group-hover:text-slate-900 z-10">{level}</span>
                             </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};