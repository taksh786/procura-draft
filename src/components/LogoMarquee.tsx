import { Box, CircleDashed, Hexagon, Octagon, Triangle, Square } from 'lucide-react';

export default function LogoMarquee() {
  const logos = [
    { icon: Triangle, name: "Acme Corp" },
    { icon: Hexagon, name: "Globex" },
    { icon: CircleDashed, name: "Soylent" },
    { icon: Box, name: "Initech" },
    { icon: Octagon, name: "Umbrella" },
    { icon: Square, name: "Massive Dynamic" },
  ];

  return (
    <section className="py-20 bg-transparent border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center text-[11px] font-extrabold text-obsidian/40 uppercase tracking-widest">
        Trusted by forward-thinking supply chains
      </div>
      
      <div className="relative flex max-w-full overflow-hidden">
        <div className="flex w-max animate-[marquee_20s_linear_infinite]">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 mx-12 text-obsidian/30 hover:text-obsidian transition-colors grayscale duration-300">
               <logo.icon className="w-8 h-8" />
               <span className="font-heading font-extrabold text-2xl tracking-tighter uppercase">{logo.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-alabaster to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-alabaster to-transparent"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
