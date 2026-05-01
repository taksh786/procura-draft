import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="bg-obsidian text-alabaster py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-[-0.03em] mb-6 text-center max-w-2xl">
          See how the fastest growing companies manage procurement.
        </h2>
        
        <div className="w-full mt-12 relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald to-ochre opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
          
          <div className="relative aspect-[2.35/1] bg-[#0a0a0a] border border-alabaster/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Fake video thumbnail using css */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
            
            {/* Play Button */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-alabaster text-obsidian rounded-full flex items-center justify-center z-10 shadow-xl"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </motion.div>

            {/* Fake progress bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-alabaster/10 flex items-center justify-center backdrop-blur-sm">
                 <Play className="w-4 h-4 ml-0.5 text-alabaster" fill="currentColor" />
              </div>
              <div className="flex-1 h-1.5 bg-alabaster/20 rounded-full overflow-hidden">
                 <div className="w-1/3 h-full bg-emerald"></div>
              </div>
              <div className="text-xs font-mono text-alabaster/60">0:15 / 1:20</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
