# Build progress log

Checkpoint file from the initial build. Kept in the repo so the history of
decisions survives. If you pick this up in a new session, read this plus
`git log --oneline`.

**Stack:** Astro 5, static output, no UI framework. Chosen for GitHub Pages
compatibility, real component reuse, content collections (one Markdown file =
one project), ~0 KB of external JS, native sitemap support.

---

## Milestones — all complete

- [x] **M0** - Repo init, progress log, git baseline
- [x] **M1** - Astro scaffold, config, deps (astro 5.18.2)
- [x] **M2** - Design system: tokens, global CSS, type scale, self-hosted fonts
- [x] **M3** - Base layout + core components (Nav, Footer, Button, Tag, RailSection)
- [x] **M4** - Content architecture: collection schemas + `src/data/*`
- [x] **M5** - Content: 12 work entries, 3 lab posts, 1 essay, 3 templates
- [x] **M6** - Homepage
- [x] **M7** - Work index (filters) + case-study template
- [x] **M8** - Services, Lab, Writing, About, Contact, 404
- [x] **M9** - Favicon, OG image, robots.txt
- [x] **M10** - GitHub Pages workflow + README
- [x] **M11** - Build, responsive + a11y QA pass

**Final state:** 24 pages, `astro check` 0 errors / 0 warnings / 0 hints,
HTML audit clean, 37 KB CSS, 0 KB external JS (all scripts inlined),
~86 KB of fonts actually downloaded (latin subsets).

---

## Verified during QA

- Rendered and inspected at 320 / 390 / 768 / 1440 px. No horizontal overflow.
- Every page has exactly one `h1` and an in-order heading outline.
- Every page has meta description, canonical, `og:image`, `lang`.
- No `href="#"` placeholders and no localhost URLs in the built output.
- All images have alt text.
- `_TEMPLATE.md` files are excluded from the build (glob `**/[^_]*.md`).

---

## Notes for future sessions

- Node 24.19.0 and Git 2.55 are installed but **not on PATH** in the Claude
  shell. Prefix commands with:
  `$env:Path = "C:\Program Files\nodejs;C:\Program Files\Git\cmd;" + $env:Path`
- Do NOT edit Markdown via PowerShell `Set-Content` — it double-encodes UTF-8
  punctuation. Use the Write/Edit tools.
- `SITE` / `BASE` for GitHub Pages live in exactly one place: `astro.config.mjs`.
- Fonts: Fraunces (display, WONK axis), Archivo (body), Space Mono (labels).
- Screenshots: Edge headless works, but Windows clamps `--window-size` below
  ~500px. For true mobile widths, load a page of `<iframe>`s over http and
  screenshot that instead. Use `--virtual-time-budget=7000` so scroll-reveal
  animations settle, and a unique `--user-data-dir` per invocation.

## Content rules encoded in the build

- Speculative work renders an automatic disclaimer and has **no code path** for
  displaying results — only "What I would measure".
- Placeholder social links (`'#'`) are hidden from the footer.
- Résumé links only render if `public/ayushi-joshi-resume.pdf` actually exists.
- Bad frontmatter fails the build naming the exact file and field.

## Real metrics permitted (résumé only)

378K+ community members · 400% WAU growth · 78% lead conversion (91 of 117
queries) · 18,000+ queries · 2x launch-campaign views · 3x traffic after
relaunch · 400+ follower growth · 30+ blogs · 60+ posts · 7 campaigns.

Paid media (Google/Meta Ads) must always read as *developing / theoretical*.

---

## Open items for Ayushi

See the "Things that need your attention" section of README.md — that is the
canonical list.
