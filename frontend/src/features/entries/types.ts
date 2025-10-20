// Personal Palette – Entry domain types encapsulating reflective data shapes.
export type Entry = {
  id: string;
  title: string;
  type: 'book' | 'movie' | 'drama' | 'anime' | 'music' | 'event' | 'learning' | 'other';
  experiencedAt: string;
  reflection?: string;
  highlight?: string;
  impactScore?: number;
  locationText?: string;
  timeOfDay?: 'morning' | 'day' | 'evening' | 'night' | 'unknown';
  season?: 'spring' | 'summer' | 'autumn' | 'winter' | 'unknown';
  privacy: 'private' | 'unlisted' | 'public';
  tags: string[];
  emotions: { name: string; intensity?: number }[];
  creators?: { name: string; role?: string }[];
  createdAt: string;
  updatedAt: string;
};

export type EntryFilter = {
  q?: string;
  type?: Entry['type'];
  tag?: string;
  emotion?: string;
  from?: string;
  to?: string;
  impactGte?: number;
};
