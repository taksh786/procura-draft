import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-header px-4 sm:px-6 py-3 flex items-center justify-between"
    >
      <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-[20px] sm:text-[22px] tracking-[-1px] uppercase cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-3 h-3 bg-emerald rounded-[2px]" />
        PROCURA
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold uppercase tracking-wider">
        <Link to="/" className="hover:text-emerald transition-colors">Home</Link>
        <Link to="/work" className="hover:text-emerald transition-colors relative">
          Work
          <span className="absolute -top-1 -right-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
          </span>
        </Link>
        <Link to="/about" className="hover:text-emerald transition-colors">About Us</Link>
      </nav>

      {/* Right Actions & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <Link to="/contact" className="hidden sm:inline-block bg-emerald hover:bg-[#00c974] text-obsidian px-5 py-2.5 rounded-lg text-[13px] tracking-wider uppercase font-extrabold transition-colors">
          Let's Talk
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-obsidian hover:bg-black/5 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 glass-card bg-white/95 backdrop-blur-2xl border border-black/10 shadow-2xl flex flex-col gap-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-[14px] font-semibold uppercase tracking-wider">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-emerald transition-colors">Home</Link>
              <Link to="/work" onClick={() => setIsOpen(false)} className="hover:text-emerald transition-colors relative inline-block w-max">
                Work
                <span className="absolute -top-1 -right-3 flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
                </span>
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-emerald transition-colors">About Us</Link>
            </nav>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-emerald hover:bg-[#00c974] text-obsidian px-5 py-3 rounded-lg text-[14px] text-center tracking-wider uppercase font-extrabold transition-colors">
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
