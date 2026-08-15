/**
 * Generates the raster images that have to be PNG:
 *   public/og-image.png          1200x630, the social share card
 *   public/apple-touch-icon.png  180x180
 *
 * Run with:  npm run images
 *
 * You only need to re-run this if you change the wording on the share
 * card or the site colours. The PNGs are committed, so the normal
 * build and the GitHub Actions deploy never call this script.
 *
 * Uses sharp, which ships with Astro.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, 'public');

const INK = '#17152B';
const PAPER = '#F7F1E7';
const PINK = '#F04A8A';
const YELLOW = '#F6C945';

/* Serif stack chosen for what is actually installed on most machines,
   since the SVG renderer cannot see the site's webfonts. */
/* Single quotes inside — these get interpolated into double-quoted
   SVG attributes, so double quotes here would close the attribute. */
const SERIF = "Georgia, 'Times New Roman', serif";
const MONO = "'Courier New', monospace";

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>

  <!-- ruled paper -->
  <g stroke="${INK}" stroke-opacity="0.07" stroke-width="1">
    ${Array.from({ length: 22 }, (_, i) => `<line x1="0" y1="${i * 29 + 14}" x2="1200" y2="${i * 29 + 14}"/>`).join('')}
  </g>

  <!-- top rule + eyebrow -->
  <rect x="72" y="64" width="1056" height="3" fill="${INK}"/>
  <text x="72" y="106" font-family="${MONO}" font-size="21" letter-spacing="5" fill="${PINK}">AYUSHI JOSHI</text>
  <text x="1128" y="106" font-family="${MONO}" font-size="21" letter-spacing="5" fill="${INK}" fill-opacity="0.55" text-anchor="end">MARKETING PORTFOLIO</text>

  <!-- headline. Sizes are tuned so the longest line clears the 1128
       right margin in Georgia — check the PNG if you edit the words. -->
  <text x="72" y="268" font-family="${SERIF}" font-size="96" font-weight="700" fill="${INK}">I notice things.</text>
  <text x="72" y="366" font-family="${SERIF}" font-size="78" font-weight="700" fill="${INK}" fill-opacity="0.55">Then I make something</text>
  <text x="72" y="452" font-family="${SERIF}" font-size="78" font-weight="700" fill="${INK}" fill-opacity="0.55">out of them.</text>

  <!-- highlighter under "notice": sits on the baseline, not through it -->
  <rect x="126" y="250" width="214" height="18" fill="${PINK}" fill-opacity="0.34"/>

  <!-- bottom rule + capability chain -->
  <rect x="72" y="530" width="1056" height="3" fill="${INK}"/>
  <text x="72" y="572" font-family="${MONO}" font-size="20" letter-spacing="3" fill="${INK}" fill-opacity="0.7">BRAND &#183; CAMPAIGNS &#183; CONTENT &#183; GROWTH &#183; AI</text>

  <rect x="1040" y="546" width="88" height="10" fill="${YELLOW}"/>
</svg>`;

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${INK}"/>
  <path d="M13 51 L32 13 L51 51" fill="none" stroke="${PAPER}" stroke-width="7.5" stroke-linecap="square"/>
  <path d="M22 40 L42 40" fill="none" stroke="${PAPER}" stroke-width="7.5" stroke-linecap="square"/>
  <circle cx="53" cy="12" r="6.5" fill="${PINK}"/>
</svg>`;

await mkdir(out, { recursive: true });

await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(path.join(out, 'og-image.png'));
await sharp(Buffer.from(iconSvg)).png({ compressionLevel: 9 }).toFile(path.join(out, 'apple-touch-icon.png'));

/* A .ico for older browsers that ignore the SVG favicon. */
await sharp(Buffer.from(iconSvg)).resize(32, 32).png().toFile(path.join(out, 'favicon-32.png'));

await writeFile(
  path.join(out, 'og-image.svg'),
  ogSvg,
  'utf8',
);

console.log('Wrote og-image.png, og-image.svg, apple-touch-icon.png, favicon-32.png');
