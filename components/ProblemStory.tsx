import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, ClipboardList, ArrowRight, Timer, UserX } from 'lucide-react';

export const ProblemStory: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Problem - The Manual Bottleneck */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Red glow behind */}
          <div className="absolute inset-0 bg-red-100/40 blur-3xl rounded-full"></div>
          
          <div className="relative bg-white p-8 rounded-3xl border border-red-100 shadow-xl shadow-red-900/5">
            <div className="flex items-center gap-3 mb-8 text-red-500">
              <div className="p-2 bg-red-50 rounded-lg">
                 <Timer className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">The Manual Bottleneck</h2>
            </div>
            
            <div className="relative space-y-8 pl-4">
              {/* Timeline Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 via-red-100 to-transparent"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 shrink-0 z-10 shadow-sm">
                    <ClipboardList size={16} strokeWidth={2.5} />
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 w-full transition-colors hover:border-slate-300">
                    <h3 className="text-slate-900 font-bold text-sm">Step 1: Manual Discovery</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">HR manually scrolls through checklists of 100+ assessment codes.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-white border-2 border-amber-200 flex items-center justify-center text-amber-500 shrink-0 z-10 shadow-sm">
                    <AlertTriangle size={16} strokeWidth={2.5} />
                </div>
                <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 w-full transition-colors hover:border-amber-200">
                    <h3 className="text-slate-900 font-bold text-sm">Step 2: Analysis Paralysis</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Confusion over variants: "Do we need Java v8 or v11? Entry or Senior?"</p>
                </div>
              </div>

               {/* Step 3 - Outcome */}
               <div className="relative flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-500 shrink-0 z-10 shadow-sm">
                    <Timer size={16} strokeWidth={2.5} />
                </div>
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 w-full hover:shadow-md transition-all">
                    <h3 className="text-red-700 font-bold text-sm">Step 3: Bad Hires & Lost Time</h3>
                    <p className="text-red-600/80 text-xs mt-1 leading-relaxed">Wrong tests sent. Hiring delayed by hours. Quality of hire drops.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                    <Clock size={16} />
                    <span className="font-mono font-bold">4h Avg. Delay</span>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Connector */}
        <div className="hidden lg:flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-4 rounded-full bg-white border border-brand-primary shadow-sm"
            >
                <ArrowRight className="w-8 h-8 text-brand-primary" />
            </motion.div>
        </div>

        {/* Right: Solution - Kept mostly same but ensuring visual consistency */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="absolute inset-0 bg-teal-100/40 blur-3xl rounded-full"></div>
           
           <div className="relative bg-white p-8 rounded-3xl border border-brand-secondary/30 shadow-xl shadow-teal-900/5">
            <div className="flex items-center gap-3 mb-8 text-brand-secondary">
              <div className="p-2 bg-teal-50 rounded-lg">
                <ClipboardList className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">AI Automation</h2>
            </div>

            <div className="space-y-4 relative overflow-hidden min-h-[280px] flex flex-col justify-center">
                {/* Animated List */}
               <motion.div 
                className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl border border-teal-100 shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
               >
                  <div className="w-10 h-10 rounded-lg bg-white border border-teal-200 flex items-center justify-center text-brand-secondary font-bold text-xs shadow-sm">
                    AI
                  </div>
                  <div className="flex-1">
                      <div className="text-slate-900 font-bold text-sm">Java Senior Dev Assessment</div>
                      <div className="text-xs text-brand-secondary mt-0.5 font-medium">Auto-Selected • 98% Match</div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
               </motion.div>

               <motion.div 
                className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl border border-teal-100 shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
               >
                  <div className="w-10 h-10 rounded-lg bg-white border border-teal-200 flex items-center justify-center text-brand-secondary font-bold text-xs shadow-sm">
                    AI
                  </div>
                  <div className="flex-1">
                      <div className="text-slate-900 font-bold text-sm">Microservices Architect Test</div>
                       <div className="text-xs text-brand-secondary mt-0.5 font-medium">Auto-Selected • 95% Match</div>
                  </div>
                   <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
               </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between text-sm text-slate-500">
              <span className="flex items-center gap-2 bg-teal-50 text-brand-secondary px-3 py-1.5 rounded-full border border-teal-100">
                 <Clock size={16} />
                 <span className="font-mono font-bold">2 Seconds</span>
              </span>
              <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-slate-600 font-medium">Verified Accuracy</span>
              </span>
            </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};