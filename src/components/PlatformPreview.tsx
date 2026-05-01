import { motion } from 'motion/react';

export default function PlatformPreview() {
  return (
    <section className="px-6 pb-32 relative flex justify-center z-20 mt-8 md:mt-12">
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-7xl rounded-xl border border-white/10 bg-obsidian text-alabaster shadow-2xl shadow-obsidian/20 overflow-hidden"
      >
        {/* Mockup Header */}
        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
          <div className="mx-auto bg-white/5 text-white/40 text-[11px] font-bold tracking-wider py-1 rounded px-24 font-sans hidden sm:block border border-white/10">
            app.procura.io/dashboard
          </div>
        </div>
        
        {/* Mockup Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 h-[500px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col gap-2 border-r border-white/10 pr-6">
            <div className="py-2.5 px-3 bg-emerald/10 rounded text-sm text-emerald font-semibold">Dashboard</div>
            <div className="py-2.5 px-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer font-semibold">Vendors</div>
            <div className="py-2.5 px-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer font-semibold">Purchase Orders</div>
            <div className="py-2.5 px-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer font-semibold">Invoices</div>
            <div className="py-2.5 px-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer font-semibold">Analytics</div>
          </div>
          
          {/* Main Content Pane */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-heading text-2xl font-extrabold mb-1">Spend Overview</h3>
                <p className="text-sm text-white/50">Your organization's purchasing activity this quarter.</p>
              </div>
              <button className="bg-emerald text-obsidian px-5 py-2.5 rounded text-xs font-extrabold uppercase tracking-wide">New Request</button>
            </div>
            
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Total Spend', val: '$2.4M', diff: '+12%', color: 'text-emerald' },
                { label: 'Pending POs', val: '42', diff: '-3', color: 'text-white/50' },
                { label: 'Active Vendors', val: '128', diff: '+5', color: 'text-white/50' }
              ].map((c, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-white/50 mb-3">{c.label}</div>
                  <div className="flex items-end justify-between">
                    <div className="font-heading text-3xl font-extrabold">{c.val}</div>
                    <div className={`text-xs font-bold ${c.color}`}>{c.diff}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fake Graph Area */}
            <div className="bg-white/5 border border-white/10 flex-1 rounded-lg p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-white/50">Spend by Category</div>
                <div className="flex items-end gap-3 h-40 mt-4 w-full">
                  {[40, 65, 45, 80, 50, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald/40 to-emerald opacity-80 rounded-t-sm relative z-10" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 pt-16 flex flex-col justify-between pb-4 pointer-events-none px-5">
                   <div className="w-full h-px bg-white/5"></div>
                   <div className="w-full h-px bg-white/5"></div>
                   <div className="w-full h-px bg-white/5"></div>
                   <div className="w-full h-px bg-white/5"></div>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
