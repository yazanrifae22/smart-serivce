
import { 
  Stethoscope, 
  Building2, 
  Files, 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  CheckCircle2, 
  Briefcase,
  FileCheck,
  Globe,
  Landmark,
  Scale,
  Handshake,
  HeartPulse
} from 'lucide-react';

export const siteContent = {
  brandName: "Smart Service",
  tagline: "Documents Clearance Service",
  hero: {
    title: "Smart Service Transactions: Leading Medical & Corporate Licensing in the UAE",
    subtitle: "We provide comprehensive business and government services across the Emirates, specializing in the high-stakes healthcare sector. From clinic establishment to annual regulatory compliance, our team ensures every document is handled with precision and speed.",
    trustBadges: [
      { text: "7+ Years Market Leader", icon: Award },
      { text: "Medical Licensing Experts", icon: HeartPulse },
      { text: "Guaranteed Compliance", icon: ShieldCheck }
    ]
  },
  services: [
    {
      id: "healthcare",
      title: "Medical & Healthcare Licensing",
      description: "Navigating DHA, MOHAP, and HAAD/DoH regulations. We manage facility setup, professional licensing, and renewals for doctors and nurses.",
      icon: Stethoscope,
      href: "#healthcare"
    },
    {
      id: "formation",
      title: "Mainland & Freezone Formation",
      description: "Strategic advisory for business setup in Dubai and beyond. We handle legal structures, MOA drafting, and local sponsorship requirements.",
      icon: Building2,
      href: "#formation"
    },
    {
      id: "govt",
      title: "Complete Govt PRO Services",
      description: "Seamless processing of visas, Emirates IDs, labor cards, and immigration permits for your entire workforce and family.",
      icon: Files,
      href: "#govt"
    }
  ],
  healthcare: {
    intro: "Smart Service works closely with medical clinics and healthcare centers in Dubai to manage all licensing and regulatory requirements with clinical precision.",
    features: [
      "Initial DHA/MOH Approvals",
      "Medical Facility Design Consultation",
      "Equipment & Pharmacy Licensing",
      "Doctor/Nurse Professional Permits",
      "Clinical Waste Management Permits",
      "Insurance Company Empanelment"
    ],
    highlight: "Compliant Healthcare Facility Management."
  },
  annualContracts: {
    intro: "Our annual PRO contracts are the 'insurance policy' for your clinic's legal standing. We proactively manage your government-related procedures so your staff can focus on patients.",
    includes: [
      "Auto-renewal of Clinic Trade License",
      "Tracking of Doctor/Staff License Expiry",
      "MOHRE & Immigration File Maintenance",
      "Municipality & Civil Defense Approvals",
      "E-Channel & Establishment Card Renewals",
      "Medical Fitness & Emirates ID Processing"
    ],
    benefits: [
      { title: "Budget Predictability", desc: "One fixed annual fee. No hidden service charges.", icon: Scale },
      { title: "Priority Processing", desc: "Contract clients move to the front of the queue.", icon: Zap },
      { title: "Compliance Monitoring", desc: "We track deadlines so you never face late fines.", icon: Handshake },
      { title: "Expert Representation", desc: "Our PROs attend all government meetings for you.", icon: Briefcase }
    ],
    plans: [
      { name: "Essential", features: ["License Renewals", "Establishment Card", "Basic PRO Support"] },
      { name: "Professional", features: ["Essential + Staff Visas", "MOHRE Compliance", "Dedicated Account Manager"] },
      { name: "Enterprise", features: ["Full Turnkey Management", "Insurance Liason", "Unlimited Consultations"] }
    ]
  },
  companyFormation: {
    intro: "Setting up a business in the UAE doesn't have to be complex. We simplify the journey for investors and entrepreneurs from ideation to license issuance.",
    includes: [
      "Strategic Business Activity Advice",
      "Trade Name Registration & Approvals",
      "Notary Public & Legal Documentation",
      "Virtual Office & Physical Space Solutions",
      "Corporate Tax & VAT Registration",
      "Investor & Partner Visa Processing"
    ],
    timeline: [
      { step: "Discovery & Structure", desc: "We determine the best legal form (LLC, Sole, etc.) for your goals." },
      { step: "Security & Clearances", desc: "Initial approvals from DED and security authorities." },
      { step: "Legal Documentation", desc: "Drafting MOAs and signing at the Notary." },
      { step: "License Issuance", desc: "Physical or Digital Trade License delivery." },
      { step: "Operational Setup", desc: "Bank accounts, Labor files, and Visa quotas." }
    ],
    note: "One-stop solution for end-to-end UAE market entry."
  },
  govtServices: {
    intro: "Efficiency is our benchmark. We manage the heavy lifting of government documentation for companies of all sizes.",
    includes: [
      "New Employee Visa Processing",
      "Visa Cancellations & Status Adjustments",
      "Dependent & Domestic Worker Visas",
      "Establishment Card Modifications",
      "Court Agreements & Power of Attorney",
      "Legal Translation Services"
    ],
    sla: [
      { label: "Visa Turnaround", value: "3–5 Business Days" },
      { label: "License Renewal", value: "Instant (if eligible)" }
    ],
    footer: "Real-time updates provided via our client portal and dedicated WhatsApp support."
  },
  whyUs: {
    cards: [
      { title: "Deep Local Roots", desc: "Deep understanding of UAE bureaucracy and shifting laws.", icon: Landmark },
      { title: "Healthcare Focused", desc: "Unmatched expertise in DHA/MOH clinical standards.", icon: HeartPulse },
      { title: "Speed Matters", desc: "Accelerated processing through long-standing relations.", icon: Zap },
      { title: "Ethical Pricing", desc: "Fair, transparent pricing with no hidden surprises.", icon: Scale },
      { title: "Proactive Support", desc: "We call you before licenses expire, not after.", icon: Users }
    ],
    testimonials: [
      { name: "Dr. Laila Yousuf", role: "CEO, Harmony Dental Dubai", text: "Smart Service took the stress out of our clinic opening. Their knowledge of DHA regulations saved us months of delays." },
      { name: "Robert Sterling", role: "Managing Director, TechScale", text: "Best PRO team in the UAE. Efficient, reliable, and always reachable. A true business partner." },
      { name: "Suhail Ahmed", role: "Investor", text: "Setting up my mainland company was faster than I expected. They handled every signature and stamp." }
    ]
  },
  faqs: [
    { q: "Is 'Smart Service Transactions' an authorized provider?", a: "Yes, we are a fully licensed Documents Clearance and Government Services firm based in Dubai, authorized to represent clients across major authorities." },
    { q: "What is the typical cost for a Medical Clinic License?", a: "Costs vary based on the clinical specialty and size. We provide a detailed breakdown of health authority fees and our professional fees during consultation." },
    { q: "Can you help with company formation for non-residents?", a: "Absolutely. We specialize in helping international investors establish their presence in the UAE, including assisting with virtual offices and residency visas." },
    { q: "How do you track our license expirations?", a: "Our internal system logs every client's key dates. We reach out 60 days in advance to ensure renewals are processed without interruption." }
  ]
};

import { Zap } from 'lucide-react';
