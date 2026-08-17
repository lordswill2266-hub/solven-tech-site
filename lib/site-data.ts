import {
  Bot,
  BrainCircuit,
  Building2,
  Cloud,
  Cpu,
  CreditCard,
  Database,
  Factory,
  FileCode2,
  Globe2,
  Landmark,
  Layers3,
  Lock,
  Network,
  ShieldCheck,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";

export const company = {
  name: "Solven Tech International Limited",
  shortName: "Solven Tech",
  tagline: "Technology Built Around Your Business.",
  description:
    "Solven Tech International Limited builds secure, scalable, and practical digital systems for businesses, communities, institutions, and emerging markets.",
  location: "ATC Jalingo, Taraba State, Nigeria",
  operations: "Online-first operations for current projects and partnerships",
  emailStatus: "Official domain email coming soon",
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xqevnwya",
};

export const services = [
  {
    slug: "software-development",
    title: "Software Development",
    summary:
      "Custom websites, business platforms, portals, and applications built with modern engineering practices.",
    icon: Layers3,
    outcomes: [
      "Responsive websites and web applications",
      "Internal business systems and dashboards",
      "Secure databases, APIs, and integrations",
      "Maintainable product foundations for growth",
    ],
    useCases: ["Company websites", "Client portals", "Admin dashboards", "Digital workflows"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    summary:
      "Practical AI workflows that reduce repetitive work, improve response speed, and support better decisions.",
    icon: Bot,
    outcomes: [
      "AI assistants for business operations",
      "Workflow automation and reporting",
      "Document, data, and customer-service automation",
      "Human-reviewed systems designed for reliability",
    ],
    useCases: ["Support automation", "Internal copilots", "Report generation", "Process routing"],
  },
  {
    slug: "fintech-solutions",
    title: "Fintech & Payments",
    summary:
      "Secure payment, wallet, transaction, and business finance platforms designed with compliance awareness.",
    icon: CreditCard,
    outcomes: [
      "Payment product architecture",
      "Wallet and ledger foundations",
      "Transaction monitoring interfaces",
      "Security-first financial workflows",
    ],
    useCases: ["Digital payments", "Merchant tools", "Trade settlement", "Finance dashboards"],
  },
  {
    slug: "digital-business-systems",
    title: "Digital Business Systems",
    summary:
      "Tools that connect operations, customers, teams, inventory, documents, and management reporting.",
    icon: Workflow,
    outcomes: [
      "Operations management systems",
      "CRM-style client records",
      "Inventory and order workflows",
      "Business reporting dashboards",
    ],
    useCases: ["Operations portals", "Record management", "Team workflows", "Business reporting"],
  },
  {
    slug: "iot-embedded-systems",
    title: "IoT & Embedded Systems",
    summary:
      "Connected devices, sensor systems, and embedded solutions for field operations and smart environments.",
    icon: Cpu,
    outcomes: [
      "Microcontroller-based prototypes",
      "Sensor integration and device logic",
      "IoT data collection workflows",
      "Hardware-software system planning",
    ],
    useCases: ["Smart devices", "Remote monitoring", "Agriculture systems", "Embedded prototypes"],
  },
  {
    slug: "cloud-web-platforms",
    title: "Cloud & Web Platforms",
    summary:
      "Cloud-ready web platforms structured for uptime, performance, security, and future integrations.",
    icon: Cloud,
    outcomes: [
      "Deployment-ready web systems",
      "Authentication and access planning",
      "Performance-focused architecture",
      "Scalable hosting preparation",
    ],
    useCases: ["SaaS platforms", "Partner portals", "Knowledge systems", "Public websites"],
  },
  {
    slug: "systems-integration",
    title: "Systems Integration",
    summary:
      "Connecting software, data sources, devices, and operational tools into practical end-to-end systems.",
    icon: Network,
    outcomes: [
      "API integration planning",
      "Data flow design",
      "Third-party service connections",
      "Operational reliability improvements",
    ],
    useCases: ["Payment integrations", "Device-to-cloud flows", "Data sync", "Business tool connections"],
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance Readiness",
    summary:
      "Security-minded design for authentication, data handling, permissions, auditability, and operational trust.",
    icon: ShieldCheck,
    outcomes: [
      "Security review and risk mapping",
      "Role-based access foundations",
      "Audit-friendly system design",
      "Data protection planning",
    ],
    useCases: ["Fintech products", "Government systems", "Enterprise portals", "Sensitive workflows"],
  },
  {
    slug: "mobile-first-experiences",
    title: "Mobile-First Experiences",
    summary:
      "Fast, accessible interfaces designed for customers and teams who operate primarily from mobile devices.",
    icon: Smartphone,
    outcomes: [
      "Responsive web interfaces",
      "Mobile-first workflow design",
      "Accessible forms and navigation",
      "Progressive product experiences",
    ],
    useCases: ["Customer portals", "Field operations", "Market tools", "Mobile commerce"],
  },
  {
    slug: "data-databases",
    title: "Data & Database Systems",
    summary:
      "Structured databases and reporting foundations that make business information easier to manage and use.",
    icon: Database,
    outcomes: [
      "Database schema design",
      "Data collection workflows",
      "Reporting views and dashboards",
      "Reliable information architecture",
    ],
    useCases: ["Business records", "Market data", "IoT readings", "Operational reports"],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Consulting",
    summary:
      "Practical guidance for organizations moving from manual processes to secure digital operations.",
    icon: BrainCircuit,
    outcomes: [
      "Technology roadmaps",
      "Process analysis",
      "Solution planning",
      "Phased implementation strategy",
    ],
    useCases: ["SME modernization", "Institutional systems", "Workflow upgrades", "Product planning"],
  },
  {
    slug: "technical-prototyping",
    title: "Technical Prototyping",
    summary:
      "Focused prototypes that help validate product ideas, device concepts, and investor-ready demonstrations.",
    icon: FileCode2,
    outcomes: [
      "MVP planning and development",
      "Interactive proof-of-concepts",
      "Prototype documentation",
      "Demo-ready product flows",
    ],
    useCases: ["Investor demos", "Pilot systems", "Product validation", "Hardware-software concepts"],
  },
];

export const industries = [
  { title: "Financial Services", icon: Landmark, text: "Secure payment, transaction, and finance operation systems." },
  { title: "Agriculture & Trade", icon: Factory, text: "Connected market, logistics, and field-data workflows." },
  { title: "Government & Institutions", icon: Building2, text: "Reliable portals, records, and digital public-service tools." },
  { title: "SMEs & Enterprises", icon: Globe2, text: "Business systems that simplify operations and improve visibility." },
  { title: "Education & Communities", icon: BrainCircuit, text: "Digital platforms for learning, coordination, and engagement." },
  { title: "Smart Devices", icon: Cpu, text: "IoT and embedded solutions for real-world environments." },
];

export const processSteps = [
  "Discovery & alignment",
  "Architecture & planning",
  "Design & development",
  "Testing & review",
  "Launch & improvement",
];

export const products = [
  {
    title: "Solven Pay",
    description: "A secure digital payment solution coming soon.",
  },
  {
    title: "Solven Trade",
    description: "A smart trading and business transaction platform coming soon.",
  },
];

export const projects = [
  {
    title: "Farm2Market IoT-Based Smart Farm-to-Market System",
    type: "Project Experience",
    text: "A smart agriculture and market-connectivity concept using IoT thinking to connect field data, business workflows, and market access.",
  },
  {
    title: "30W Audio Amplifier",
    type: "Engineering Project",
    text: "Hardware-focused project experience applying electrical and electronic engineering fundamentals to practical circuit design.",
  },
  {
    title: "Embedded Systems Projects",
    type: "Technical Experience",
    text: "Microcontroller-based design, sensor integration, and embedded logic for connected device concepts.",
  },
];

export const whySolven = [
  { title: "Security-first mindset", icon: Lock },
  { title: "Scalable systems", icon: Zap },
  { title: "Business-focused innovation", icon: Workflow },
  { title: "Emerging market understanding", icon: Globe2 },
  { title: "Trustworthy technology", icon: ShieldCheck },
];
