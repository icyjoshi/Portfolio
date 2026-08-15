/* ============================================================
   PROOF STRIP + CAPABILITIES

   Two rules, both non-negotiable:

   1. A number never appears without the context that makes it mean
      something. No decorative vanity metrics.
   2. A capability never appears without a `proof` link. If you can't
      point at where you used it, it doesn't go on the site.

   `proof.href` values starting with /work/ must match a real file in
   src/content/work/. A broken slug is a broken promise.
   ============================================================ */

export const proofStrip = [
  {
    value: '378K+',
    label: 'community members',
    context: 'Facebook community managed at iQuanta',
    href: '/work/iquanta-community',
  },
  {
    value: '400%',
    label: 'weekly active user growth',
    context: 'Content and campaign work at Cogent Infotech',
    href: '/work/cogent-content-engine',
  },
  {
    value: '78%',
    label: 'lead conversion',
    context: '91 of 117 user queries converted, iQuanta',
    href: '/work/iquanta-community',
  },
  {
    value: '3×',
    label: 'website traffic',
    context: 'After the site relaunch at Jagroots',
    href: '/work/jagroots-brand-launch',
  },
] as const;

/* ------------------------------------------------------------
   WHAT I DO
   Five overlapping areas rather than a skills list. The order is
   the order of the marketing chain, so reading down the section
   reads as a process: audience → idea → words → numbers → tools.
   ------------------------------------------------------------ */
export const capabilities = [
  {
    id: 'brand',
    num: '01',
    title: 'Brand',
    line: 'Working out who a brand is for, and what it should say to them.',
    items: ['Positioning', 'Audience & personas', 'Messaging', 'Value propositions', 'Brand voice'],
    proof: [
      { label: 'Jagroots brand launch', href: '/work/jagroots-brand-launch' },
      { label: 'Brand Observatory', href: '/work/brand-observatory' },
    ],
    accent: 'pink',
  },
  {
    id: 'campaigns',
    num: '02',
    title: 'Campaigns',
    line: 'The idea that makes people stop, and the plan that carries it.',
    items: ['Campaign concepts', 'Creative direction', 'Launches', 'Editorial moments', 'Channel planning'],
    proof: [
      { label: 'Cogent campaign calendar', href: '/work/cogent-content-engine' },
      { label: 'AISECT social campaigns', href: '/work/aisect-social-campaigns' },
    ],
    accent: 'yellow',
  },
  {
    id: 'content',
    num: '03',
    title: 'Content & copy',
    line: 'Words that sound like a person and still do a job.',
    items: ['SEO content', 'Long-form B2B', 'Social copy', 'Landing pages', 'Email & newsletters'],
    proof: [
      { label: 'Freelance B2B content', href: '/work/freelance-b2b-content' },
      { label: 'Copy That', href: '/work/copy-that' },
    ],
    accent: 'ink',
  },
  {
    id: 'growth',
    num: '04',
    title: 'Growth & analytics',
    line: 'Numbers are only interesting when they change a decision.',
    items: ['Google Analytics', 'Funnel thinking', 'Performance review', 'SERP & keyword research', 'Reporting'],
    proof: [
      { label: 'Cogent funnel work', href: '/work/cogent-content-engine' },
      { label: 'The Funnel', href: '/work/the-funnel' },
    ],
    accent: 'cyan',
  },
  {
    id: 'technology',
    num: '05',
    title: 'AI & research',
    line: 'Faster research, more variations, better questions. Same judgement.',
    items: ['AI-assisted workflows', 'Market & competitor research', 'Content systems', 'Rapid prototyping'],
    proof: [
      { label: 'How I work with AI', href: '/about#ai' },
      { label: 'Freelance content workflows', href: '/work/freelance-b2b-content' },
    ],
    accent: 'lime',
  },
] as const;
