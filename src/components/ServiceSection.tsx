import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react"

export const ServiceSection = () => {
    const [previewStates, setPreviewStates] = useState<Record<number, boolean>>({});

    const togglePreview = (id: number) => {
        setPreviewStates(prev => ({ ...prev, [id]: !prev[id] }));
    }

    const sections = [
        {
            id: 1,
            title: "PROCUREMENT DESK",
            outcome: "Every rupee is traceable and optimized.",
            imageUrl: "https://cdn.cosmos.so/6c4a7829-d16a-4a58-9ab9-93fbb3bacb9e.?format=jpeg",
            reverse: false,
            content: ["Embedded procurement arm", "Rate cards", "Audits", "Vendor management"],
            type: "list"
        },
        {
            id: 2,
            title: "AGENCY PARTNERSHIPS",
            outcome: "Right partner, right price, right process, right outcome.",
            imageUrl: "https://cdn.cosmos.so/f827788c-038d-4257-8167-759e819f846d?format=jpeg",
            reverse: true,
            steps: ["Pre-Pitch", "At-Pitch", "Post-Pitch"],
            type: "steps"
        },
        {
            id: 3,
            title: "CONSULTING & SYNTHESIS",
            outcome: "One intelligent procurement engine.",
            imageUrl: "https://cdn.cosmos.so/20351bef-4a9c-4dcc-81d8-e59c84058944?format=jpeg",
            reverse: false,
            steps: ["Diagnose", "Design", "Deploy"],
            type: "steps"
        }
    ]

    const sectionRefs = sections.map(() => useRef<HTMLDivElement>(null));
    
    // Create individual hooks instead of mapping due to hook rules
    const targetRef1 = sectionRefs[0];
    const targetRef2 = sectionRefs[1];
    const targetRef3 = sectionRefs[2];

    const { scrollYProgress: p1 } = useScroll({ target: targetRef1, offset: ["start end", "center center"] });
    const { scrollYProgress: p2 } = useScroll({ target: targetRef2, offset: ["start end", "center center"] });
    const { scrollYProgress: p3 } = useScroll({ target: targetRef3, offset: ["start end", "center center"] });

    const scrollProgresses = [p1, p2, p3];

    const opacityContents = scrollProgresses.map(progress => 
        useTransform(progress, [0, 0.7], [0, 1])
    );
    
    const clipProgresses = scrollProgresses.map(progress => 
        useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    );
    
    const translateContents = scrollProgresses.map(progress => 
        useTransform(progress, [0, 1], [-50, 0])
    );

    const renderPreview = (section: any) => {
        if (section.type === "list") {
            return (
                <div className="w-full h-full flex flex-col justify-center gap-4">
                    {section.content.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="bg-emerald/20 text-emerald p-2 rounded-lg shrink-0">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <span className="font-extrabold text-white">{item}</span>
                        </div>
                    ))}
                </div>
            )
        } else if (section.type === "steps") {
            return (
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 md:gap-0">
                        {section.steps.map((step: string, i: number) => (
                            <React.Fragment key={i}>
                                <div className="flex flex-col items-center gap-4 z-10 shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-emerald text-obsidian flex items-center justify-center font-heading font-extrabold text-xl shadow-lg border-4 border-white/20">
                                        {i + 1}
                                    </div>
                                    <span className="font-extrabold text-xs md:text-sm uppercase tracking-wider text-center bg-white/10 px-4 py-2 rounded-full border border-white/10 text-white backdrop-blur-sm">{step}</span>
                                </div>
                                {i < section.steps.length - 1 && (
                                    <div className="hidden md:flex h-1 flex-1 bg-white/20 mx-[-1rem] z-0 relative items-center justify-center">
                                       <div className="w-full h-full bg-emerald/50" />
                                    </div>
                                )}
                                {i < section.steps.length - 1 && (
                                    <div className="md:hidden w-1 h-8 bg-white/20 relative flex items-center justify-center">
                                       <div className="w-full h-full bg-emerald/50" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )
        }
    }

    return (
        <section className="bg-transparent pb-16 overflow-hidden relative">
            <div className='min-h-[20vh] w-full flex flex-col items-center justify-center px-6 relative z-10 pt-16 pb-8'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <span className="bg-white border border-black/5 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-obsidian flex items-center gap-2 mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                        Our Services
                    </span>
                    <h2 className='text-5xl md:text-7xl max-w-4xl text-center font-heading font-extrabold text-obsidian leading-tight'>
                        Engineered for modern enterprise.
                    </h2>
                </motion.div>
                <p className='mt-12 flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-obsidian/40'>SCROLL <ArrowDown size={16} className="animate-bounce" /></p>
            </div>
            
            <div className="flex flex-col px-6 md:px-12 max-w-7xl mx-auto space-y-12 md:space-y-0">
                {sections.map((section, index) => (
                    <div 
                        key={section.id}
                        ref={sectionRefs[index]} 
                        className={`min-h-[40vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-8 md:py-16 ${section.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        <motion.div style={{ y: translateContents[index] }} className="flex-1 w-full text-center md:text-left">
                            <div className="text-emerald font-heading font-extrabold text-2xl mb-4">0{section.id}</div>
                            <h3 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-obsidian mb-8 leading-[1.1]">{section.title}</h3>
                            
                            <div className="text-xl md:text-2xl font-medium text-obsidian/60 leading-relaxed font-serif italic mb-8">
                                "{section.outcome}"
                            </div>

                            <button 
                                onClick={() => togglePreview(section.id)} 
                                className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-emerald hover:text-obsidian transition-colors"
                            >
                                {previewStates[section.id] ? 'Hide Preview' : 'Preview Service'} <ArrowRight className={`w-5 h-5 transition-transform ${previewStates[section.id] ? 'rotate-180' : ''}`} />
                            </button>
                        </motion.div>
                        
                        <motion.div 
                            style={{ 
                                opacity: opacityContents[index],
                                clipPath: clipProgresses[index],
                            }}
                            className="flex-1 w-full relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <AnimatePresence mode="wait">
                                {!previewStates[section.id] ? (
                                    <motion.img 
                                        key="image"
                                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.5 }}
                                        src={section.imageUrl} 
                                        className="absolute inset-0 w-full h-full object-cover" 
                                        alt={section.title}
                                    />
                                ) : (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 bg-obsidian text-white p-8 md:p-12"
                                    >
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald to-transparent pointer-events-none"></div>
                                        <div className="relative z-10 w-full h-full flex flex-col justify-center">
                                            {renderPreview(section)}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceSection;
