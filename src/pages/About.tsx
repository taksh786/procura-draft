import { motion } from 'motion/react';
import { Target, Users, Zap, Globe2 } from 'lucide-react';
import { CircularTestimonials } from '../components/CircularTestimonials';

const leaders = [
  {
    name: "Geetanjali Bhattacharji",
    designation: "Founder and Consulting Director",
    quote: "An experienced leader with a deep understanding of global supply chains, dedicated to engineering the future of procurement through expert strategies and seamless execution.",
    src: "/regenerated_image_1777358219592.png"
  },
  {
    name: "Anil Nair",
    designation: "Founder and Chief Strategist",
    quote: "A visionary strategist focused on replacing legacy methodologies with high-performance, intelligent execution to eliminate friction and drive enterprise scaling.",
    src: "/Anil-Profile-BW.png"
  },
  {
    name: "Namita Shenoy",
    designation: "Director, Procurement",
    quote: "Expert in sustainable procurement and vendor management. Namita ensures our strategies support multi-currency and multi-region compliance seamlessly from day one.",
    src: "/Namita-Profile-BW.png"
  },
  {
    name: "Jeshika Shah",
    designation: "Manager, Content & Community",
    quote: "Driving the community engagement and setting the narrative around the procurement transformations, connecting enterprise clients with top-tier methodologies.",
    src: "/namita-content.png"
  }
];

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="max-w-4xl mb-24">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald mb-4 flex items-center gap-2">
           <span className="w-2 h-2 bg-emerald rounded-[2px] inline-block"></span>
           About Procura
        </div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-obsidian mb-8 leading-[1.05]"
        >
          We are engineering the future of global supply chains.
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-obsidian/60 max-w-2xl leading-relaxed"
        >
          Founded in 2023, Procura was built on a simple premise: enterprise procurement shouldn't be the bottleneck for modern companies. We are replacing decades-old legacy strategies with a modern, high-performance execution engine.
        </motion.p>
      </div>

      {/* Bento Grid - Mission & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
        
        {/* Mission Statement */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 bento-card dark p-10 flex flex-col justify-between overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[60px] rounded-full group-hover:bg-emerald/20 transition-colors duration-700 pointer-events-none" />
          <div className="relative z-10">
            <Target className="w-8 h-8 text-emerald mb-6" />
            <h3 className="font-heading text-3xl font-extrabold mb-4">Our Mission</h3>
            <p className="text-[15px] opacity-70 leading-relaxed max-w-md">
              To eliminate operational friction for scaling companies by providing the most intelligent, fast, and reliable consulting layer for procurement and vendor management.
            </p>
          </div>
        </motion.div>

        {/* Stat 1 */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card p-8 flex flex-col justify-end min-h-[240px]"
        >
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-obsidian/40 mb-auto">Volume Processed</div>
          <h3 className="font-heading text-5xl font-extrabold mb-2 text-obsidian">$12B+</h3>
          <p className="text-[13px] text-obsidian/60 font-semibold">Annual spend managed</p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card p-8 flex flex-col justify-end min-h-[240px]"
        >
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-obsidian/40 mb-auto">Active Suppliers</div>
          <h3 className="font-heading text-5xl font-extrabold mb-2 text-obsidian">45k+</h3>
          <p className="text-[13px] text-obsidian/60 font-semibold">Verified on the network</p>
        </motion.div>

      </div>

      {/* Values Section */}
      <div className="max-w-4xl mb-12">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-obsidian mb-4">Our Values</h2>
        <p className="text-lg text-obsidian/60">The principles that guide our product and our people.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: Zap, title: "Speed is a Feature", desc: "We prioritize performance in everything we do. Sub-second turnarounds aren't a luxury, they're a requirement." },
          { icon: Users, title: "Design for the Enterprise", desc: "Expert procurement strategies shouldn't require a 40-hour training course. We build streamlined experiences." },
          { icon: Globe2, title: "Global by Default", desc: "Supply chains span the world. Our methodology supports multi-currency, multi-region compliance from day one." }
        ].map((value, i) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bento-card p-8 group hover:border-emerald/50 transition-colors"
          >
            <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <value.icon className="w-6 h-6 text-emerald" />
            </div>
            <h3 className="font-heading text-xl font-extrabold mb-3">{value.title}</h3>
            <p className="text-[14px] text-obsidian/60 leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Leadership Section */}
      <div className="max-w-4xl mb-12">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-obsidian mb-4">Leadership</h2>
        <p className="text-lg text-obsidian/60">The team driving the future of procurement.</p>
      </div>

      <div className="flex justify-center">
        <CircularTestimonials 
          testimonials={leaders} 
          fontSizes={{
            name: "2rem",
            designation: "1.1rem",
            quote: "1.2rem"
          }}
          colors={{
            name: "var(--color-obsidian)",
            designation: "var(--color-emerald)",
            testimony: "var(--color-obsidian)",
            arrowBackground: "var(--color-obsidian)",
            arrowForeground: "white",
            arrowHoverBackground: "var(--color-emerald)"
          }}
        />
      </div>
    </main>
  );
}
