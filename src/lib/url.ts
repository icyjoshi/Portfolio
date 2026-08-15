/**
 * Base-path-safe URL helpers.
 *
 * GitHub Pages project repos are served from a subfolder
 * (e.g. /portfolio/), so every internal link and asset path has to be
 * prefixed. Astro exposes that prefix as import.meta.env.BASE_URL,
 * which comes from `base` in astro.config.mjs.
 *
 * Rule for the whole codebase: never write a raw internal href or
 * src. Always go through url() or asset().
 */

const BASE = import.meta.env.BASE_URL;

/** Join the configured base path with an internal path. */
export function url(path = '/'): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  const joined = `${base}${clean}`;
  return joined === '' ? '/' : joined;
}

/** Same thing, named for assets in /public so intent stays readable. */
export function asset(path: string): string {
  return url(path);
}

/**
 * True when `current` (a pathname) is inside `target`.
 * Used for aria-current on navigation.
 */
export function isActive(current: string, target: string): boolean {
  const strip = (p: string) => {
    const withoutBase = p.startsWith(BASE) ? p.slice(BASE.length) : p;
    return `/${withoutBase}`.replace(/\/+/g, '/').replace(/\/$/, '');
  };
  const c = strip(current);
  const t = strip(target);
  if (t === '' || t === '/') return c === '' || c === '/';
  return c === t || c.startsWith(`${t}/`);
}
