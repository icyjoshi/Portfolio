import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* ────────────────────────────────────────────────────────────────
   DEPLOYMENT SETTINGS — the only two lines you need to touch.

   If your repo is  github.com/<you>/<you>.github.io   (user site):
       SITE = 'https://<you>.github.io'
       BASE = '/'

   If your repo is  github.com/<you>/portfolio         (project site):
       SITE = 'https://<you>.github.io'
       BASE = '/portfolio/'          ← must match the repo name

   If you buy a custom domain (e.g. ayushijoshi.com):
       SITE = 'https://ayushijoshi.com'
       BASE = '/'
       …and put the domain in  public/CNAME
   ──────────────────────────────────────────────────────────────── */
const SITE = 'https://icyjoshi.github.io';
const BASE = '/Portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
