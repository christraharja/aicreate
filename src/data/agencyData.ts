export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTag: string;
  tagline: string;
  description: string;
  whatWeOffer: string[];
  deliverables: string[];
  impactMetric: string;
  metricLabel: string;
  image: string;
  accentColor: string;
}

export const AGENCY_LOGO_URL = 'https://res.cloudinary.com/y3hgbjse/image/upload/f_auto,q_auto/Screen_Shot_2026-10-22_at_14.01.05';
export const AGENCY_NAME = 'AI Create';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'AI Web Design',
    shortTag: 'Conversion & UI/UX',
    tagline: 'High-converting, autonomous design systems engineered for sub-second performance and maximum conversion.',
    description: 'We blend modern aesthetic craft with generative design systems and conversion data. Every digital experience is custom-architected to captivate visitors, reduce bounce rates, and dynamically guide prospects toward checkout or consultation.',
    whatWeOffer: [
      'Custom headless web architecture built on modern React, Next.js, or Vite frameworks',
      'Dynamic AI-driven personalization adapting page messaging to visitor intent and referral source',
      'Continuous conversion rate optimization (CRO) powered by automated predictive layout testing',
      'Sub-second 99+ Google Lighthouse performance scoring and responsive mobile-first layouts',
      'Integrated brand identity design systems and interactive 3D/micro-interaction components'
    ],
    deliverables: [
      'Figma production design system & component tokens',
      'Production-ready code repository with CI/CD deployment',
      'CMS integration (Sanity, Strapi, or headless WordPress)',
      'Automated SEO meta hierarchy and schema.org integration'
    ],
    impactMetric: '+184%',
    metricLabel: 'Average visitor-to-lead conversion lift',
    image: '/src/assets/images/service_web_design_illust_1792653244609.jpg',
    accentColor: '#0B192C'
  },
  {
    id: 'lead-generation',
    number: '02',
    title: 'Predictive Lead Generation',
    shortTag: 'Outreach & Pipeline',
    tagline: 'Autonomous prospect research, intent signal mining, and hyper-personalized multi-channel sales pipelines.',
    description: 'Stop burning cash on generic cold outreach. Our AI agents continuously monitor verified buyer intent, enrich your Total Addressable Market (TAM), craft personalized value proposals, and deliver high-intent discovery calls directly into your sales calendar.',
    whatWeOffer: [
      'TAM enrichment and real-time intent signal tracking (hiring surges, funding, software stack changes)',
      'Autonomous multi-channel outreach engine across email, LinkedIn, and targeted digital touchpoints',
      'Context-aware AI copy generation that reads prospect recent articles, podcast mentions, and company news',
      'Deliverability engineering with dedicated warm domains, SPF/DKIM/DMARC hardening, and inbox rotation',
      'Automated qualification bot filtering out unqualified leads and booking directly into sales reps calendars'
    ],
    deliverables: [
      'Fully configured outbound automation infrastructure',
      'Enriched database of 5,000+ verified decision-makers per month',
      'Continuous A/B variant copy matrix & real-time response classifier',
      'CRM bidirectional sync with HubSpot, Salesforce, or Close'
    ],
    impactMetric: '3.4x',
    metricLabel: 'Qualified pipeline volume increase within 90 days',
    image: '/src/assets/images/service_lead_gen_illust_1792653244678.jpg',
    accentColor: '#0B192C'
  },
  {
    id: 'data-analysis',
    number: '03',
    title: 'Data Analysis & Insights',
    shortTag: 'Business Intelligence',
    tagline: 'Turning fragmented raw data into high-value executive intelligence, predictive forecasts, and revenue decisions.',
    description: 'Raw data is an untapped goldmine when synthesized correctly. We ingest your transaction records, customer activity, ad telemetry, and operational logs to build autonomous dashboards that surface hidden revenue leaks, forecast demand, and recommend tactical growth decisions.',
    whatWeOffer: [
      'Automated ingestion pipelines connecting disparate SQL databases, Stripe logs, Shopify stores, and CRMs',
      'Natural-language querying: Ask your business database questions in plain English and receive instant chart synthesis',
      'Predictive customer lifetime value (pLTV) and early churn warning algorithms',
      'Unit economics breakdown, cohort retention matrices, and channel attribution modeling',
      'Executive weekly automated briefing summaries highlighting anomalies and growth opportunities'
    ],
    deliverables: [
      'Interactive executive analytics portal with real-time refresh',
      'Predictive churn alert engine directly integrated into Slack/Email',
      'Cleaned data warehouse architecture (BigQuery, Snowflake, or PostgreSQL)',
      'Board-ready quarterly KPI deck automation'
    ],
    impactMetric: '$1.8M',
    metricLabel: 'Average identified revenue opportunities per client',
    image: '/src/assets/images/service_data_analysis_illust_1792653245175.jpg',
    accentColor: '#0B192C'
  },
  {
    id: 'customer-support-chatbot',
    number: '04',
    title: 'Customer Support Chatbot',
    shortTag: 'Autonomous Support',
    tagline: 'Custom RAG-powered 24/7 intelligent agents that resolve 80%+ of customer inquiries with zero latency.',
    description: 'Deliver instant, human-grade customer care across all timezones without scaling headcount. Our customer support bots are grounded directly in your internal knowledge base, API endpoints, and return policies, ensuring factual, empathetic, and compliant resolutions in 95+ languages.',
    whatWeOffer: [
      'Retrieval-Augmented Generation (RAG) architecture trained strictly on verified company documentation',
      'Zero hallucinations guarantee with citations and strict guardrails around corporate policies',
      'Direct transactional action execution: check order status, initiate refunds, reschedule appointments, reset credentials',
      'Omnichannel deployment across website widget, WhatsApp, Instagram DMs, Zendesk, and Intercom',
      'Seamless human-in-the-loop escalation with full sentiment analysis and conversation transcripts'
    ],
    deliverables: [
      'Tailored LLM knowledge vector base synced continuously with your help center',
      'Custom branded chat widget matching your agency or brand visual identity',
      'Agent analytics dashboard tracking deflection rate, CSAT, and resolution times',
      'Staff training documentation and fallback protocols'
    ],
    impactMetric: '91.4%',
    metricLabel: 'First-touch deflection rate with 4.9/5 CSAT satisfaction',
    image: '/src/assets/images/service_chatbot_illust_1792653245305.jpg',
    accentColor: '#0B192C'
  },
  {
    id: 'video-ads',
    number: '05',
    title: 'Short Form Video Ads',
    shortTag: 'High-Cadence Creative',
    tagline: 'High-converting viral video creative for TikTok, Meta Reels, and YouTube Shorts generated at 10x agency speed.',
    description: 'Winning in modern paid acquisition requires relentless creative testing. We utilize AI-assisted scriptwriting, neural voice synthesis, dynamic hook variations, and algorithmic trend analysis to produce dozens of performance-tested short form ads every single week.',
    whatWeOffer: [
      'Algorithmically optimized viral hook architecture designed for 3-second view-through retention',
      'AI UGC (User Generated Content) and dynamic avatar video production matching platform-native aesthetics',
      'Automated kinetic captions, trending sound synchronization, and visual pacing',
      'Systematic creative iteration: testing 20+ hook and CTA variants per core marketing angle',
      'Direct ad account integration with automated creative fatigue detection and reporting'
    ],
    deliverables: [
      '20 to 60 ready-to-run short-form vertical video assets (9:16) per month',
      'Complete raw script repository with hook and retention analytics',
      'Platform-compliant ad copy, captions, and hashtag strategies',
      'Weekly performance creative analysis and iteration sprints'
    ],
    impactMetric: '-44%',
    metricLabel: 'Reduction in Cost Per Customer Acquisition (CPA)',
    image: '/src/assets/images/service_video_ads_illust_1792653246543.jpg',
    accentColor: '#0B192C'
  }
];

