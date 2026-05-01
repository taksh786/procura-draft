import { motion } from 'motion/react';
import { GitMerge, BarChart3, Globe2 } from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section className="px-6 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-obsidian">The whole supply chain,<br/>optimized in one frame.</h2>
          <p className="text-obsidian/60 text-lg max-w-xl">Outdated procurement strategies slow you down. We bring expert consulting and modern methodologies to your supply chain, speeding up approvals and maximizing savings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Card 1: Automated Workflows (Spans 4 cols logic, 2 rows) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 bento-card p-8 flex flex-col justify-between group min-h-[380px] relative overflow-hidden"
          >
            <div className="relative z-10 w-full max-w-sm mb-12">
              <div className="text-[11px] font-extrabold uppercase mb-2 tracking-wider opacity-50">Expert Negotiations</div>
              <h3 className="font-heading text-3xl font-extrabold mb-2">Maximum Value</h3>
              <p className="text-[13px] opacity-60">Leverage our embedded procurement arm for intelligent rate cards, comprehensive audits, and robust vendor management.</p>
            </div>
            
            {/* Visual: Node Graph Fake element */}
            <div className="absolute right-[-10%] bottom-[-10%] w-2/3 h-2/3 bg-alabaster border border-obsidian/10 shadow-xl rounded-xl p-4 transform rotate-[-5deg] group-hover:rotate-0 group-hover:translate-y-[-10px] transition-all duration-500 flex flex-col gap-3">
               <div className="w-32 h-10 bg-emerald/10 border border-emerald rounded flex items-center justify-center text-xs font-semibold text-emerald">Purchase Req</div>
               <div className="w-px h-6 bg-obsidian/20 ml-16"></div>
               <div className="w-40 h-10 bg-alabaster border border-obsidian/10 rounded flex items-center px-3 gap-2">
                 <div className="w-4 h-4 rounded-full bg-ochre/20 flex items-center justify-center"><div className="w-2 h-2 bg-ochre rounded-full" /></div>
                 <div className="text-xs font-mono text-obsidian/60">Manager Approval</div>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Real-time Analytics */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bento-card p-8 flex flex-col group min-h-[380px] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-[11px] font-extrabold uppercase mb-2 tracking-wider opacity-50">Spend Analytics</div>
              <h3 className="font-heading text-4xl font-extrabold text-emerald mb-1">$4.2M</h3>
              <p className="text-[12px] opacity-60">Total Savings 2024</p>
            </div>
            
            <div className="mt-auto pt-8 flex items-end gap-2 h-32 transform group-hover:scale-105 transition-transform duration-500">
               {[20, 40, 30, 70, 50, 90, 60, 100].map((h, i) => (
                 <div key={i} className="flex-1 bg-obsidian/5 rounded-t-sm relative group-hover:bg-ochre/20 transition-colors">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className="absolute bottom-0 w-full bg-obsidian rounded-t-sm group-hover:bg-emerald transition-colors"
                    />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Card 3: Global Vendor Network */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 bento-card dark p-8 flex flex-col md:flex-row items-center gap-12 group min-h-[220px] relative overflow-hidden"
          >
            <div className="md:w-1/2 relative z-10">
              <div className="text-[11px] font-extrabold text-emerald uppercase mb-2 tracking-wider">Elite Network</div>
              <h3 className="font-heading text-3xl font-extrabold mb-3">Strategic Agency Partnerships</h3>
              <p className="opacity-60 text-[13px] max-w-md">Navigate pre-to-post pitch with our curated network of partners, ensuring optimal pricing and seamless execution.</p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,_var(--color-emerald)_0%,_transparent_70%)] opacity-10 blur-[40px]"></div>

            <div className="md:w-1/2 flex justify-center w-full relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian z-10 pointer-events-none" />
              <motion.div 
                animate={{ x: [-200, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity"
              >
                 {/* Fake vendor cards */}
                 {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="w-48 h-32 bg-white/5 border border-white/10 rounded-lg flex-shrink-0 flex flex-col items-center justify-center p-4">
                      <div className="text-[10px] font-extrabold opacity-50 uppercase mb-2 text-white/50">PERFORMANCE</div>
                      <div className="font-semibold text-sm">OPTIMIZED</div>
                    </div>
                 ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
