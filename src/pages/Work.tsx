import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, BarChart3, Globe2, ShieldCheck, Zap, X } from 'lucide-react';
import { cases } from '../data/cases';

export default function Work() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedCase = selectedId ? cases.find(c => c.id === selectedId) : null;

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedId]);

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald mb-4 flex items-center gap-2">
             <span className="w-2 h-2 bg-emerald rounded-[2px] inline-block"></span>
             Customer Stories
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight text-obsidian mb-6 leading-[1.05]">
            How the best teams scale with Procura.
          </h1>
          <p className="text-[16px] md:text-lg text-obsidian/60 max-w-xl">
            Explore how forward-thinking enterprises use our platform to automate purchasing, manage vendors, and control spend at global scale.
          </p>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {cases.map((cs) => (
            <motion.article 
              key={cs.id}
              layoutId={`card-${cs.id}`}
              onClick={() => setSelectedId(cs.id)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer bento-card p-3 flex flex-col h-full bg-white transition-shadow duration-500 hover:border-emerald hover:shadow-[0_8px_30px_rgb(0,223,129,0.12)]"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <motion.img 
                  layoutId={`image-${cs.id}`}
                  src={cs.image} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  alt={cs.title} 
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <motion.span layoutId={`badge-${cs.id}`} className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-[4px] text-[10px] font-extrabold uppercase tracking-widest text-obsidian flex items-center gap-1.5 shadow-sm">
                    <cs.icon className="w-3 h-3 text-emerald" />
                    {cs.category}
                  </motion.span>
                </div>

                {/* Arrow Icon Reveal */}
                <div className="absolute top-4 right-4 z-20 bg-emerald text-obsidian w-10 h-10 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              {/* Content Container */}
              <motion.div layoutId={`content-${cs.id}`} className="p-4 pt-0 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-obsidian/40">{cs.company}</span>
                  <span className="w-1 h-1 rounded-full bg-obsidian/20"></span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-obsidian/40">{cs.date}</span>
                </div>
                
                <motion.h2 layoutId={`title-${cs.id}`} className="font-heading text-3xl font-extrabold mb-3 group-hover:text-emerald transition-colors line-clamp-2">
                  {cs.title}
                </motion.h2>
                
                <motion.p layoutId={`excerpt-${cs.id}`} className="text-[14px] text-obsidian/60 mb-8 leading-relaxed line-clamp-2">
                  {cs.excerpt}
                </motion.p>

                {/* Metrics */}
                <div className="mt-auto grid grid-cols-2 gap-6 border-t border-black/5 pt-6">
                  {cs.metrics.map(metric => (
                    <div key={metric.label}>
                      <div className="font-heading text-3xl font-extrabold text-obsidian mb-1">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-extrabold text-obsidian/40 uppercase tracking-widest">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expanded Modal Preview */}
      <AnimatePresence>
        {selectedId && selectedCase && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[110] pointer-events-none p-4 md:p-12">
              <motion.article
                layoutId={`card-${selectedCase.id}`}
                className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl flex flex-col"
              >
                <div className="relative h-64 md:h-96 w-full shrink-0">
                  <motion.img
                    layoutId={`image-${selectedCase.id}`}
                    src={selectedCase.image}
                    className="w-full h-full object-cover"
                    alt={selectedCase.title}
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <motion.span layoutId={`badge-${selectedCase.id}`} className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-[4px] text-[10px] font-extrabold uppercase tracking-widest text-obsidian flex items-center gap-1.5 shadow-sm">
                      <selectedCase.icon className="w-3 h-3 text-emerald" />
                      {selectedCase.category}
                    </motion.span>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 z-20 bg-white/90 hover:bg-emerald transition-colors text-obsidian w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <motion.div layoutId={`content-${selectedCase.id}`} className="p-8 md:p-12 flex flex-col shrink-0">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm font-extrabold uppercase tracking-wider text-obsidian/40">{selectedCase.company}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-obsidian/20"></span>
                    <span className="text-sm font-extrabold uppercase tracking-wider text-obsidian/40">{selectedCase.date}</span>
                  </div>

                  <motion.h2 layoutId={`title-${selectedCase.id}`} className="font-heading text-4xl md:text-5xl font-extrabold mb-6">
                    {selectedCase.title}
                  </motion.h2>

                  <motion.p layoutId={`excerpt-${selectedCase.id}`} className="text-lg md:text-xl text-obsidian/70 mb-12 leading-relaxed">
                    {selectedCase.excerpt} Building upon this initial strategy, {selectedCase.company} deployed Procura's full suite of enterprise tools to ensure global compliance and accelerate team adoption. The outcome fundamentally reshaped their internal processes, introducing automated workflows that save thousands of hours annually.
                  </motion.p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-black/5 pt-8">
                    {selectedCase.metrics.map(metric => (
                      <div key={metric.label}>
                        <div className="font-heading text-4xl font-extrabold text-obsidian mb-2">
                          {metric.value}
                        </div>
                        <div className="text-xs font-extrabold text-obsidian/40 uppercase tracking-widest">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex justify-start">
                    <Link to={`/work/${selectedCase.id}`} className="bg-obsidian text-white px-8 py-4 rounded font-extrabold hover:bg-emerald hover:text-obsidian transition-colors flex items-center gap-2">
                      Read Full Case Study <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
