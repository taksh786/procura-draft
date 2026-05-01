import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cases } from '../data/cases';

export default function WorkDetail() {
  const { id } = useParams();
  const caseStudy = cases.find(c => c.id === Number(id));

  if (!caseStudy) {
    return (
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen text-center">
        <h1 className="text-4xl font-extrabold mb-4">Case Study Not Found</h1>
        <Link to="/work" className="text-emerald hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Work
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-obsidian/60 hover:text-emerald font-extrabold text-sm uppercase tracking-widest mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-extrabold uppercase tracking-wider text-obsidian/40">{caseStudy.company}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-obsidian/20"></span>
            <span className="text-sm font-extrabold uppercase tracking-wider text-obsidian/40">{caseStudy.date}</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-obsidian mb-8 leading-[1.05]">
            {caseStudy.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="bg-white/80 border border-black/5 backdrop-blur px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-obsidian flex items-center gap-2 shadow-sm">
              <caseStudy.icon className="w-4 h-4 text-emerald" />
              {caseStudy.category}
            </span>
          </div>
        </header>
      </article>

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[70vh] mb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto h-full rounded-3xl overflow-hidden relative shadow-2xl">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={caseStudy.image} 
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6">
        {/* Content */}
        <div className="prose prose-lg prose-obsidian md:prose-xl max-w-none mb-16">
          <p className="text-2xl leading-relaxed font-medium text-obsidian/80 mb-12">
            {caseStudy.excerpt}
          </p>
          
          <div className="text-lg leading-relaxed text-obsidian/70 space-y-6">
            <p>
              {caseStudy.content}
            </p>
            <p>
              By leveraging our platform, {caseStudy.company} completely transformed their operational model. Automation removed manual bottlenecks, enabling their teams to focus on strategic growth rather than administrative overhead.
            </p>
            <h3 className="text-3xl font-heading font-extrabold text-obsidian mt-12 mb-6">The Challenge</h3>
            <p>
              Modern enterprises face increasing complexity in their supply chains, compliance requirements, and vendor management. The sheer volume of data often creates silos that obscure actionable insights. Prior to our deployment, {caseStudy.company} experienced this firsthand—relying on disconnected legacy systems that hindered agility.
            </p>
            <h3 className="text-3xl font-heading font-extrabold text-obsidian mt-12 mb-6">The Solution</h3>
            <p>
              We implemented a unified architecture that connects directly into their existing ERP systems. With automated workflows and real-time data ingestion, {caseStudy.company} gained a centralized command center. This proactive approach to data management sets a new benchmark for operational excellence in their industry.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-black/10 py-12 mb-16 bg-white/40 rounded-3xl p-8 backdrop-blur-sm">
          {caseStudy.metrics.map(metric => (
            <div key={metric.label}>
               <div className="font-heading text-5xl font-extrabold text-obsidian mb-3">
                 {metric.value}
               </div>
               <div className="text-xs font-extrabold text-obsidian/40 uppercase tracking-widest">
                 {metric.label}
               </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12 mb-12">
          <h2 className="font-heading text-4xl font-extrabold mb-6">Ready to scale like {caseStudy.company}?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center bg-obsidian text-white px-8 py-4 rounded font-extrabold hover:bg-emerald hover:text-obsidian transition-colors gap-2">
            Book a Demo <ArrowRight className="w-5 h-5" /> 
          </Link>
        </div>
      </article>
    </main>
  );
}
