/**
 * Build-time checks for files in /public.
 *
 * Used so the site never ships a link to something that isn't there.
 * The résumé is the case that matters: several buttons point at it, and
 * a portfolio whose "View résumé" button 404s undoes a lot of goodwill.
 * Until the PDF exists, those buttons simply don't render.
 *
 * This runs at build time only — it is not shipped to the browser.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const publicDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
  'public',
);

/** True if the given /public path (e.g. '/resume.pdf') actually exists. */
export function publicFileExists(publicPath: string): boolean {
  if (!publicPath) return false;
  return existsSync(path.join(publicDir, publicPath.replace(/^\/+/, '')));
}