export const PROOF_METRICS = [
  { value: '340%', label: 'Average Pipeline Lift', detail: 'Measured across client cohorts after 90 days of deployment' },
  { value: '91.4%', label: 'First-Touch Resolution', detail: 'Achieved by custom enterprise support agent implementations' },
  { value: '< 48 hrs', label: 'Production Turnaround', detail: 'From campaign brief to ready-to-launch video & ad creatives' },
  { value: '$42M+', label: 'Client Revenue Generated', detail: 'Verified bottom-line revenue attributed to our AI systems' }
];

export const CASE_STUDIES = [
  {
    client: 'Vanguard Logistics & Fleet',
    industry: 'Supply Chain & Transport',
    servicesUsed: ['Predictive Lead Generation', 'Data Analysis & Insights'],
    challenge: 'Struggled with an erratic 6-month sales cycle and fragmented telematics data spread across legacy ERP silos.',
    solution: 'Built an autonomous AI intent engine monitoring supply chain disruptions, coupled with executive predictive margin analytics.',
    result: '$4.2M new enterprise contract pipeline signed in 5 months; reduced fuel waste and routing overhead by 22%.',
    metric: '+280% pipeline',
    author: 'Marcus Vance, VP of Growth'
  },
  {
    client: 'Kroma Skincare & Beauty',
    industry: 'Direct-to-Consumer E-Commerce',
    servicesUsed: ['AI Web Design', 'Short Form Video Ads', 'Customer Support Chatbot'],
    challenge: 'High customer acquisition cost ($68 CPA) and customer support tickets overwhelming a 4-person team during seasonal drops.',
    solution: 'Redesigned headless storefront with dynamic product bundling, deployed 40 short-form video ad variants/month, and launched a 24/7 skin routine AI consultant.',
    result: 'CPA dropped from $68 to $34; customer support deflection reached 94% while maintaining 4.95/5 CSAT.',
    metric: '-50% CPA reduction',
    author: 'Elena Rostova, Chief Marketing Officer'
  },
  {
    client: 'FinPulse Financial OS',
    industry: 'B2B Fintech SaaS',
    servicesUsed: ['Customer Support Chatbot', 'Data Analysis & Insights'],
    challenge: 'Users faced high onboarding dropoff due to complex accounting configurations and required dedicated financial rep time.',
    solution: 'Engineered an in-app AI copilot that analyzes bank transaction anomalies in real time and answers complex tax categorization questions.',
    result: 'Onboarding completion jumped by 62%; customer churn dropped by 38% in the first two quarters.',
    metric: '+62% onboarding rate',
    author: 'David Chen, Co-Founder & CTO'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Strategic AI & Data Audit',
    description: 'We evaluate your current tech stack, sales pipelines, customer touchpoints, and raw data assets to pinpoint the highest-ROI AI leverage points.'
  },
  {
    step: '02',
    title: 'Custom Architecture & Prototyping',
    description: 'We build tailored models, conversion-driven web wireframes, automated outreach workflows, and creative ad scripts within 7 business days.'
  },
  {
    step: '03',
    title: 'Integration & Guardrail Hardening',
    description: 'We deploy into your live environments with bank-grade data encryption, zero-hallucination guardrails, and seamless CRM/analytics synchronization.'
  },
  {
    step: '04',
    title: 'Continuous Optimization & Scale',
    description: 'Our team monitors live performance weekly, retraining agents, testing new video ad angles, and refining conversion triggers to compound your ROI.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How does AI Create differ from traditional marketing and dev agencies?',
    answer: 'Traditional agencies bill you for hundreds of manual hours and take months to deliver static assets. At AI Create, we combine elite human creative direction with proprietary AI workflows—enabling us to build high-converting websites, generate 40+ video ads per month, analyze millions of data rows, and launch 24/7 autonomous support bots at 5x the speed and a fraction of the cost.'
  },
  {
    question: 'Is our proprietary business and customer data kept secure?',
    answer: 'Absolutely. We enforce strict enterprise privacy standards. Your data is never used to train public foundational models. All API integrations utilize private, SOC2-compliant endpoints with end-to-end encryption and custom role-based permissions.'
  },
  {
    question: 'How quickly can we see measurable results?',
    answer: 'Our deployment timeline is rapid. Most web design and customer support chatbot systems launch within 10 to 14 business days. Lead generation engines and short-form video ad campaigns typically start generating qualified leads and conversion metrics within the first 3 weeks of live deployment.'
  },
  {
    question: 'Can we hire AI Create for a single service or do we need the full stack?',
    answer: 'You can engage AI Create for any individual service—such as an autonomous customer support chatbot, performance video ads, or a web design overhaul. Many clients start with one critical priority and expand into our full AI growth retainer as they experience the returns.'
  },
  {
    question: 'How do you prevent AI chatbots from hallucinating or giving wrong advice?',
    answer: 'We utilize strict Retrieval-Augmented Generation (RAG) architecture paired with semantic boundary validation. The bot only answers using your verified documentation and product databases. If a query falls outside its authorized knowledge base, it gracefully escalates to a human agent.'
  }
];
