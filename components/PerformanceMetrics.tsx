import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Recall@10', value: 100, color: '#2563EB' }, // Blue
  { name: 'Precision@5', value: 95, color: '#14B8A6' }, // Teal
  { name: 'Recall@5', value: 92, color: '#6366F1' }, // Indigo
];

export const PerformanceMetrics: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center p-8 bg-brand-bg relative">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Big Stats */}
        <div className="space-y-8">
            <motion.h2 
                className="text-4xl font-bold mb-8 text-slate-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                Performance Benchmarks
            </motion.h2>

            <div className="grid grid-cols-1 gap-6">
                <motion.div 
                    className="bg-white shadow-md p-6 rounded-xl border-l-8 border-brand-primary border border-slate-100"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-slate-500 text-sm mb-1 font-medium">Inference Latency</div>
                    <div className="text-5xl font-bold text-slate-900 flex items-baseline gap-2">
                        &lt; 50<span className="text-2xl text-slate-400">ms</span>
                    </div>
                </motion.div>

                <motion.div 
                    className="bg-white shadow-md p-6 rounded-xl border-l-8 border-brand-secondary border border-slate-100"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="text-slate-500 text-sm mb-1 font-medium">Assessment Coverage</div>
                    <div className="text-5xl font-bold text-slate-900 flex items-baseline gap-2">
                        1,500<span className="text-2xl text-slate-400">+</span>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Right: Chart */}
        <div className="h-[400px] w-full bg-white shadow-lg p-8 rounded-2xl relative border border-slate-100">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#64748b" width={100} tick={{fill: '#475569', fontSize: 14, fontWeight: 500}} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                        itemStyle={{ color: '#0f172a', fontWeight: 'bold' }}
                        cursor={{fill: '#f1f5f9'}}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
             </ResponsiveContainer>
             
             {/* Overlay Animation for filling bars */}
             <motion.div 
                className="absolute inset-0 bg-white/80"
                initial={{ width: "100%" }}
                whileInView={{ width: "0%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ direction: "rtl" }}
             />
        </div>

      </div>
    </section>
  );
};