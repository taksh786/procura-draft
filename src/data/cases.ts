import { Globe2, ShieldCheck, BarChart3, Zap } from 'lucide-react';

export const cases = [
  {
    id: 1,
    title: "Managing end-to-end marketing across legacy brands: Arrow, USPA, Tommy Hilfiger, Calvin Klein.",
    company: "Arvind Fashion",
    date: "March 2024",
    category: "Sourcing",
    image: "/arvind-fashion.jpg",
    excerpt: "Re-engineering the marketing P&L of a legacy fashion house",
    content: "Arvind Fashion required a comprehensive sourcing strategy to modernize their vendor network and deal with supply chain constraints. Facing fragmented vendor data and scattered procurement processes, they partnered with us to orchestrate a centralized sourcing system. By redesigning their vendor qualification frameworks and introducing intelligent rate cards, Arvind Fashion consolidated their vendor base and simplified their buying operations. The outcome transformed their sourcing engine, driving significant cost savings and establishing a robust production pipeline.",
    metrics: [{ label: "Sourcing Efficiency", value: "45%" }, { label: "Cost Savings", value: "20%" }],
    icon: Globe2
  },
  {
    id: 2,
    title: "Unlocked ₹30 crore in savings. 104% increase in digital audience reach.",
    company: "Tata EV",
    date: "January 2024",
    category: "Media",
    image: "/tata-ev.jpeg",
    excerpt: "Reinvigorating the brand into a marketing machine.",
    content: "As Tata EV prepared to scale rapidly, their media operations were hindered by outdated agency management workflows and inefficient media buying processes. Seeking a fundamental media transformation, they collaborated with us to reform their cross-channel media investments. We introduced rigorous outcome-based metrics, optimized their agency partnership lifecycle from pre-pitch to post-pitch, and established a performance-oriented media architecture. This strategic overhaul not only brought immediate transparency into their ad spend but also significantly increased the impact of their media campaigns.",
    metrics: [{ label: "Media ROI", value: "+35%" }, { label: "Campaign Speed", value: "2x" }],
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Archive savings of approx 30L product savings",
    company: "Levi's",
    date: "November 2023",
    category: "Audit",
    image: "/levis-jeans.jpg",
    excerpt: "Turned star power into a high-voltage campaign and production audit.",
    content: "Maintaining high compliance and quality standards across a global manufacturing footprint was a serious challenge for Levi's. Traditional auditing processes were manual, highly fragmented, and prone to delays. Partnering with us, Levi's initiated a global production audit overhaul, integrating automated workflows to continuously monitor vendor performance. Our audit methodology scrutinized existing rate cards, vendor compliance scores, and production timelines. As a result, Levi's successfully minimized non-compliance risks, improved product quality consistency, and fostered stronger relationships with their top-tier manufacturing partners.",
    metrics: [{ label: "Audit Coverage", value: "100%" }, { label: "Compliance", value: "+40%" }],
    icon: BarChart3
  },
  {
    id: 4,
    title: "~₹2Cr in savings in FY, 15% media partnership transformation.",
    company: "McDonald's",
    date: "August 2023",
    category: "Media",
    image: "/mcdonalds-india.jpg",
    excerpt: "Re-wired the world's leading QSR brand for innovation and scale.",
    content: "Managing a massive volume of localized and global media campaigns, McDonald's needed to streamline their agency negotiations and drive better financial outcomes. We engaged with McDonald's to redesign their media procurement strategies, replacing manual price battles with a disciplined, data-driven approach based on intelligent rate cards and competitive benchmarks. We managed their agency pitches and contract structuring, unlocking substantial value through systematic vendor management. The new negotiation framework not only drastically reduced media costs but also significantly reduced the timeline to launch new campaigns.",
    metrics: [{ label: "Cost Reduction", value: "18%" }, { label: "Turnaround Time", value: "-60%" }],
    icon: Zap
  }
];
