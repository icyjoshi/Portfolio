# Build progress log

Working checkpoint file. If a session is interrupted, read this + `git log --oneline`
to see exactly where the build stopped, then continue from the first unchecked milestone.

**Stack decision:** Astro 5, static output (`output: 'static'`), zero UI framework.
Chosen for: GitHub Pages compatibility, real component reuse, content collections
(one Markdown file = one project), ~0 KB JS shipped by default, native sitemap support.

**Convention:** `[ADD]` in content = a clearly-marked placeholder Ayushi must fill.
Never fabricate metrics, clients, or results.

---

## Milestones

- [x] **M0** — Repo init, progress log, git baseline
- [x] **M1** — Astro scaffold, `package.json`, `astro.config.mjs`, deps installed (astro 5.18.2)
- [ ] **M2** — Design system: tokens, global CSS, type scale, fonts
- [ ] **M3** — Base layout + core components (Nav, Footer, Button, Badge, SectionHeading)
- [ ] **M4** — Content architecture: collection schemas + `src/data/*` files
- [ ] **M5** — Content authoring: work case studies, lab, writing, services, experience, about
- [ ] **M6** — Homepage
- [ ] **M7** — Work index (filters) + case-study template
- [ ] **M8** — Services, Lab, Writing, About, Contact, 404 pages
- [ ] **M9** — SEO: meta, OG, sitemap, robots, favicon
- [ ] **M10** — GitHub Pages workflow + README
- [ ] **M11** — Build, responsive + a11y QA pass

---

## Notes / decisions

- Node 24.19.0 and Git 2.55 are installed but **not on PATH** in this shell.
  Prefix commands with:
  `$env:Path = "C:\Program Files\nodejs;C:\Program Files\Git\cmd;" + $env:Path`
- Base path for GitHub Pages lives in **one** place: `astro.config.mjs` (`SITE` / `BASE`).
- Real metrics permitted (from resume only): 378K+ community members, 400% WAU growth,
  78% lead conversion (18,000+ queries handled), 2x launch-campaign views, 3x traffic
  after relaunch, 400+ follower growth, 30+ B2B blogs, 60+ social posts, 7 campaigns.
- Paid media (Google/Meta Ads) must always read as *developing / theoretical*.

---

## Open items for Ayushi (assets I cannot create)

Tracked here so the list survives a context loss. Final version goes in README.

- [ ] Profile / casual photos → `public/images/`
- [ ] Resume PDF → `public/ayushi-joshi-resume.pdf`
- [ ] GitHub username + repo name (sets `SITE` / `BASE` in `astro.config.mjs`)
- [ ] LinkedIn + Upwork URLs, public email
- [ ] Work screenshots / campaign creatives for case studies
