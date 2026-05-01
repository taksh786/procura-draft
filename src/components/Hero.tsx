import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />

      <div className="max-w-[600px] relative z-10 text-left">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-obsidian mb-4"
        >
          Procurement, engineered for modern enterprise.
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-obsidian/60 mb-6 max-w-[480px]"
        >
          Automate purchasing, manage vendors, and control spend with a single intelligent platform built for the next generation of scale.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-start gap-3"
        >
          <button className="bg-emerald text-obsidian px-7 py-3.5 rounded-lg text-sm font-extrabold uppercase transition-all hover:scale-[1.02]">
            Start Building
          </button>
          <button className="group flex items-center justify-center gap-2 bg-transparent text-obsidian border border-black/10 hover:border-obsidian px-7 py-3.5 rounded-lg text-sm font-semibold transition-all">
            <Play className="w-4 h-4 group-hover:text-emerald transition-colors" fill="currentColor" />
            Watch Product Tour
          </button>
        </motion.div>
      </div>

      <div className="mt-12 md:mt-0 text-left md:text-right">
        <div className="text-[11px] font-semibold opacity-40 uppercase mb-2 tracking-wider">Trusted By</div>
        <div className="flex gap-5 grayscale opacity-50 font-heading font-extrabold text-[18px]">
          <div>VENTURE</div>
          <div>QUANTUM</div>
          <div>LOGIC</div>
        </div>
      </div>
    </section>
  );
}
