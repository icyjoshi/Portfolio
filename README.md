# Ayushi Joshi — portfolio

Live at **https://icyjoshi.github.io/Portfolio/**

A single-page marketing portfolio. Plain HTML, CSS and JavaScript — no build
step, no dependencies, nothing to install. Push to `main` and it publishes
itself in about a minute.

---

## The five files that matter

| File | What it is |
|---|---|
| `index.html` | The entire page — all the words live here |
| `styles.css` | How it looks |
| `script.js` | The mobile menu and the click-to-enlarge images |
| `assets/previews/` | Work sample images |
| `assets/logos/` | Timeless Studios and Marketing Forum marks |

Also in the root: `og-image.png` (the picture shown when the link is shared),
the favicons, `robots.txt`, and `ayushi-joshi-resume.pdf`.

## Changing something

1. Open `index.html`
2. Find the words you want to change and change them
3. Commit and push

That's it. There's no step four. Within a minute the live site updates.

To check your work before pushing, open `index.html` by double-clicking it.
It runs straight in a browser with no server.

## How a change reaches the internet

Pushing to `main` starts the workflow in `.github/workflows/deploy.yml`, which
uploads this folder to GitHub Pages. You can watch it run, and see whether it
worked, in the repository's **Actions** tab.

## Adding a new case study

Each case study is one `<section class="case-section">` block in `index.html`.
Copy an existing one, change the text, and add its card to the
`.project-grid` near the top so it gets a link.

The sections follow a fixed shape, and it's worth keeping:

- **A / THE THINKING** — the decision you made and why
- **B / MY CONTRIBUTION** — what you actually did, as distinct from the team
- **C / THE EVIDENCE** — what can be shown, and plainly what it does not prove

## House rules for this site

These are deliberate. Breaking them makes the site weaker, not freer.

- **Every number carries its source and its window.** "3× traffic" is a claim;
  "3× traffic in the ten days after relaunch, tracked in SEMrush" is evidence.
- **Separate what you did from what the team did.** Where a positioning line or
  a result predates you, say so — it reads as confidence, not modesty.
- **No sentence fragments in body copy.** Headlines may break this; paragraphs
  may not.
- **Nothing goes up without a work sample behind it.** Entries that can only be
  described, not shown, belong on the CV instead.
- **Don't explain the joke.** If a line needs its own punchline spelled out, the
  line isn't working.

## Notes

- This is a *project* site, so it is served from `/Portfolio/`, not the domain
  root. All links are relative, which is what makes that work — if you add a
  link, keep it relative (`assets/...`, not `/assets/...`).
- To use a custom domain later: add a `CNAME` file containing just the domain,
  then point the DNS at GitHub Pages and set the domain in Settings → Pages.
