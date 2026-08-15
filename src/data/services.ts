/* ============================================================
   SERVICES

   Ordered by what I most want to be hired for. Tier 4 is labelled
   "developing" on purpose and must stay that way until there is real
   hands-on paid-media experience behind it — the site says what is
   true, including when the true answer is "still learning".

   To reprioritise a service, move it between tiers. To retire the
   "developing" label on a service, change its tier.
   ============================================================ */

export type ServiceTier = {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  developing?: boolean;
  services: {
    name: string;
    line: string;
    /** What you actually get. Keep to 3–4 items. */
    deliverables: string[];
    /** Where I've done this. Empty array is allowed but avoid it. */
    proof: { label: string; href: string }[];
  }[];
};

export const serviceTiers: ServiceTier[] = [
  {
    id: 'strategy',
    eyebrow: 'What I most want to be hired for',
    title: 'Strategy & positioning',
    note: 'The thinking that happens before anyone opens a design file.',
    services: [
      {
        name: 'Brand strategy',
        line: 'Who you are for, what you stand for, and how you say it consistently.',
        deliverables: [
          'Audience definition and personas',
          'Positioning and value proposition',
          'Messaging framework and brand voice',
          'Competitive landscape read',
        ],
        proof: [
          { label: 'Jagroots brand launch', href: '/work/jagroots-brand-launch' },
          { label: 'Brand Observatory', href: '/work/brand-observatory' },
        ],
      },
      {
        name: 'Campaign strategy',
        line: 'A central idea, the channels to carry it, and how you know it worked.',
        deliverables: [
          'Brief interrogation and audience insight',
          'Big idea and creative platform',
          'Channel and content plan',
          'KPI framework',
        ],
        proof: [
          { label: 'Cogent campaigns', href: '/work/cogent-content-engine' },
          { label: 'AISECT campaigns', href: '/work/aisect-social-campaigns' },
        ],
      },
      {
        name: 'Creative strategy',
        line: 'Turning an insight into something that is actually worth making.',
        deliverables: [
          'Insight development',
          'Creative territories and concepts',
          'Content direction and scripts',
          'Creative team briefing',
        ],
        proof: [{ label: 'Jagroots launch campaign', href: '/work/jagroots-brand-launch' }],
      },
    ],
  },
  {
    id: 'words',
    eyebrow: 'Where the strategy meets the page',
    title: 'Content & copy',
    note: 'Written to be read by a person and found by a search engine, in that order.',
    services: [
      {
        name: 'SEO content',
        line: 'Long-form content built on real keyword and SERP research.',
        deliverables: [
          'Keyword and SERP analysis',
          'Content briefs and outlines',
          'Long-form articles',
          'On-page structure',
        ],
        proof: [
          { label: '30+ B2B blogs, freelance', href: '/work/freelance-b2b-content' },
          { label: 'Cogent content engine', href: '/work/cogent-content-engine' },
        ],
      },
      {
        name: 'Landing page copy',
        line: 'Structure, hierarchy and words for a page that has one job.',
        deliverables: [
          'Page structure and section order',
          'Headline and subhead options',
          'Benefit-led body copy and CTAs',
          'Rationale for every choice',
        ],
        proof: [
          { label: 'Freelance SaaS copy', href: '/work/freelance-b2b-content' },
          { label: 'Copy That', href: '/work/copy-that' },
        ],
      },
      {
        name: 'Content strategy',
        line: 'What to publish, where, how often, and why any of it matters.',
        deliverables: [
          'Content pillars and calendar',
          'Channel-specific formats',
          'Repurposing system',
          'Performance review loop',
        ],
        proof: [{ label: 'Cogent content engine', href: '/work/cogent-content-engine' }],
      },
    ],
  },
  {
    id: 'research',
    eyebrow: 'Useful before you commit budget',
    title: 'Research & audits',
    note: 'Short, opinionated, and ending in a recommendation rather than a summary.',
    services: [
      {
        name: 'Market & competitor research',
        line: 'What the category is doing, and the gap nobody has taken yet.',
        deliverables: [
          'Competitor positioning map',
          'Messaging and content teardown',
          'Pricing, packaging and distribution notes',
          'Opportunities, ranked',
        ],
        proof: [
          { label: 'Jagroots market research', href: '/work/jagroots-brand-launch' },
          { label: 'Value Founders primary research', href: '/work/value-founders-research' },
        ],
      },
      {
        name: 'Marketing audit',
        line: 'An outside read of your funnel, content and channels.',
        deliverables: [
          'Funnel and drop-off review',
          'Content and SEO audit',
          'Channel mix assessment',
          'Prioritised fix list',
        ],
        proof: [{ label: 'Jagroots site relaunch', href: '/work/jagroots-brand-launch' }],
      },
      {
        name: 'Community management',
        line: 'Running a space people actually want to be in.',
        deliverables: [
          'Community content plan',
          'Engagement and response system',
          'Query handling and routing',
          'Growth and retention reporting',
        ],
        proof: [{ label: '378K+ member community, iQuanta', href: '/work/iquanta-community' }],
      },
    ],
  },
  {
    id: 'social',
    eyebrow: 'Ongoing execution',
    title: 'Social & email',
    note: 'Happy to run these — just not the only thing I want to be known for.',
    services: [
      {
        name: 'Social media strategy & content',
        line: 'Platform-specific ideas, hooks and copy on a calendar that holds.',
        deliverables: [
          'Channel strategy and content pillars',
          'Monthly calendar',
          'Copy, hooks and CTAs',
          'Creative concepts and briefs',
        ],
        proof: [
          { label: '7 campaigns at AISECT', href: '/work/aisect-social-campaigns' },
          { label: '60+ posts, freelance', href: '/work/freelance-b2b-content' },
        ],
      },
      {
        name: 'Email & newsletters',
        line: 'Sequences and sends that respect the inbox they land in.',
        deliverables: [
          'Email and newsletter copy',
          'Sequence structure',
          'Subject line testing ideas',
          'Performance read',
        ],
        proof: [{ label: 'Cogent newsletters', href: '/work/cogent-content-engine' }],
      },
    ],
  },
  {
    id: 'developing',
    eyebrow: 'Being honest about this one',
    title: 'Paid media — developing',
    note: 'I have the certifications and the theory. I do not yet have significant hands-on spend behind me. I will say so before you hire me, not after.',
    developing: true,
    services: [
      {
        name: 'Google & Meta Ads',
        line: 'Campaign structure, audience and creative thinking — currently at a learning stage, and priced and scoped as such.',
        deliverables: [
          'Campaign and audience structure',
          'Ad copy and creative variants',
          'Testing plan and hypotheses',
          'Measurement framework',
        ],
        proof: [{ label: 'The Funnel (in progress)', href: '/work/the-funnel' }],
      },
    ],
  },
];

/* Who this is for. Deliberately product- and brand-side, not
   influencer or coach work. */
export const idealClients = [
  'Brands and product companies',
  'Startups past the "what even are we" stage',
  'Agencies who need an extra brain on a brief',
  'In-house marketing teams short one strategist',
  'Founders with a real product and no messaging',
] as const;

export const howItWorks = [
  {
    num: '01',
    title: 'You send the brief',
    line: 'Or the mess that will become one. Half-formed is fine — I will ask the annoying questions.',
  },
  {
    num: '02',
    title: 'We agree what the actual problem is',
    line: 'Often not the one in the brief. This is the part most people skip.',
  },
  {
    num: '03',
    title: 'I go away and think',
    line: 'Research, audience, competitors, whatever the problem needs. You get a point of view, not a summary.',
  },
  {
    num: '04',
    title: 'You get work you can use',
    line: 'Strategy, copy, campaign, plan — with the reasoning attached so your team can carry it forward.',
  },
] as const;
