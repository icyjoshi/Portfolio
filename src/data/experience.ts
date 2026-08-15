/* ============================================================
   EXPERIENCE TIMELINE

   Concise on purpose. Experience is proof, not the portfolio — the
   depth lives in the case studies, which is what `caseStudy` links to.

   Every line here comes from the résumé. Nothing is invented.
   Newest first.
   ============================================================ */

export type Role = {
  org: string;
  title: string;
  period: string;
  /** Sorts the timeline. ISO date of the start month. */
  start: string;
  /** 2–3 lines maximum. Resist the bullet list. */
  summary: string;
  highlights: string[];
  /** Slug of the case study that goes deeper, if one exists. */
  caseStudy?: string;
};

export const experience: Role[] = [
  {
    org: 'Jagroots Brand Solutions',
    title: 'Marketing Intern',
    period: 'Jun 2026 – Jul 2026',
    start: '2026-06-01',
    summary:
      'Brand launch work for a location-based social networking app, plus content direction across multiple clients and a website relaunch.',
    highlights: [
      'Market, competitive, pricing, distribution and packaging research for a go-to-market',
      'Content direction and reel scripts for the launch campaign — 2× the views of previous content',
      'Website structure, content architecture and SEO/GEO work — 3× traffic after relaunch',
      'Offline outreach and multi-client content planning',
    ],
    caseStudy: 'jagroots-brand-launch',
  },
  {
    org: 'Independent / Freelance',
    title: 'Marketing & Content Associate',
    period: 'Nov 2025 – Apr 2026',
    start: '2025-11-01',
    summary:
      'B2B content and messaging for SaaS and enterprise clients, built on keyword research and AI-assisted workflows.',
    highlights: [
      '30+ long-form B2B blogs with SEO and keyword research behind each one',
      '60+ social posts with platform-specific copy, hooks and CTAs',
      'Positioning, value propositions and buyer personas for SaaS narratives',
      'SERP analysis, keyword difficulty and search volume work; published via Wix',
    ],
    caseStudy: 'freelance-b2b-content',
  },
  {
    org: 'Cogent Infotech',
    title: 'Content Writer — Marketing',
    period: 'Dec 2024 – Jul 2025',
    start: '2024-12-01',
    summary:
      'B2B content across AI, cybersecurity, upskilling and digital transformation — and the campaigns that carried it.',
    highlights: [
      '400% weekly active user growth',
      'Campaign execution and funnel optimisation using Google Analytics and performance data',
      'Editorial moments including Women’s Day, Black History Month and Mental Health Month',
      'Formats from SEO articles and newsletters to infographics, polls and meme marketing',
    ],
    caseStudy: 'cogent-content-engine',
  },
  {
    org: 'AISECT India',
    title: 'Social Media Strategist',
    period: 'May 2024 – Nov 2024',
    start: '2024-05-01',
    summary:
      'Seven social campaigns across Instagram and Facebook, from calendar to copy to creative brief.',
    highlights: [
      '7 social media campaigns planned and executed',
      'Content calendars, campaign copy and Canva creative concepts',
      'Creative team coordination and performance monitoring',
      '400+ follower growth',
    ],
    caseStudy: 'aisect-social-campaigns',
  },
  {
    org: 'iQuanta',
    title: 'Community Management & Digital Marketing Intern',
    period: 'Apr 2023 – May 2024',
    start: '2023-04-01',
    summary:
      'A 378K+ member Facebook community of MBA aspirants — and the query pipeline that turned it into leads.',
    highlights: [
      '378K+ member community managed',
      '18,000+ user queries handled with a team of 5 interns',
      '78% lead conversion — 91 of 117 user queries',
      'Interactive content and audience analysis for an MBA-aspirant audience',
    ],
    caseStudy: 'iquanta-community',
  },
  {
    org: 'Value Founders',
    title: 'Marketing Intern',
    period: 'Oct 2023 – Nov 2023',
    start: '2023-10-01',
    summary:
      'Primary research for Smile Train, including field data collection and the process documentation behind it.',
    highlights: [
      'Primary research using KoboToolbox',
      'Geographic mapping and Excel analysis',
      'SOP development and process documentation',
    ],
    caseStudy: 'value-founders-research',
  },
];
