/**
 * Content queries.
 *
 * Every page goes through these helpers instead of calling
 * getCollection() directly, so draft filtering and sort order are
 * defined once and can never drift between pages.
 */

import { getCollection, type CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'work'>;
export type LabEntry = CollectionEntry<'lab'>;
export type WritingEntry = CollectionEntry<'writing'>;

const isLive = (entry: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !entry.data.draft;

/* ---------- Work ---------- */

/** Everything that isn't a draft, newest and most-prioritised first. */
export async function getAllWork(): Promise<WorkEntry[]> {
  const entries = await getCollection('work', isLive);
  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/** Finished projects — these get case-study pages and appear in Work. */
export async function getPublishedWork(): Promise<WorkEntry[]> {
  return (await getAllWork()).filter((e) => e.data.status === 'published');
}

/** Homepage: the 3–5 strongest pieces. */
export async function getFeaturedWork(limit = 4): Promise<WorkEntry[]> {
  const published = await getPublishedWork();
  const featured = published.filter((e) => e.data.featured);
  return (featured.length ? featured : published).slice(0, limit);
}

/** "Currently in the lab" — in progress or queued, no case study yet. */
export async function getInProgressWork(): Promise<WorkEntry[]> {
  return (await getAllWork()).filter((e) => e.data.status !== 'published');
}

/** Work grouped by type, in the order the Work page displays them. */
export const workGroups = [
  {
    id: 'professional',
    title: 'Professional work',
    note: 'Paid roles. Real clients, real constraints, real numbers.',
  },
  {
    id: 'independent',
    title: 'Independent projects',
    note: 'Self-initiated. Nobody asked. I did it anyway.',
  },
  {
    id: 'speculative',
    title: 'Speculative work',
    note: 'Brands I do not work with. Strategy I would pitch if I did.',
  },
  {
    id: 'experiment',
    title: 'Experiments',
    note: 'Smaller tests and ideas that did not need a whole case study.',
  },
] as const;

/* ---------- Lab ---------- */

export async function getLabPosts(): Promise<LabEntry[]> {
  const entries = await getCollection('lab', isLive);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/* ---------- Writing ---------- */

export async function getWriting(): Promise<WritingEntry[]> {
  const entries = await getCollection('writing', isLive);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/* ---------- Labels ---------- */

/** Human labels for project types. The distinction is non-negotiable:
 *  speculative work must never be able to read as client work. */
export const TYPE_LABEL: Record<string, string> = {
  professional: 'Client / professional',
  independent: 'Independent',
  speculative: 'Speculative',
  experiment: 'Personal experiment',
};

/** Short version, for tight card corners. */
export const TYPE_LABEL_SHORT: Record<string, string> = {
  professional: 'Professional',
  independent: 'Independent',
  speculative: 'Speculative',
  experiment: 'Experiment',
};

export const STATUS_LABEL: Record<string, string> = {
  published: 'Live',
  building: 'In progress',
  planned: 'Queued',
};

/* ---------- Formatting ---------- */

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Rough reading time. Used as a courtesy label, not a headline. */
export function readingTime(body: string | undefined): string {
  const words = (body ?? '').trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

/** Unique, sorted values of a field across entries — powers filters. */
export function uniqueValues<T>(items: T[], pick: (item: T) => string[] | string): string[] {
  const set = new Set<string>();
  for (const item of items) {
    const value = pick(item);
    if (Array.isArray(value)) value.forEach((v) => v && set.add(v));
    else if (value) set.add(value);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}
