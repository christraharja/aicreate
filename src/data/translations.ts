export type Language = 'en' | 'id';

export interface LocalizedService {
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
}

export interface TranslationContent {
  nav: {
    services: string;
    demo: string;
    caseStudies: string;
    process: string;
    faq: string;
    ctaButton: string;
  };
  hero: {
    kicker: string;
    divisions: string;
    systems: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    guarantees: {
      zeroHallucinations: string;
      soc2: string;
      deployment: string;
    };
    metrics: Array<{
      value: string;
      label: string;
      detail: string;
    }>;
  };
  servicesSection: {
    kicker: string;
    capabilities: string;
    heading: string;
    subheading: string;
    autoPlay: string;
    pause: string;
    divisionLabel: string;
    whatWeOfferTitle: string;
    deliverablesLabel: string;
    selectInForm: string;
    workflowModel: string;
    services: LocalizedService[];
  };
  demoSection: {
    kicker: string;
    subkicker: string;
    heading: string;
    subheading: string;
    tabs: {
      chatbot: string;
      data: string;
      video: string;
      web: string;
      roi: string;
    };
    chatbot: {
      title: string;
      subtitle: string;
      reset: string;
      initialGreeting: string;
      samplePromptLabel: string;
      samples: string[];
      inputPlaceholder: string;
      sendButton: string;
      serviceNote: string;
      deployCta: string;
    };
    data: {
      title: string;
      subtitle: string;
      insightsTab: string;
      rawTab: string;
      churnLabel: string;
      churnDesc: string;
      revenueLabel: string;
      revenueDesc: string;
      cacLabel: string;
      cacDesc: string;
      recommendationTitle: string;
      recommendationBody: string;
      inquireCta: string;
    };
    video: {
      title: string;
      subtitle: string;
      storyboardLabel: string;
      visualPacing: string;
      audioTrack: string;
      benchmark: string;
      inquireCta: string;
      hooks: Array<{
        title: string;
        hookText: string;
        format: string;
        pacing: string;
        predictedRetention: string;
        suggestedAudio: string;
      }>;
    };
    web: {
      title: string;
      subtitle: string;
      legacyTitle: string;
      legacyDesc: string;
      aiTitle: string;
      aiDesc: string;
      lighthouseLabel: string;
      ttiLabel: string;
      inquireCta: string;
    };
    roi: {
      title: string;
      subtitle: string;
      trafficLabel: string;
      dealValueLabel: string;
      estimatedAnnualTitle: string;
      estimatedDetails: (leads: number, deals: number) => string;
      ctaButton: string;
    };
  };
  caseStudies: {
    kicker: string;
    subkicker: string;
    heading: string;
    subheading: string;
    challengeLabel: string;
    solutionLabel: string;
    studies: Array<{
      client: string;
      industry: string;
      metric: string;
      challenge: string;
      solution: string;
      result: string;
      author: string;
    }>;
  };
  process: {
    kicker: string;
    subkicker: string;
    heading: string;
    subheading: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
      phaseLabel: string;
    }>;
  };
  form: {
    kicker: string;
    subkicker: string;
    heading: string;
    subheading: string;
    step1Title: string;
    selectAll: string;
    deselectAll: string;
    step2Title: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    step3Title: string;
    budgetLabel: string;
    timelineLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    ndaBadge: string;
    proposalBadge: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successMessage: (name: string, company: string, email: string) => string;
    requestedCaps: string;
    estBudgetLabel: string;
    timelineText: string;
    anotherRequestButton: string;
    budgetOptions: Array<{ value: string; label: string }>;
    timelineOptions: Array<{ value: string; label: string }>;
    errors: {
      name: string;
      email: string;
      emailInvalid: string;
      company: string;
      services: string;
    };
  };
  faq: {
    kicker: string;
    subkicker: string;
    heading: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    tagline: string;
    locations: string;
    capabilitiesTitle: string;
    exploreTitle: string;
    contactTitle: string;
    retainerNote: string;
    ctaButton: string;
    copyright: string;
    soc2: string;
    gdpr: string;
    noTraining: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    nav: {
      services: 'Services',
      demo: 'Capabilities Demo',
      caseStudies: 'Case Studies',
      process: 'Process',
      faq: 'FAQ',
      ctaButton: 'Schedule Consultation',
    },
    hero: {
      kicker: 'AI Create Agency',
      divisions: '5 Specialized Intelligence Divisions',
      systems: 'Autonomous Commercial Systems',
      headline: 'We engineer intelligent AI systems that drive measurable commercial growth.',
      subheadline: 'A specialized agency delivering end-to-end AI infrastructure: high-converting web design, predictive outbound lead engines, raw data business intelligence, 24/7 customer support agents, and viral short-form video ads.',
      primaryCta: 'Request Free AI Growth Audit',
      secondaryCta: 'Explore 5 Capabilities',
      guarantees: {
        zeroHallucinations: 'Zero model hallucinations guarantee',
        soc2: 'Private SOC2-compliant data stack',
        deployment: '14-day production deployment',
      },
      metrics: [
        { value: '340%', label: 'Average Pipeline Lift', detail: 'Measured across client cohorts after 90 days of deployment' },
        { value: '91.4%', label: 'First-Touch Resolution', detail: 'Achieved by custom enterprise support agent implementations' },
        { value: '< 48 hrs', label: 'Production Turnaround', detail: 'From campaign brief to ready-to-launch video & ad creatives' },
        { value: '$42M+', label: 'Client Revenue Generated', detail: 'Verified bottom-line revenue attributed to our AI systems' },
      ],
    },
    servicesSection: {
      kicker: 'Interactive Service Catalogue',
      capabilities: '5 Specialized AI Capabilities',
      heading: 'Our 5 Core AI Services',
      subheading: 'Engineered to eliminate operational friction and scale commercial performance. Use the carousel below to explore each capability.',
      autoPlay: 'Auto-Play',
      pause: 'Pause',
      divisionLabel: 'AI Create Agency Division',
      whatWeOfferTitle: 'What We Can Offer',
      deliverablesLabel: 'Key Deliverables',
      selectInForm: 'Select in Intake Form',
      workflowModel: 'AI Workflow Model',
      services: [
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
        },
        {
          id: 'data-analysis',
          number: '03',
          title: 'Data Analysis & Insights',
          shortTag: 'Business Intelligence',
          tagline: 'Turning raw data into valuable business insights, executive forecasts, and high-margin revenue decisions.',
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
        },
      ],
    },
    demoSection: {
      kicker: 'Live Interactive Sandbox',
      subkicker: 'Test Real Agency Outputs',
      heading: 'Experience our AI capabilities in real time.',
      subheading: 'Interact with simulated outputs from each of our 5 divisions before scheduling your discovery call.',
      tabs: {
        chatbot: 'Support Chatbot',
        data: 'Data & Insights',
        video: 'Video Ad Hooks',
        web: 'Web Speed Benchmark',
        roi: 'Lead Gen ROI Calculator',
      },
      chatbot: {
        title: 'AI Create Enterprise Knowledge Agent',
        subtitle: 'RAG Grounded · Zero Hallucination Guardrail · 95+ Languages',
        reset: 'Reset Demo',
        initialGreeting: 'Hello! I am AI Create Assistant, trained on enterprise product documentation, pricing, and integrations. How can I assist you today?',
        samplePromptLabel: 'Sample Inquiries:',
        samples: [
          'How do you integrate with our existing PostgreSQL database?',
          'What is your typical turnaround for 30 short-form video ads?',
          'How do you prevent support bot hallucinations?'
        ],
        inputPlaceholder: 'Ask about our integrations, speed, guardrails, or services...',
        sendButton: 'Send',
        serviceNote: 'Included in Customer Support Chatbot service',
        deployCta: 'Deploy this for your business →',
      },
      data: {
        title: 'AI Synthesis Engine: Raw Logs vs Executive Action',
        subtitle: 'Showing real-time transformation of 45,000 fragmented transaction rows into high-margin directives.',
        insightsTab: 'AI Executive Insights',
        rawTab: 'Raw Data Sample',
        churnLabel: 'Predicted Q4 Churn Risk',
        churnDesc: 'Identified in accounts with > 3 open support tickets',
        revenueLabel: 'Hidden Revenue Opportunity',
        revenueDesc: 'Mid-market tier upgrade intent detected in 88 accounts',
        cacLabel: 'Channel CAC Discrepancy',
        cacDesc: 'Short-form video outperforms paid search by 2.4x margin',
        recommendationTitle: 'Autonomous Executive Recommendation',
        recommendationBody: 'Action Required: Reallocate 35% of underperforming paid search ad spend toward vertical short-form creative angles. Automatically trigger personalized VIP retention emails for 42 accounts approaching 90-day renewal cycle with unresolved tickets to protect $680,000 ARR.',
        inquireCta: 'Inquire about Data Intelligence →',
      },
      video: {
        title: 'AI Short Form Video Creative Engine',
        subtitle: 'We generate dozens of viral hook angles and 9:16 vertical video assets per week to drive down ad acquisition costs.',
        storyboardLabel: 'Production Storyboard',
        visualPacing: 'Visual Pacing',
        audioTrack: 'Audio Track',
        benchmark: 'Benchmark',
        inquireCta: 'Order Video Ad Sprints →',
        hooks: [
          {
            title: 'Hook A: Pain Point Aggravation',
            hookText: '"Stop paying $8,000/month for an agency that only sends you PDF reports once a month..."',
            format: 'Meta Reels & TikTok (9:16)',
            pacing: '1.4s visual cut frequency',
            predictedRetention: '84.2% through 3s mark',
            suggestedAudio: 'Trending tech sync bassline'
          },
          {
            title: 'Hook B: Counter-Intuitive Truth',
            hookText: '"The reason your customer support costs doubled isn’t your ticket volume—it’s your 48-hour response lag..."',
            format: 'YouTube Shorts (9:16)',
            pacing: '1.2s kinetic typography & zoom',
            predictedRetention: '79.6% through 3s mark',
            suggestedAudio: 'Crisp editorial ambient synth'
          },
          {
            title: 'Hook C: Concrete Transformation Proof',
            hookText: '"Here is how an e-commerce brand generated $420k in pipeline with zero cold emails..."',
            format: 'TikTok & LinkedIn Video (9:16)',
            pacing: 'Live split-screen terminal proof',
            predictedRetention: '88.1% through 3s mark',
            suggestedAudio: 'Subtle high-energy lo-fi beat'
          }
        ],
      },
      web: {
        title: 'AI Headless Web Design vs Traditional Legacy CMS',
        subtitle: 'Every 100ms of latency reduction generates a measurable 1% lift in conversion rates.',
        legacyTitle: 'Traditional Legacy Agency Build',
        legacyDesc: 'Bloated plugin stacks, sluggish server response, and static un-personalized layouts.',
        aiTitle: 'AI Create Autonomous Web Architecture',
        aiDesc: 'Static edge caching, sub-second hydration, dynamic intent personalization, and automated CRO test matrix.',
        lighthouseLabel: 'Lighthouse Performance',
        ttiLabel: 'Time to Interactive (TTI)',
        inquireCta: 'Inquire about Web Redesign →',
      },
      roi: {
        title: 'Predictive Outbound & Pipeline ROI Calculator',
        subtitle: 'Simulate potential revenue returns from our automated AI lead generation pipeline engine.',
        trafficLabel: 'Target Monthly TAM / Inbound Traffic',
        dealValueLabel: 'Average Customer Contract Value',
        estimatedAnnualTitle: 'Estimated Annualized Pipeline',
        estimatedDetails: (leads, deals) => `Estimated based on ${leads} AI-qualified leads and ${deals} closed contracts/mo.`,
        ctaButton: 'Deploy Lead Generation Pipeline',
      },
    },
    caseStudies: {
      kicker: 'Verified Results',
      subkicker: 'Commercial Case Studies',
      heading: 'Measurable pipeline, lower acquisition costs, and verified efficiency.',
      subheading: 'Real enterprise and DTC brands powered by our autonomous AI infrastructure.',
      challengeLabel: 'The Challenge:',
      solutionLabel: 'The AI Solution:',
      studies: [
        {
          client: 'Vanguard Logistics & Fleet',
          industry: 'Supply Chain & Transport',
          metric: '+280% pipeline',
          challenge: 'Struggled with an erratic 6-month sales cycle and fragmented telematics data spread across legacy ERP silos.',
          solution: 'Built an autonomous AI intent engine monitoring supply chain disruptions, coupled with executive predictive margin analytics.',
          result: '$4.2M new enterprise contract pipeline signed in 5 months; reduced fuel waste and routing overhead by 22%.',
          author: 'Marcus Vance, VP of Growth',
        },
        {
          client: 'Kroma Skincare & Beauty',
          industry: 'Direct-to-Consumer E-Commerce',
          metric: '-50% CPA reduction',
          challenge: 'High customer acquisition cost ($68 CPA) and customer support tickets overwhelming a 4-person team during seasonal drops.',
          solution: 'Redesigned headless storefront with dynamic product bundling, deployed 40 short-form video ad variants/month, and launched a 24/7 skin routine AI consultant.',
          result: 'CPA dropped from $68 to $34; customer support deflection reached 94% while maintaining 4.95/5 CSAT.',
          author: 'Elena Rostova, Chief Marketing Officer',
        },
        {
          client: 'FinPulse Financial OS',
          industry: 'B2B Fintech SaaS',
          metric: '+62% onboarding rate',
          challenge: 'Users faced high onboarding dropoff due to complex accounting configurations and required dedicated financial rep time.',
          solution: 'Engineered an in-app AI copilot that analyzes bank transaction anomalies in real time and answers complex tax categorization questions.',
          result: 'Onboarding completion jumped by 62%; customer churn dropped by 38% in the first two quarters.',
          author: 'David Chen, Co-Founder & CTO',
        },
      ],
    },
    process: {
      kicker: 'Engineering Discipline',
      subkicker: 'How We Work',
      heading: 'From initial telemetry audit to autonomous production scale in weeks.',
      subheading: 'Our systematic 4-phase deployment model guarantees alignment, security, and continuous commercial compounding.',
      steps: [
        {
          step: '01',
          title: 'Strategic AI & Data Audit',
          description: 'We evaluate your current tech stack, sales pipelines, customer touchpoints, and raw data assets to pinpoint the highest-ROI AI leverage points.',
          phaseLabel: 'Phase 01 · Production Grade',
        },
        {
          step: '02',
          title: 'Custom Architecture & Prototyping',
          description: 'We build tailored models, conversion-driven web wireframes, automated outreach workflows, and creative ad scripts within 7 business days.',
          phaseLabel: 'Phase 02 · Production Grade',
        },
        {
          step: '03',
          title: 'Integration & Guardrail Hardening',
          description: 'We deploy into your live environments with bank-grade data encryption, zero-hallucination guardrails, and seamless CRM/analytics synchronization.',
          phaseLabel: 'Phase 03 · Production Grade',
        },
        {
          step: '04',
          title: 'Continuous Optimization & Scale',
          description: 'Our team monitors live performance weekly, retraining agents, testing new video ad angles, and refining conversion triggers to compound your ROI.',
          phaseLabel: 'Phase 04 · Production Grade',
        },
      ],
    },
    form: {
      kicker: 'Direct Client Intake',
      subkicker: '24-Hour Review Guaranteed',
      heading: 'Tell us about your project and commercial goals.',
      subheading: 'Select the AI capabilities your business requires. Our principal engineers will review your requirements and formulate a custom architecture proposal.',
      step1Title: '1. Which AI Services Are You Interested In? *',
      selectAll: 'Select All 5 Capabilities',
      deselectAll: 'Deselect All',
      step2Title: '2. Contact & Company Details',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Sarah Jenkins',
      emailLabel: 'Work Email *',
      emailPlaceholder: 'sarah@company.com',
      companyLabel: 'Company Name *',
      companyPlaceholder: 'Acme Corp',
      websiteLabel: 'Company Website / URL',
      websitePlaceholder: 'https://company.com',
      step3Title: '3. Project Scope & Investment',
      budgetLabel: 'Estimated Monthly Budget',
      timelineLabel: 'Deployment Timeline',
      notesLabel: 'Specific Objectives & Current Bottlenecks (Optional)',
      notesPlaceholder: 'Share details regarding your current systems, customer support volume, lead acquisition targets, or desired timeline...',
      ndaBadge: 'Strict NDA protected',
      proposalBadge: 'Proposal within 24h',
      submitButton: 'Submit Consultation Request',
      submittingButton: 'Securing Transmission...',
      successTitle: 'Inquiry Successfully Received',
      successMessage: (name, company, email) => `Thank you, ${name}. We have logged your request for ${company}. A partner from our technical team will reach out at ${email} within 24 business hours with an initial scope audit.`,
      requestedCaps: 'Requested AI Capabilities:',
      estBudgetLabel: 'Estimated Budget:',
      timelineText: 'Timeline:',
      anotherRequestButton: 'Submit Another Request',
      budgetOptions: [
        { value: '$3,000 - $5,000', label: '$3,000 - $5,000 / month (Pilot)' },
        { value: '$5,000 - $15,000', label: '$5,000 - $15,000 / month (Growth)' },
        { value: '$15,000 - $30,000', label: '$15,000 - $30,000 / month (Scale)' },
        { value: '$30,000+', label: '$30,000+ / month (Enterprise Retainer)' },
      ],
      timelineOptions: [
        { value: 'Immediate (< 2 weeks)', label: 'Immediate (< 2 weeks)' },
        { value: 'Within 30 days', label: 'Within 30 days' },
        { value: 'Next quarter (1-3 months)', label: 'Next quarter (1-3 months)' },
        { value: 'Researching options', label: 'Exploring & researching options' },
      ],
      errors: {
        name: 'Full name is required',
        email: 'Business email is required',
        emailInvalid: 'Please provide a valid email address',
        company: 'Company name is required',
        services: 'Please select at least one service of interest',
      },
    },
    faq: {
      kicker: 'Direct Answers',
      subkicker: 'Frequently Asked Questions',
      heading: 'Everything you need to know about working with AI Create.',
      items: [
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
      ],
    },
    footer: {
      tagline: 'Engineering autonomous AI systems for enterprise performance: web design, predictive outbound pipelines, data analysis, customer support agents, and short-form video ads.',
      locations: 'San Francisco · London · Singapore · Jakarta',
      capabilitiesTitle: 'AI Capabilities',
      exploreTitle: 'Explore',
      contactTitle: 'Direct Contact',
      retainerNote: 'Open for high-growth brand retainers and enterprise deployment pilots.',
      ctaButton: 'Schedule Consultation',
      copyright: 'AI Create Agency. All rights reserved.',
      soc2: 'SOC2 Type II Certified',
      gdpr: 'GDPR & CCPA Compliant',
      noTraining: 'Zero Data Model Ingestion',
    },
  },
  id: {
    nav: {
      services: 'Layanan',
      demo: 'Demo Interaktif',
      caseStudies: 'Studi Kasus',
      process: 'Proses Kerja',
      faq: 'FAQ',
      ctaButton: 'Jadwalkan Konsultasi',
    },
    hero: {
      kicker: 'Agensi AI Create',
      divisions: '5 Divisi Intelijen Spesialis',
      systems: 'Sistem Komersial Otonom',
      headline: 'Kami merancang sistem AI cerdas yang mendorong pertumbuhan bisnis terukur.',
      subheadline: 'Agensi spesialis yang menyediakan infrastruktur AI terintegrasi: desain web konversi tinggi, mesin pencari prospek (lead generation) prediktif, analisis data bisnis, chatbot dukungan pelanggan 24/7, dan iklan video pendek viral.',
      primaryCta: 'Minta Audit Pertumbuhan AI Gratis',
      secondaryCta: 'Pelajari 5 Layanan Utama',
      guarantees: {
        zeroHallucinations: 'Garansi bebas halusinasi model',
        soc2: 'Infrastruktur privat standar SOC2',
        deployment: 'Implementasi produksi dalam 14 hari',
      },
      metrics: [
        { value: '340%', label: 'Rata-rata Peningkatan Prospek', detail: 'Diukur dari kohort klien setelah 90 hari implementasi' },
        { value: '91.4%', label: 'Resolusi Tiket Pertama', detail: 'Dicapai oleh agen dukungan pelanggan AI kustom' },
        { value: '< 48 jam', label: 'Waktu Produksi Kreatif', detail: 'Dari pengarahan kampanye hingga materi iklan video siap tayang' },
        { value: '$42M+', label: 'Pendapatan Klien Terverifikasi', detail: 'Hasil pendapatan bersih yang dihasilkan dari sistem AI kami' },
      ],
    },
    servicesSection: {
      kicker: 'Katalog Layanan Interaktif',
      capabilities: '5 Kemampuan AI Spesialis',
      heading: '5 Layanan Utama AI Kami',
      subheading: 'Dirancang untuk memangkas hambatan operasional dan melipatgandakan profitabilitas bisnis. Gunakan korsel di bawah untuk mengeksplorasi setiap layanan.',
      autoPlay: 'Putar Otomatis',
      pause: 'Jeda',
      divisionLabel: 'Divisi Agensi AI Create',
      whatWeOfferTitle: 'Apa yang Dapat Kami Tawarkan',
      deliverablesLabel: 'Hasil yang Diterima',
      selectInForm: 'Pilih di Formulir Konsultasi',
      workflowModel: 'Model Alur Kerja AI',
      services: [
        {
          id: 'web-design',
          number: '01',
          title: 'Desain Web AI',
          shortTag: 'Konversi & UI/UX',
          tagline: 'Sistem desain otonom berkonversi tinggi yang dioptimalkan untuk kecepatan kilat dan penjualan maksimal.',
          description: 'Kami memadukan estetika modern dengan kecerdasan generatif dan data konversi. Setiap website dirancang secara khusus untuk memikat pengunjung, menekan bounce rate, dan membimbing calon pelanggan langsung menuju pembelian atau konsultasi.',
          whatWeOffer: [
            'Arsitektur web headless kustom menggunakan React, Next.js, atau Vite modern',
            'Personalisasi konten cerdas berbasis AI sesuai niat pencarian dan asal pengunjung',
            'Optimasi tingkat konversi (CRO) berkelanjutan dengan pengujian tata letak prediktif',
            'Kecepatan kilat dengan skor Google Lighthouse 99+ dan desain responsif mobile-first',
            'Sistem desain identitas merek lengkap dengan komponen interaktif modern'
          ],
          deliverables: [
            'Design system Figma produksi & token komponen lengkap',
            'Repositori kode siap rilis dengan alur CI/CD otomatis',
            'Integrasi CMS headless (Sanity, Strapi, atau WordPress Headless)',
            'Struktur SEO meta otomatis dan integrasi schema.org'
          ],
          impactMetric: '+184%',
          metricLabel: 'Rata-rata lonjakan konversi pengunjung ke prospek',
          image: '/src/assets/images/service_web_design_illust_1792653244609.jpg',
        },
        {
          id: 'lead-generation',
          number: '02',
          title: 'Lead Generation Prediktif',
          shortTag: 'Prospek & Penjualan',
          tagline: 'Riset prospek otomatis, penambangan sinyal minat beli, dan pipeline penjualan multisaluran yang dipersonalisasi.',
          description: 'Hentikan pemborosan biaya pada cold outreach manual. Agen AI kami secara otomatis melacak minat beli nyata, memperkaya data pasar sasaran (TAM), merancang penawaran bernilai tinggi yang dipersonalisasi, dan langsung menjadwalkan panggilan konsultasi ke kalender tim penjualan Anda.',
          whatWeOffer: [
            'Pengayaan pasar sasaran (TAM) dan pelacakan sinyal minat (perekrutan, pendanaan, perubahan teknologi)',
            'Mesin outreach multisaluran otomatis melalui email, LinkedIn, dan titik sentuh digital terarah',
            'Pembuatan naskah email AI berbasis konteks yang menganalisis artikel dan berita terbaru calon klien',
            'Optimasi reputasi pengiriman email dengan domain hangat khusus, SPF/DKIM/DMARC terverifikasi',
            'Bot kualifikasi otomatis yang memfilter prospek berkualitas dan menjadwalkannya langsung ke kalender tim'
          ],
          deliverables: [
            'Infrastruktur otomatisasi outreach outbound siap pakai',
            'Basis data 5.000+ pengambil keputusan terverifikasi setiap bulan',
            'Matriks variasi salinan A/B testing berkelanjutan & pengklasifikasi respon',
            'Sinkronisasi dua arah ke CRM seperti HubSpot, Salesforce, atau Zoho'
          ],
          impactMetric: '3.4x',
          metricLabel: 'Peningkatan volume prospek berkualitas dalam 90 hari',
          image: '/src/assets/images/service_lead_gen_illust_1792653244678.jpg',
        },
        {
          id: 'data-analysis',
          number: '03',
          title: 'Analisis Data & Wawasan Bisnis',
          shortTag: 'Business Intelligence',
          tagline: 'Mengubah data mentah menjadi wawasan bisnis berharga, prakiraan strategis, dan keputusan profit tinggi.',
          description: 'Data mentah adalah aset berharga jika diproses dengan tepat. Kami menghubungkan catatan transaksi, log operasional, data iklan, dan analitik toko Anda untuk membangun dasbor cerdas yang mengungkap kebocoran margin, memprediksi permintaan, dan memberi rekomendasi keputusan taktis.',
          whatWeOffer: [
            'Saluran data otomatis yang menghubungkan database SQL, log transaksi Stripe, toko online, dan CRM',
            'Pencarian data bahasa alami: Ajukan pertanyaan bisnis dalam bahasa Indonesia/Inggris dan dapatkan grafik instan',
            'Prediksi Customer Lifetime Value (pLTV) dan algoritma peringatan dini retensi pelanggan (churn)',
            'Analisis unit ekonomi, matriks kohort retensi, dan model atribusi efisiensi saluran pemasaran',
            'Laporan ringkasan mingguan otomatis untuk jajaran direksi yang menyoroti peluang pertumbuhan'
          ],
          deliverables: [
            'Portal analitik eksekutif interaktif dengan pembaruan waktu nyata',
            'Sistem peringatan risiko churn pelanggan terintegrasi ke Slack/Email',
            'Arsitektur data warehouse bersih (BigQuery, Snowflake, atau PostgreSQL)',
            'Otomatisasi slide presentasi KPI kuartalan siap rapat direksi'
          ],
          impactMetric: '$1.8M',
          metricLabel: 'Rata-rata potensi keuntungan baru yang teridentifikasi per klien',
          image: '/src/assets/images/service_data_analysis_illust_1792653245175.jpg',
        },
        {
          id: 'customer-support-chatbot',
          number: '04',
          title: 'Chatbot Layanan Pelanggan AI',
          shortTag: 'Dukungan Otonom 24/7',
          tagline: 'Agen AI cerdas berbasis RAG yang menyelesaikan 80%+ pertanyaan pelanggan secara instan tanpa jeda.',
          description: 'Hadirkan layanan pelanggan sekelas manusia 24 jam sehari di semua zona waktu tanpa perlu menambah tim. Chatbot kami dilatih langsung pada SOP internal, katalog produk, dan API transaksi Anda, menjamin jawaban akurat, ramah, dan patuh regulasi dalam 95+ bahasa.',
          whatWeOffer: [
            'Arsitektur RAG (Retrieval-Augmented Generation) dilatih khusus pada dokumen resmi perusahaan Anda',
            'Garansi tanpa halusinasi dengan referensi sumber kutipan dan batasan kebijakan yang ketat',
            'Eksekusi tindakan langsung: cek status pesanan, ajukan retur, ubah jadwal janji temu, verifikasi akun',
            'Integrasi multisaluran di website, WhatsApp Bisnis, Instagram DM, Zendesk, dan Freshdesk',
            'Peralihan mulus ke staf manusia (Human-in-the-Loop) saat mendeteksi sentimen mendesak'
          ],
          deliverables: [
            'Basis vektor pengetahuan AI tersinkronisasi rutin dengan pusat bantuan Anda',
            'Widget obrolan dengan kustomisasi visual sesuai warna dan identitas merek Anda',
            'Dasbor analitik pelacakan tingkat penyelesaian (deflection rate) dan kepuasan pelanggan (CSAT)',
            'Panduan pelatihan staf internal dan protokol eskalasi'
          ],
          impactMetric: '91.4%',
          metricLabel: 'Tingkat penyelesaian di kontak pertama dengan kepuasan 4.9/5',
          image: '/src/assets/images/service_chatbot_illust_1792653245305.jpg',
        },
        {
          id: 'video-ads',
          number: '05',
          title: 'Iklan Video Pendek AI',
          shortTag: 'Kreatif Performa Tinggi',
          tagline: 'Materi iklan video viral berkonversi tinggi untuk TikTok, Instagram Reels, dan YouTube Shorts dengan kecepatan 10x agensi biasa.',
          description: 'Keberhasilan iklan digital masa kini membutuhkan eksperimen konten tanpa henti. Kami memanfaatkan penulisan naskah AI, sintesis suara natural, pengujian hook dinamis, dan analisis tren viral untuk memproduksi puluhan video iklan siap tayang setiap minggu.',
          whatWeOffer: [
            'Struktur hook viral teroptimasi algoritma untuk mengunci perhatian dalam 3 detik pertama',
            'Produksi video UGC (User Generated Content) dan model AI sesuai gaya visual platform media sosial',
            'Teks kinetik otomatis, sinkronisasi musik tren, dan tempo transisi visual yang dinamis',
            'Eksperimen naskah sistematis: menguji 20+ variasi hook dan call-to-action untuk tiap sudut penawaran',
            'Integrasi langsung ke akun iklan dengan deteksi kelelahan materi iklan (creative fatigue)'
          ],
          deliverables: [
            '20 hingga 60 aset video vertikal (9:16) siap pasang iklan per bulan',
            'Dokumentasi naskah lengkap disertai metrik retensi penonton',
            'Salinan teks iklan (copywriting), caption, dan riset tagar yang sesuai',
            'Evaluasi performa mingguan dan iterasi materi kreatif baru'
          ],
          impactMetric: '-44%',
          metricLabel: 'Penurunan biaya akuisisi pelanggan (Cost Per Acquisition / CPA)',
          image: '/src/assets/images/service_video_ads_illust_1792653246543.jpg',
        },
      ],
    },
    demoSection: {
      kicker: 'Ruang Uji Coba Interaktif',
      subkicker: 'Uji Langsung Hasil Kerja AI Kami',
      heading: 'Rasakan langsung kecerdasan sistem AI kami secara nyata.',
      subheading: 'Coba simulasi keluaran dari kelima divisi AI kami sebelum menjadwalkan panggilan konsultasi.',
      tabs: {
        chatbot: 'Chatbot Dukungan',
        data: 'Data & Wawasan',
        video: 'Hook Iklan Video',
        web: 'Uji Kecepatan Web',
        roi: 'Kalkulator ROI Prospek',
      },
      chatbot: {
        title: 'Agen Pengetahuan Perusahaan AI Create',
        subtitle: 'Berbasis RAG · Batasan Anti-Halusinasi · 95+ Bahasa',
        reset: 'Atur Ulang Obrolan',
        initialGreeting: 'Halo! Saya AI Create Assistant, dilatih khusus pada dokumentasi produk, harga, dan integrasi sistem. Ada yang bisa saya bantu hari ini?',
        samplePromptLabel: 'Pertanyaan Contoh:',
        samples: [
          'Bagaimana cara mengintegrasikan sistem dengan database PostgreSQL kami?',
          'Berapa lama waktu pembuatan 30 iklan video pendek?',
          'Bagaimana cara agensi mencegah halusinasi jawaban chatbot?'
        ],
        inputPlaceholder: 'Tanyakan mengenai integrasi, kecepatan, keamanan data, atau layanan...',
        sendButton: 'Kirim',
        serviceNote: 'Tersedia dalam layanan Chatbot Layanan Pelanggan',
        deployCta: 'Pasang sistem ini untuk bisnis Anda →',
      },
      data: {
        title: 'Mesin Sintesis AI: Data Mentah Menjadi Tindakan Nyata',
        subtitle: 'Menampilkan transformasi instan 45.000 baris transaksi log menjadi keputusan strategis berkeuntungan tinggi.',
        insightsTab: 'Wawasan Eksekutif AI',
        rawTab: 'Contoh Data Mentah',
        churnLabel: 'Prediksi Risiko Pelanggan Berhenti (Churn) Q4',
        churnDesc: 'Terdeteksi pada akun dengan > 3 tiket komplain yang belum tuntas',
        revenueLabel: 'Peluang Pendapatan Tersembunyi',
        revenueDesc: 'Niat upgrade paket terdeteksi pada 88 akun bisnis',
        cacLabel: 'Perbedaan Efisiensi Biaya Iklan (CAC)',
        cacDesc: 'Video pendek menghasilkan efisiensi 2.4x dibanding iklan pencarian berbayar',
        recommendationTitle: 'Rekomendasi Eksekutif Otomatis',
        recommendationBody: 'Langkah Taktis: Alihkan 35% anggaran iklan pencarian yang kurang efektif ke materi iklan video pendek. Kirimkan otomatis email retensi VIP personal kepada 42 akun bisnis yang mendekati masa perpanjangan untuk mengamankan pendapatan $680.000.',
        inquireCta: 'Pelajari Layanan Analisis Data →',
      },
      video: {
        title: 'Mesin Kreatif Iklan Video Pendek AI',
        subtitle: 'Kami menghasilkan puluhan sudut hook viral dan aset vertikal 9:16 setiap minggu untuk menekan biaya iklan Anda.',
        storyboardLabel: 'Storyboard Produksi',
        visualPacing: 'Tempo Visual',
        audioTrack: 'Trek Audio',
        benchmark: 'Tolok Ukur',
        inquireCta: 'Pesan Paket Iklan Video →',
        hooks: [
          {
            title: 'Hook A: Menyoroti Masalah Utama',
            hookText: '"Berhenti membayar puluhan juta per bulan untuk agensi yang hanya mengirimkan laporan PDF sebulan sekali..."',
            format: 'Instagram Reels & TikTok (9:16)',
            pacing: 'Frekuensi transisi visual tiap 1.4 detik',
            predictedRetention: '84.2% retensi di detik ke-3',
            suggestedAudio: 'Bassline teknologi modern yang tren'
          },
          {
            title: 'Hook B: Fakta Kontra-Intuitif',
            hookText: '"Alasan biaya dukungan pelanggan Anda membengkak bukan karena jumlah tiket, melainkan waktu respon 48 jam yang lambat..."',
            format: 'YouTube Shorts (9:16)',
            pacing: 'Tipografi kinetik & perbesaran 1.2 detik',
            predictedRetention: '79.6% retensi di detik ke-3',
            suggestedAudio: 'Ambient synth modern bernuansa rapi'
          },
          {
            title: 'Hook C: Bukti Transformasi Nyata',
            hookText: '"Begini cara sebuah brand e-commerce menghasilkan omzet $420k tanpa mengirimkan cold email manual sama sekali..."',
            format: 'TikTok & Video LinkedIn (9:16)',
            pacing: 'Pembuktian split-screen data nyata',
            predictedRetention: '88.1% retensi di detik ke-3',
            suggestedAudio: 'Ketukan lo-fi energik bersemangat'
          }
        ],
      },
      web: {
        title: 'Desain Web Headless AI vs CMS Konvensional',
        subtitle: 'Setiap pengurangan 100ms waktu muat halaman menghasilkan kenaikan rata-rata 1% pada tingkat konversi penjualan.',
        legacyTitle: 'Website Agensi Konvensional / Template Lama',
        legacyDesc: 'Plugin berlebihan, respon server lambat, dan tampilan statis yang tidak disesuaikan dengan niat pembeli.',
        aiTitle: 'Arsitektur Web Otonom AI Create',
        aiDesc: 'Edge caching statis, rendering secepat kilat, personalisasi pengunjung cerdas, dan pengujian CRO berkelanjutan.',
        lighthouseLabel: 'Skor Performa Lighthouse',
        ttiLabel: 'Waktu Siap Interaksi (TTI)',
        inquireCta: 'Konsultasikan Desain Ulang Web →',
      },
      roi: {
        title: 'Kalkulator ROI Lead Generation Prediktif',
        subtitle: 'Simulasikan potensi pendapatan baru dari mesin pencari prospek otomatis berbasis AI kami.',
        trafficLabel: 'Target Pasar Sasaran (TAM) / Pengunjung Bulanan',
        dealValueLabel: 'Rata-rata Nilai Transaksi per Klien',
        estimatedAnnualTitle: 'Estimasi Nilai Pipeline Tahunan',
        estimatedDetails: (leads, deals) => `Dihitung berdasarkan estimasi ${leads} prospek terverifikasi AI dan ${deals} transaksi tercapai per bulan.`,
        ctaButton: 'Terapkan Mesin Lead Generation Sekarang',
      },
    },
    caseStudies: {
      kicker: 'Hasil Terverifikasi',
      subkicker: 'Studi Kasus Komersial',
      heading: 'Pertumbuhan prospek nyata, biaya akuisisi lebih rendah, dan efisiensi terbukti.',
      subheading: 'Brand enterprise dan e-commerce nyata yang didukung oleh infrastruktur AI kami.',
      challengeLabel: 'Tantangan:',
      solutionLabel: 'Solusi AI:',
      studies: [
        {
          client: 'Vanguard Logistics & Armada',
          industry: 'Rantai Pasok & Transportasi',
          metric: '+280% prospek bisnis',
          challenge: 'Menghadapi siklus penjualan 6 bulan yang berlarut-larut serta data armada logistik yang tersebar di sistem ERP lama.',
          solution: 'Membangun mesin AI pemantau sinyal gangguan rantai pasok dan analitik prediksi margin rute armada.',
          result: 'Kontrak enterprise senilai $4.2M ditandatangani dalam 5 bulan; memangkas pemborosan bahan bakar hingga 22%.',
          author: 'Marcus Vance, VP of Growth',
        },
        {
          client: 'Kroma Skincare & Beauty',
          industry: 'E-Commerce Direct-to-Consumer',
          metric: '-50% biaya akuisisi (CPA)',
          challenge: 'Biaya iklan per pelanggan tinggi ($68 CPA) dan tim CS kewalahan membalas ribuan pesan saat peluncuran produk.',
          solution: 'Mendesain ulang toko online headless dengan bundling cerdas, memproduksi 40 video iklan pendek per bulan, dan chatbot konsultasi kulit 24/7.',
          result: 'Biaya CPA turun dari $68 menjadi $34; penyelesaian otomatis CS mencapai 94% dengan skor kepuasan 4.95/5.',
          author: 'Elena Rostova, Chief Marketing Officer',
        },
        {
          client: 'FinPulse Financial OS',
          industry: 'B2B Fintech SaaS',
          metric: '+62% aktivasi pengguna',
          challenge: 'Banyak pengguna baru batal berlangganan karena konfigurasi pembukuan pajak rumit dan memerlukan bantuan staf teknis.',
          solution: 'Merancang asisten AI dalam aplikasi yang menganalisis anomali transaksi rekening secara instan dan menjawab pertanyaan pajak pengguna.',
          result: 'Tingkat penyelesaian onboarding melonjak 62%; tingkat pelanggan berhenti (churn) turun 38% di semester pertama.',
          author: 'David Chen, Co-Founder & CTO',
        },
      ],
    },
    process: {
      kicker: 'Metodologi Teruji',
      subkicker: 'Cara Kerja Kami',
      heading: 'Dari audit data awal hingga penerapan skala otonom dalam hitungan minggu.',
      subheading: 'Alur kerja 4 tahap kami menjamin keselarasan tujuan bisnis, privasi data, dan compounding ROI berkelanjutan.',
      steps: [
        {
          step: '01',
          title: 'Audit AI & Data Strategis',
          description: 'Kami mengevaluasi tumpukan teknologi, alur penjualan, titik sentuh pelanggan, dan aset data Anda untuk menemukan potensi ROI tertinggi.',
          phaseLabel: 'Tahap 01 · Standar Produksi',
        },
        {
          step: '02',
          title: 'Arsitektur Kustom & Prototipe',
          description: 'Kami merancang model AI khusus, wireframe website konversi tinggi, otomatisasi outreach, dan naskah iklan dalam 7 hari kerja.',
          phaseLabel: 'Tahap 02 · Standar Produksi',
        },
        {
          step: '03',
          title: 'Integrasi & Keamanan Ketat',
          description: 'Penerapan langsung ke sistem bisnis Anda dengan enkripsi data sekelas perbankan, batasan anti-halusinasi, dan sinkronisasi CRM.',
          phaseLabel: 'Tahap 03 · Standar Produksi',
        },
        {
          step: '04',
          title: 'Optimasi & Skalabilitas Berkelanjutan',
          description: 'Tim kami memantau performa setiap minggu, memperbarui data agen AI, menguji sudut iklan video baru, dan menyempurnakan konversi.',
          phaseLabel: 'Tahap 04 · Standar Produksi',
        },
      ],
    },
    form: {
      kicker: 'Pendaftaran Konsultasi Klien',
      subkicker: 'Jaminan Respons 24 Jam',
      heading: 'Ceritakan proyek dan sasaran bisnis yang ingin Anda capai.',
      subheading: 'Pilih layanan AI yang Anda butuhkan. Tim insinyur utama kami akan meninjau kebutuhan Anda dan menyusun proposal arsitektur khusus.',
      step1Title: '1. Layanan AI Mana yang Anda Butuhkan? *',
      selectAll: 'Pilih Semua 5 Layanan',
      deselectAll: 'Batalkan Semua',
      step2Title: '2. Informasi Kontak & Perusahaan',
      nameLabel: 'Nama Lengkap *',
      namePlaceholder: 'contoh: Budi Santoso',
      emailLabel: 'Email Bisnis / Kantor *',
      emailPlaceholder: 'budi@perusahaan.com',
      companyLabel: 'Nama Perusahaan *',
      companyPlaceholder: 'PT Maju Bersama',
      websiteLabel: 'Website Perusahaan / Tautan URL',
      websitePlaceholder: 'https://perusahaan.com',
      step3Title: '3. Ruang Lingkup Proyek & Anggaran',
      budgetLabel: 'Estimasi Anggaran Bulanan',
      timelineLabel: 'Target Waktu Peluncuran',
      notesLabel: 'Tujuan Khusus & Kendala yang Sedang Dihadapi (Opsional)',
      notesPlaceholder: 'Jelaskan kondisi sistem saat ini, volume pertanyaan pelanggan harian, target prospek penjualan, atau tenggat waktu yang diinginkan...',
      ndaBadge: 'Terlindungi NDA Ketat',
      proposalBadge: 'Proposal dalam 24 Jam',
      submitButton: 'Kirim Permintaan Konsultasi',
      submittingButton: 'Mengamankan Transmisi...',
      successTitle: 'Permintaan Berhasil Diterima',
      successMessage: (name, company, email) => `Terima kasih, ${name}. Kami telah mencatat permintaan untuk ${company}. Tim spesialis teknis kami akan menghubungi Anda di ${email} dalam waktu maksimal 24 jam kerja disertai audit awal.`,
      requestedCaps: 'Layanan AI yang Dipilih:',
      estBudgetLabel: 'Estimasi Anggaran:',
      timelineText: 'Target Waktu:',
      anotherRequestButton: 'Kirim Permintaan Lain',
      budgetOptions: [
        { value: '$3,000 - $5,000', label: '$3.000 - $5.000 / bulan (Uji Coba Pilot)' },
        { value: '$5,000 - $15,000', label: '$5.000 - $15.000 / bulan (Pertumbuhan)' },
        { value: '$15,000 - $30,000', label: '$15.000 - $30.000 / bulan (Skala Besar)' },
        { value: '$30,000+', label: '$30.000+ / bulan (Enterprise Retainer)' },
      ],
      timelineOptions: [
        { value: 'Immediate (< 2 weeks)', label: 'Segera (< 2 minggu)' },
        { value: 'Within 30 days', label: 'Dalam 30 hari' },
        { value: 'Next quarter (1-3 months)', label: 'Kuartal berikutnya (1-3 bulan)' },
        { value: 'Researching options', label: 'Sedang mengeksplorasi pilihan' },
      ],
      errors: {
        name: 'Nama lengkap wajib diisi',
        email: 'Email bisnis wajib diisi',
        emailInvalid: 'Harap masukkan alamat email yang valid',
        company: 'Nama perusahaan wajib diisi',
        services: 'Harap pilih minimal satu layanan yang diminati',
      },
    },
    faq: {
      kicker: 'Jawaban Langsung',
      subkicker: 'Pertanyaan yang Sering Diajukan',
      heading: 'Segala hal yang perlu Anda ketahui tentang bekerja sama dengan AI Create.',
      items: [
        {
          question: 'Apa perbedaan AI Create dengan agensi pemasaran dan pengembang konvensional?',
          answer: 'Agensi tradisional menagih ratusan jam kerja manual dan membutuhkan waktu berbulan-bulan hanya untuk aset statis. Di AI Create, kami menggabungkan arahan kreatif manusia kelas atas dengan sistem otomatisasi AI eksklusif—memungkinkan kami membangun website berkonversi tinggi, memproduksi 40+ materi iklan video per bulan, menganalisis jutaan data, dan meluncurkan bot CS 24/7 dengan kecepatan 5x lipat dan efisiensi biaya jauh lebih baik.'
        },
        {
          question: 'Apakah data rahasia bisnis dan data pelanggan kami terjamin keamanannya?',
          answer: 'Pasti aman. Kami menerapkan standar kepatuhan privasi data tingkat tinggi. Data Anda tidak akan pernah digunakan untuk melatih model publik. Seluruh integrasi API menggunakan saluran privat bersertifikasi SOC2 dengan enkripsi ujung-ke-ujung serta kontrol akses berbasis peran.'
        },
        {
          question: 'Seberapa cepat kami dapat melihat hasil komersial nyata?',
          answer: 'Jadwal implementasi kami sangat singkat. Sebagian besar proyek desain web dan chatbot layanan pelanggan siap tayang dalam 10 hingga 14 hari kerja. Mesin lead generation dan iklan video pendek biasanya mulai menghasilkan prospek berkualitas dan metrik penjualan dalam 3 minggu pertama sejak diluncurkan.'
        },
        {
          question: 'Bisakah kami merekrut AI Create hanya untuk satu layanan tertentu?',
          answer: 'Tentu bisa. Anda dapat memilih satu layanan spesifik—seperti chatbot pelanggan 24/7, paket iklan video pendek performa tinggi, atau perombakan desain web. Banyak klien kami memulai dari satu kebutuhan paling mendesak dan beralih ke retainer AI penuh setelah melihat hasilnya.'
        },
        {
          question: 'Bagaimana cara mencegah chatbot AI berhalusinasi atau memberikan informasi salah?',
          answer: 'Kami menerapkan arsitektur Retrieval-Augmented Generation (RAG) yang diperkuat dengan validasi semantik ketat. Bot hanya dapat menjawab berdasarkan dokumen resmi, SOP, dan basis data produk Anda. Jika suatu pertanyaan di luar pengetahuannya, bot akan otomatis mengalihkan obrolan ke staf manusia.'
        }
      ],
    },
    footer: {
      tagline: 'Merancang sistem AI otonom untuk performa bisnis enterprise: desain web, pipeline lead generation terarah, analisis data cerdas, chatbot pelanggan, dan materi iklan video pendek viral.',
      locations: 'San Francisco · London · Singapura · Jakarta',
      capabilitiesTitle: 'Kemampuan AI',
      exploreTitle: 'Jelajahi',
      contactTitle: 'Kontak Langsung',
      retainerNote: 'Terbuka untuk kemitraan brand bertumbuh pesat dan proyek transformasi AI enterprise.',
      ctaButton: 'Jadwalkan Konsultasi',
      copyright: 'AI Create Agency. Seluruh hak cipta dilindungi.',
      soc2: 'Tersertifikasi SOC2 Type II',
      gdpr: 'Sesuai Standar GDPR & CCPA',
      noTraining: 'Bebas Penyerapan Data ke Model Publik',
    },
  },
};
