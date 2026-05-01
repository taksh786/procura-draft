import { Box, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent text-obsidian/70 py-20 px-6 font-sans border-t border-black/10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-black/10 pb-16">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 text-obsidian mb-6 font-heading font-extrabold text-[22px] tracking-[-1px] uppercase">
            <div className="w-3 h-3 bg-emerald rounded-[2px]" />
            PROCURA
          </div>
          <p className="max-w-xs text-[13px] mb-8 leading-relaxed opacity-80">
            Procurement, engineered for the modern enterprise. Scale your supply chain with confidence.
          </p>
          <div className="flex max-w-xs">
            <input 
              type="email" 
              placeholder="Subscribe to updates" 
              className="bg-white text-[13px] px-4 py-2.5 rounded-l-lg outline-none w-full border border-black/10 border-r-0 focus:border-emerald transition-colors"
            />
            <button className="bg-emerald text-obsidian px-5 py-2.5 rounded-r-lg hover:bg-[#00c974] transition-colors">
               <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-extrabold opacity-50 uppercase tracking-widest text-obsidian mb-6">Platform</h4>
          <ul className="space-y-4 text-[13px] font-semibold">
            <li><a href="#" className="hover:text-emerald transition-colors">Workflows</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Analytics</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Vendors</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-extrabold opacity-50 uppercase tracking-widest text-obsidian mb-6">Company</h4>
          <ul className="space-y-4 text-[13px] font-semibold">
            <li><a href="#" className="hover:text-emerald transition-colors">About</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Customers</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[10px] font-extrabold opacity-50 uppercase tracking-widest text-obsidian mb-6">Legal</h4>
          <ul className="space-y-4 text-[13px] font-semibold">
            <li><a href="#" className="hover:text-emerald transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald transition-colors">Security</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[12px] font-semibold">
         <div className="mb-4 sm:mb-0 opacity-60">&copy; {new Date().getFullYear()} Procura Technologies. All rights reserved.</div>
         <div className="flex gap-6 opacity-60">
            <a href="#" className="hover:text-obsidian hover:opacity-100 transition-colors">Twitter</a>
            <a href="#" className="hover:text-obsidian hover:opacity-100 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-obsidian hover:opacity-100 transition-colors">GitHub</a>
         </div>
      </div>
    </footer>
  );
}
