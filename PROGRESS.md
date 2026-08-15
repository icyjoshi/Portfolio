# Build progress log

Working checkpoint file. If a session is interrupted, read this + `git log --oneline`
to see exactly where the build stopped, then continue from the first unchecked milestone.

**Stack decision:** Astro 5, static output (`output: 'static'`), zero UI framework.
Chosen for: GitHub Pages compatibility, real component reuse, content collections
(one Markdown file = one project), ~0 KB JS shipped by default, native sitemap support.

---

## Milestones

- [x] **M0** - Repo init, progress log, git baseline
- [x] **M1** - Astro scaffold, config, deps installed (astro 5.18.2)
- [x] **M2** - Design system: tokens, global CSS, type scale, self-hosted fonts
- [x] **M3** - Base layout + core components (Nav, Footer, Button, Tag, RailSection)
- [x] **M4** - Content architecture: collection schemas + `src/data/*` files
- [x] **M5** - Content authoring: 11 work entries, 3 lab posts, 1 writing piece, 3 templates
- [x] **M6** - Homepage
- [x] **M7** - Work index (filters) + case-study template
- [ ] **M8** - Services, Lab, Writing, About, Contact, 404 pages
- [ ] **M9** - SEO: favicon, OG image, robots.txt, 404
- [ ] **M10** - GitHub Pages workflow + README
- [ ] **M11** - Build, responsive + a11y QA pass

---

## Notes / decisions

- Node 24.19.0 and Git 2.55 are installed but **not on PATH** in this shell.
  Prefix commands with:
  `$env:Path = "C:\Program Files\nodejs;C:\Program Files\Git\cmd;" + $env:Path`
- Do NOT edit Markdown via PowerShell `Set-Content` - it double-encodes UTF-8
  punctuation. Use the Write/Edit tools.
- Base path for GitHub Pages lives in one place: `astro.config.mjs` (`SITE` / `BASE`).
- Fonts: Fraunces (display, wonk axis), Archivo (body), Space Mono (labels).
  Self-hosted via fontsource, latin subset, ~94 KB total.
- Real metrics permitted (resume only): 378K+ community members, 400% WAU growth,
  78% lead conversion (91 of 117 queries), 18,000+ queries, 2x launch-campaign views,
  3x traffic after relaunch, 400+ follower growth, 30+ blogs, 60+ posts, 7 campaigns.
- Paid media (Google/Meta Ads) must always read as *developing / theoretical*.
- Speculative work must never render a results section - the case-study template
  has no code path for it, only "What I would measure".

---

## Open items for Ayushi (assets I cannot create)

Tracked here so the list survives a context loss. Final version goes in README.

- [ ] Profile / casual photos -> `public/images/`
- [ ] Resume PDF -> `public/ayushi-joshi-resume.pdf`
- [ ] GitHub username + repo name (sets `SITE` / `BASE` in `astro.config.mjs`)
- [ ] LinkedIn + Upwork URLs (currently hidden from the footer until set)
- [ ] Work screenshots / campaign creatives for case studies
- [ ] Read the case-study prose and make the voice hers
