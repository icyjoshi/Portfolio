/* ============================================================
   SITE CONFIG — the front door of the content system.

   Name, positioning, contact details, navigation and footer all
   live here. Change a line, rebuild, done. No components need
   touching.
   ============================================================ */

export const site = {
  /* ---------- Identity ---------- */
  name: 'Ayushi Joshi',
  shortName: 'Ayushi',
  initials: 'AJ',

  /* The <title> template. %s is replaced by the page title. */
  titleTemplate: '%s — Ayushi Joshi',
  defaultTitle: 'Ayushi Joshi — Marketing, Ideas & Everything In Between',

  /* One-line positioning. Used in meta description and OG cards. */
  description:
    'Ayushi Joshi is a multidisciplinary marketer working across brand, campaigns, content, analytics and AI. Portfolio, case studies and freelance marketing services.',

  /* Shown under the name in the nav and on the About page. */
  role: 'Multidisciplinary marketer',

  /* ---------- Contact ----------
     [ADD] Replace the placeholder URLs below with your real profiles.
     Anything left as '#' is hidden from the footer automatically. */
  email: 'ayushijoshi.e@gmail.com',
  location: 'Pune, India',
  availability: 'Open to freelance briefs and full-time roles',

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-ayushi-joshi/', note: '[ADD] your LinkedIn URL' },
    { label: 'Upwork', href: '#', note: '[ADD] your Upwork URL' },
    { label: 'Email', href: 'mailto:joshiaayu06@gmail.com', note: '' },
  ],

  /* Drop the PDF at public/ayushi-joshi-resume.pdf and this works. */
  resume: '/ayushi-joshi-resume.pdf',

  /* Shown in the footer. Update when you make a meaningful change. */
  lastUpdated: 'August 2026',

  /* ---------- Open Graph ---------- */
  ogImage: '/og-image.png',
  ogImageAlt:
    'Ayushi Joshi — I notice things. Then I make something out of them.',
  locale: 'en_IN',
} as const;

/* ============================================================
   NAVIGATION
   Order here is the order on screen. Add or remove freely.
   ============================================================ */
export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Lab', href: '/lab' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
] as const;

export const navCta = { label: 'Work with me', href: '/contact' } as const;

/* ============================================================
   FOOTER
   ============================================================ */
export const footer = {
  headline: 'Have a brief?',
  subline: 'Send it my way. I like the difficult ones.',
  cta: { label: 'Start a conversation', href: '/contact' },
  columns: [
    {
      title: 'Site',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Services', href: '/services' },
        { label: 'The Lab', href: '/lab' },
        { label: 'Writing', href: '/writing' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
  colophon: 'Built by me, in public, with too many tabs open.',
} as const;

/* ============================================================
   EDUCATION — kept deliberately small. This is not a resume site.
   ============================================================ */
export const education = [
  {
    degree: 'MBA, Marketing',
    school: 'MIT World Peace University',
    years: '2025 – 2027',
    detail: 'CGPA 8.59',
  },
  {
    degree: 'BBA',
    school: 'DAVV, Indore',
    years: '2021 – 2024',
    detail: 'CGPA 8.35',
  },
] as const;

/* Certifications stay secondary on purpose — no certification wall. */
export const certifications = [
  'Amazon Ads Foundation Certification',
  'Google Digital Marketing & E-Commerce Professional Certificate',
  'Google AI Professional Certificate',
  'Meta Social Media Marketing Professional Certificate',
] as const;
