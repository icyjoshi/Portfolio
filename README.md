# Ayushi Joshi — portfolio

A personal marketing portfolio built as a **content system**, not a one-off design.
Adding a project means adding a Markdown file. Nothing needs redesigning.

Built with [Astro](https://astro.build). Deploys itself to GitHub Pages when you push.

---

## Contents

1. [The five-minute version](#the-five-minute-version)
2. [Running it on your computer](#running-it-on-your-computer)
3. [Deploying](#deploying)
4. [Where everything lives](#where-everything-lives)
5. [How to add a project](#how-to-add-a-project)
6. [How to move a project out of the Lab into Work](#how-to-move-a-project-out-of-the-lab-into-work)
7. [How to add a Lab post](#how-to-add-a-lab-post)
8. [How to add a Writing entry](#how-to-add-a-writing-entry)
9. [How to change the About page](#how-to-change-the-about-page)
10. [How to update experience](#how-to-update-experience)
11. [How to update services](#how-to-update-services)
12. [How to change your name, email, links and CTA](#how-to-change-your-name-email-links-and-cta)
13. [How to change the colours](#how-to-change-the-colours)
14. [How to change the fonts](#how-to-change-the-fonts)
15. [Images](#images)
16. [Rules the site enforces](#rules-the-site-enforces)
17. [Things that need your attention](#things-that-need-your-attention)

---

## The five-minute version

You will spend 95% of your time in **two folders**:

| I want to… | Edit this |
| --- | --- |
| Add or change a project / case study | `src/content/work/` (one `.md` file per project) |
| Add a Lab post | `src/content/lab/` |
| Add a writing piece | `src/content/writing/` |
| Change your name, email, links, nav, footer | `src/data/site.ts` |
| Change the About page copy | `src/data/about.ts` |
| Change the experience timeline | `src/data/experience.ts` |
| Change services and pricing tiers | `src/data/services.ts` |
| Change the homepage numbers / capabilities | `src/data/capabilities.ts` |
| Change the colours or fonts | `src/styles/tokens.css` |

Every one of those is a plain text file with comments explaining each field.
You never need to touch a component to publish something new.

**The publishing loop:** edit a file → commit → push to `main` → the site rebuilds
itself in about two minutes.

---

## Running it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer). Install it once.

```bash
npm install     # once, the first time
npm run dev     # start the local preview
```

Open <http://localhost:4321>. Edits appear instantly as you save.

Press `Ctrl+C` in the terminal to stop it.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local preview with live reload |
| `npm run build` | Builds the real site into `dist/` |
| `npm run preview` | Views the built site exactly as it will be live |
| `npm run check` | Checks for broken links, bad frontmatter, type errors |
| `npm run images` | Regenerates the social share card and icons |

> **Note for Windows:** if `npm` is not recognised, Node is installed but not on
> your PATH. Either reinstall Node with the "Add to PATH" option ticked, or run
> commands from a terminal opened after installation.

---

## Deploying

### One-time setup

1. **Push this folder to a GitHub repository.**

2. **Tell the site its address.** Open `astro.config.mjs` and edit the two lines
   at the top:

   ```js
   const SITE = 'https://YOURNAME.github.io';
   const BASE = '/';
   ```

   | Your repo | `SITE` | `BASE` |
   | --- | --- | --- |
   | `YOURNAME/YOURNAME.github.io` | `https://YOURNAME.github.io` | `'/'` |
   | `YOURNAME/portfolio` | `https://YOURNAME.github.io` | `'/portfolio/'` |
   | A custom domain | `https://yourdomain.com` | `'/'` |

   Getting `BASE` wrong is the single most common cause of a deployed site with
   no styling — the paths all break. If that happens, this is the first thing
   to check.

3. **Turn on GitHub Pages.** In your repo: **Settings → Pages → Build and
   deployment → Source → GitHub Actions.**

4. **Update the sitemap line** in `public/robots.txt` to your real domain.

That's it. From then on, every push to `main` deploys automatically. Watch it
happen in the **Actions** tab.

### Custom domain

1. Create a file called `CNAME` in the `public/` folder containing only your
   domain, e.g. `ayushijoshi.com`
2. Set `SITE` to `https://ayushijoshi.com` and `BASE` to `'/'`
3. Point your domain's DNS at GitHub Pages, then set the domain in
   **Settings → Pages**

---

## Where everything lives

```
├── .github/workflows/deploy.yml   the auto-deploy
├── astro.config.mjs               SITE and BASE live here
├── public/                        files served as-is
│   ├── images/                    your photos and screenshots
│   ├── favicon.svg
│   ├── og-image.png               the social share card
│   ├── robots.txt
│   └── ayushi-joshi-resume.pdf    ← add your résumé here
├── scripts/generate-images.mjs    regenerates the share card
└── src/
    ├── content/                   ★ YOUR CONTENT
    │   ├── work/                  one file = one project
    │   ├── lab/                   one file = one short post
    │   └── writing/               one file = one article
    ├── content.config.ts          which fields each type allows
    ├── data/                      ★ YOUR SETTINGS
    │   ├── site.ts                name, email, links, nav, footer
    │   ├── about.ts               About page copy
    │   ├── experience.ts          the timeline
    │   ├── services.ts            services and tiers
    │   └── capabilities.ts        proof numbers + "What I do"
    ├── styles/
    │   ├── tokens.css             ★ colours, fonts, spacing
    │   └── global.css             base styles
    ├── components/                reusable pieces
    ├── layouts/                   the page shell
    └── pages/                     one file = one URL
```

---

## How to add a project

1. Go to `src/content/work/`
2. Copy `_TEMPLATE.md` and rename it. **The filename becomes the URL:**
   `brand-observatory.md` → `yoursite.com/work/brand-observatory`
   Use lowercase-with-hyphens, no spaces.
3. Fill in the fields at the top (they are all commented).
4. Write the case study underneath using the nine sections.
5. Set `draft: false`.
6. Commit and push.

The project now appears on the Work page, in the right group, with filters,
a case-study page, prev/next links and a social card. You did not touch any code.

### The nine sections

```
01 — The brief          What was the problem?
02 — The context        Audience, market, situation.
03 — The observation    What did you notice? Specific and slightly odd.
04 — The insight        What does that actually mean? ("…which means…")
05 — The strategy       What did you decide, and why not the obvious option?
06 — The work           Show the actual output.
07 — The result         Real numbers — or nothing, if it did not run.
08 — What I learned     What changed in how you think?
```

TL;DR is section 09 — it comes from the `tldr:` block in the frontmatter, so
it gets its own designed panel at the end.

Delete any section that has nothing real to say. A short honest case study
beats a long padded one.

### The `type` field — the one that really matters

```yaml
type: professional   # paid / client / employed work
type: independent    # you started it, nobody commissioned it
type: speculative    # a brand you do NOT work with
type: experiment     # a small personal test
```

This drives a coloured label everywhere the project appears. **Speculative work
also gets an automatic disclaimer** at the top of its case study saying nobody
commissioned it. Do not fight this — professional honesty is part of the brand,
and it is more persuasive than the alternative.

### Results: `metrics` vs `measurement`

```yaml
# Things that ACTUALLY happened. Real work only.
metrics:
  - value: '400%'
    label: weekly active user growth
    context: Cogent Infotech, over eight months

# What you WOULD measure. For work that never ran.
measurement:
  - Click-through by creative variant, to separate hook from offer
```

The template renders `metrics` as a results band, and `measurement` under the
heading **"What I would measure"**. There is deliberately **no way** to make
speculative work display invented results. That is a feature.

---

## How to move a project out of the Lab into Work

Change one word:

```yaml
status: building     # shows under "Currently in the lab"
```
```yaml
status: published    # now a full case study in Work
```

Then write the nine sections and add your `metrics`. Nothing else changes.

`status: planned` is the third option — for things that are queued but not started.

---

## How to add a Lab post

1. Copy `src/content/lab/_TEMPLATE.md`, rename it, fill it in, set `draft: false`.
2. 300–600 words is the right size. If it needs nine sections, it is a project,
   not a Lab post.

Reuse these categories so the list stays tidy: **Brand breakdown · Copy
experiment · Campaign idea · Ad test · Funnel breakdown · Marketing observation**.

---

## How to add a Writing entry

Copy `src/content/writing/_TEMPLATE.md`. Two kinds:

- **Written for this site** — leave `externalUrl` out and write the piece below
  the frontmatter. It gets its own page.
- **Published somewhere else** — set `externalUrl` and `publication`. The card
  links straight out, and no page is generated. You can leave the body empty.

---

## How to change the About page

Everything is in `src/data/about.ts`.

- `headline` and `standfirst` — the top of the page
- `chapters` — the numbered sections. Add, remove or reorder them freely; the
  page adapts. Each has a `num`, `title`, margin `note` and `body` (an array of
  paragraphs).
- `quickFacts` — the small dark strip
- `ai` — the "How I work with AI" section

---

## How to update experience

`src/data/experience.ts`. Newest first. Each role:

```ts
{
  org: 'Company',
  title: 'Your title',
  period: 'Jun 2026 – Jul 2026',
  start: '2026-06-01',
  summary: 'Two or three lines. Resist the bullet list.',
  highlights: ['…', '…'],
  caseStudy: 'jagroots-brand-launch',   // filename of the case study, no .md
}
```

`caseStudy` creates the "The work behind it →" link. Leave it out if there is
no case study yet.

---

## How to update services

`src/data/services.ts`. Services are grouped into tiers, **in the order you most
want to be hired for them**. To reprioritise something, move it to a different
tier.

Each service needs `deliverables` (what the client gets) and `proof` (links to
work where you did it). Keep the proof links honest — that is the whole point of
the section.

The last tier has `developing: true`, which renders it on a dark background as a
deliberate, visible statement rather than a hidden caveat. **Leave paid media
there until you have real hands-on spend behind you.** When that changes, move
the service into another tier and delete the `developing` flag.

---

## How to change your name, email, links and CTA

All in `src/data/site.ts`:

- `name`, `role`, `description` — identity and SEO
- `email`, `location`, `availability`
- `socials` — **anything still set to `'#'` is hidden from the footer
  automatically**, so placeholder links can never go live by accident
- `resume` — path to your PDF
- `lastUpdated` — the date in the footer
- `nav` and `navCta` — the menu
- `footer` — the closing copy
- `education`, `certifications` — deliberately kept small

---

## How to change the colours

`src/styles/tokens.css`, at the top. Change a value once and it updates everywhere.

```css
--c-ink: #17152b;        /* dark: authority, strategy */
--c-paper: #f7f1e7;      /* light: editorial, reading */
--c-pink: #f04a8a;       /* brand accent: personality */
--c-pink-deep: #c2185b;  /* the same pink, dark enough for body text */
--c-yellow: #f6c945;     /* action: buttons and CTAs */
```

**If you change `--c-pink`, change `--c-pink-deep` too.** The bright pink is not
dark enough to pass contrast requirements for small text, so the site uses the
deep version for links and body text. Keeping them in step is what keeps the
site readable.

The site aims for roughly **60% paper / 25% ink / 10% pink / 5% everything
else**, and each colour means something: pink = personality, yellow = action,
dark = authority, paper = reading. Colour carrying meaning is what stops it
becoming noise.

---

## How to change the fonts

Also `src/styles/tokens.css`:

```css
--ff-display: 'Fraunces Variable', Georgia, serif;   /* headlines */
--ff-body: 'Archivo Variable', system-ui, sans-serif; /* body text */
--ff-mono: 'Space Mono', monospace;                   /* small labels */
```

The fonts are self-hosted (no Google Fonts request) and loaded in
`src/layouts/BaseLayout.astro`. To swap one:

```bash
npm install @fontsource-variable/newfont
```

then change the `import` in `BaseLayout.astro` and the variable above.

---

## Images

See `public/images/README.md`. Short version:

- Put files in `public/images/`
- Reference them as `/images/work/thing.jpg` — leave `public` off
- Always write real alt text
- Resize before uploading; nothing needs to be wider than 1600px

**A project with no image is not a broken project.** The site draws a
typographic panel in the project's accent colour instead. That is a designed
fallback, so you can publish before you have visuals.

---

## Rules the site enforces

These are built into the code rather than left to willpower:

- **A project's `type` label appears everywhere it does.** Speculative work
  cannot be mistaken for client work.
- **Speculative work gets an automatic disclaimer** and has no code path for
  displaying results — only "What I would measure".
- **Every metric on the homepage carries its context** and links to the work it
  came from.
- **Every service links to proof.**
- **Placeholder social links are hidden** rather than shipped as dead links.
- **Bad frontmatter fails the build** with the exact file and field named, so a
  typo cannot silently publish something broken.
- **Reduced motion is honoured globally.** Every animation stops.
- **Nothing is hidden from people without JavaScript** — scroll animations only
  activate once the script confirms it can run them.

---

## Things that need your attention

A short list of what only you can supply:

- [ ] **Your résumé PDF** → save it as `public/ayushi-joshi-resume.pdf`
      (several buttons link to it; until it exists they 404)
- [ ] **`SITE` and `BASE`** in `astro.config.mjs` — see [Deploying](#deploying)
- [ ] **LinkedIn and Upwork URLs** in `src/data/site.ts` — currently `'#'`,
      so they are hidden until you set them
- [ ] **Confirm the public email** in `src/data/site.ts`
- [ ] **Photos and work screenshots** → `public/images/`
- [ ] **Read the case-study prose and make it yours.** The case studies are
      built strictly from the facts in your résumé, but the connective
      reasoning is a first draft. It should sound like you, and only you can
      confirm the observations are the ones you actually had.
- [ ] **The three Lab posts and the essay are starter drafts** in your voice —
      keep, rewrite or delete them.
- [ ] Update `robots.txt` with your real domain

---

Built with [Astro](https://astro.build). Fonts: Fraunces, Archivo, Space Mono.
