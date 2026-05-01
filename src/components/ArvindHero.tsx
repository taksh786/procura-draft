import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, BarChart2, ShieldCheck, DollarSign, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

export default function ArvindHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] pt-32 pb-20 mt-16 md:mt-24 overflow-hidden flex items-center font-sans border-b border-black/5"
    >

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        
        {/* Left Content (60%) */}
        <div className="lg:col-span-7 flex flex-col relative z-20">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[48px] sm:text-[64px] lg:text-[72px] leading-[1.05] text-[#1A1A1A] mb-8 tracking-tight"
          >
            Procurement{" "}
            <span className="text-[#00DF81] pr-2">Excellence</span>{" "}
            <br className="hidden md:block" />
            Delivered
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] sm:text-[20px] text-[#1A1A1A]/70 max-w-2xl leading-relaxed mb-12 font-light"
          >
            Uncover deep vendor intelligence, track budget utilization in real time, and optimize massive supply chains. Procura ensures global visibility with unmatched precision and expert methodology.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start border-t border-[#1A1A1A]/10 pt-8"
          >
            {[
              { label: "Total Budgeted", value: "$10.8", suffix: "M" },
              { label: "Actual Spend", value: "$8.92", suffix: "M" },
              { label: "Total Savings", value: "$2.27", suffix: "M", isHighlight: true },
              { label: "Projects Managed", value: "18", suffix: "" }
            ].map((stat, i) => (
              <div key={i} className={`relative ${i !== 0 ? 'md:before:content-[""] md:before:absolute md:before:-left-4 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-[#1A1A1A]/10' : ''}`}>
                <div className={`font-heading font-extrabold text-[32px] sm:text-[40px] leading-none mb-2 flex items-baseline gap-1 ${stat.isHighlight ? 'text-[#00DF81]' : 'text-[#1A1A1A]'}`}>
                  {stat.value}
                  {stat.suffix && <span className="text-[16px] font-sans font-medium text-[#1A1A1A]/50">{stat.suffix}</span>}
                </div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-[#1A1A1A]/50 w-3/4">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content (40%) - Dashboard Interface Illustration */}
        <div className="lg:col-span-5 relative h-[600px] w-full hidden lg:block perspective-1000" style={{ perspective: '1200px' }}>
          <motion.div 
            style={{ y: y1, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, rotateY: -15, rotateX: 10, z: -100 }}
            animate={{ opacity: 1, rotateY: -12, rotateX: 8, z: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="absolute inset-0 w-[550px] left-0 top-10 text-[#1A1A1A]"
          >
            {/* Main Window */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl border border-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.8)] overflow-hidden flex flex-col z-10">
              {/* Header */}
              <div className="h-16 border-b border-[#1A1A1A]/5 flex items-center px-6 justify-between bg-gradient-to-b from-white/80 to-white/30 backdrop-blur-md">
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/30 transition-colors" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/30 transition-colors" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#00DF81]/20 hover:bg-[#00DF81]/50 transition-colors" />
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A]/40">Analytics Overview</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-8 pb-12 flex-1 flex flex-col gap-8 relative bg-white/40">
                <div className="flex justify-between items-end mb-2">
                   <div>
                     <div className="text-[13px] font-semibold text-[#1A1A1A]/50 mb-1.5 uppercase tracking-wider">Total Procurement Spend</div>
                     <div className="font-heading font-extrabold text-5xl tracking-tight">$8.92M</div>
                   </div>
                   <div className="flex items-center gap-2 text-[#00DF81] bg-[#00DF81]/10 px-4 py-2 rounded-lg text-[13px] font-bold shadow-sm border border-[#00DF81]/10">
                     <TrendingUp className="w-4 h-4" />
                     18% under budget
                   </div>
                </div>

                {/* Main Line Chart (Mock) */}
                <div className="h-[180px] w-full relative -mx-2 px-2">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0,1,2,3,4].map(i => <div key={i} className="w-full h-[1px] bg-[#1A1A1A]/5" />)}
                  </div>
                  {/* Chart Line - SVG */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00DF81" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00DF81" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,85 Q15,80 25,60 T50,55 T75,30 T100,20" fill="url(#lineGrad)" />
                    <motion.path 
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                       d="M0,85 Q15,80 25,60 T50,55 T75,30 T100,20" 
                       fill="none" 
                       stroke="#00DF81" 
                       strokeWidth="3.5" 
                       strokeLinecap="round" 
                       className="drop-shadow-[0_8px_12px_rgba(0,223,129,0.3)]"
                    />
                    <motion.circle 
                       initial={{ scale: 0, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 2.7 }}
                       cx="100" cy="20" r="5" fill="white" stroke="#00DF81" strokeWidth="2.5" className="shadow-xl" 
                    />
                  </svg>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-5 mt-auto">
                   <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-5 shadow-sm">
                     <div className="flex items-center justify-between mb-4">
                       <BarChart2 className="w-5 h-5 text-[#1A1A1A]/40" />
                       <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/40">Categories</span>
                     </div>
                     <div className="space-y-3">
                       <div className="w-full bg-[#1A1A1A]/5 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ delay: 1, duration: 1 }} className="h-full bg-[#1A1A1A]" /></div>
                       <div className="w-full bg-[#1A1A1A]/5 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ delay: 1.1, duration: 1 }} className="h-full bg-[#1A1A1A]" /></div>
                       <div className="w-full bg-[#1A1A1A]/5 h-2 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '30%' }} transition={{ delay: 1.2, duration: 1 }} className="h-full bg-[#00DF81]" /></div>
                     </div>
                   </div>
                   <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                     <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 flex items-center justify-between">
                       Top Vendor <ShieldCheck className="w-4 h-4 text-emerald-500" />
                     </div>
                     <div className="font-bold text-[16px]">Acme Global Corp</div>
                     <div className="text-[13px] text-[#00DF81] font-bold flex items-center gap-1 mt-1 bg-[#00DF81]/10 self-start px-2 py-0.5 rounded-sm">
                       -12% YoY Spending
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Floating Top Card (Perspective translation) */}
            <motion.div 
              style={{ y: y2, z: 120 }}
              initial={{ opacity: 0, y: 50, z: 120 }}
              animate={{ opacity: 1, y: 0, z: 120 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-8 -right-16 w-72 bg-white/95 border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,1)] p-6 rounded-[20px] backdrop-blur-2xl z-20"
            >
              <div className="flex items-start gap-5">
                 <div className="w-12 h-12 rounded-[12px] bg-[#00DF81]/10 flex items-center justify-center shrink-0 shadow-inner">
                   <DollarSign className="w-6 h-6 text-[#00DF81]" />
                 </div>
                 <div>
                   <div className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-1.5">Contract Savings</div>
                   <div className="font-heading font-extrabold text-[28px] leading-none text-[#1A1A1A] mb-2">$450K</div>
                   <div className="text-[11px] text-[#00DF81] font-bold mt-1 flex items-center gap-1.5 bg-[#00DF81]/10 self-start px-2 py-1 rounded inline-flex">
                     <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                   </div>
                 </div>
              </div>
            </motion.div>

            {/* Floating Bottom Card */}
            <motion.div 
              style={{ z: 80 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -bottom-10 -left-12 w-[320px] bg-white/90 border border-white/50 shadow-[0_30px_60px_rgba(0,223,129,0.08),inset_0_0_0_1px_rgba(255,255,255,1)] p-5 rounded-[20px] backdrop-blur-xl z-20"
            >
              <div className="flex justify-between items-center mb-4 border-b border-[#1A1A1A]/10 pb-3">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Active Vendors</div>
                <div className="text-[10px] bg-[#1A1A1A]/5 px-2 py-1 rounded-full text-[#1A1A1A]/60 font-semibold">Live</div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Globex Dynamics", status: "Active", color: "bg-[#00DF81]" },
                  { name: "Apex Logistics", status: "Review", color: "bg-[#f59e0b]" },
                  { name: "Soylent Corp", status: "Active", color: "bg-[#00DF81]" },
                ].map((v, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-[#1A1A1A]/[0.02] -mx-2 px-2 py-1 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1A1A1A]/5 to-[#1A1A1A]/10 flex items-center justify-center text-[10px] font-bold text-[#1A1A1A]/70 shadow-inner">{v.name[0]}</div>
                      <div className="text-[13px] font-semibold text-[#1A1A1A] group-hover:text-[#00DF81] transition-colors">{v.name}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-[11px] font-medium text-[#1A1A1A]/40">{v.status}</div>
                      <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_${v.color === 'bg-[#00DF81]' ? 'rgba(0,223,129,0.5)' : 'rgba(245,158,11,0.5)'}] ${v.color}`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
