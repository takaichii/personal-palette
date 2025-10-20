// Personal Palette – Entry API abstraction to be swapped for live services later.
import { mockEntries } from './__mocks__/data';
import { Entry, EntryFilter } from './types';

let entries = [...mockEntries];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const applyFilter = (items: Entry[], filter?: EntryFilter) => {
  if (!filter) return items;

  return items.filter((entry) => {
    const matchesSearch = filter.q
      ? entry.title.toLowerCase().includes(filter.q.toLowerCase()) ||
        entry.reflection?.toLowerCase().includes(filter.q.toLowerCase())
      : true;
    const matchesType = filter.type ? entry.type === filter.type : true;
    const matchesTag = filter.tag ? entry.tags.includes(filter.tag) : true;
    const matchesEmotion = filter.emotion
      ? entry.emotions.some((emotion) => emotion.name === filter.emotion)
      : true;
    const experiencedDate = new Date(entry.experiencedAt).getTime();
    const from = filter.from ? new Date(filter.from).getTime() : null;
    const to = filter.to ? new Date(filter.to).getTime() : null;
    const matchesDate =
      (from === null || experiencedDate >= from) && (to === null || experiencedDate <= to);
    const matchesImpact =
      filter.impactGte !== undefined ? (entry.impactScore ?? 0) >= filter.impactGte : true;

    return matchesSearch && matchesType && matchesTag && matchesEmotion && matchesDate && matchesImpact;
  });
};

export const getEntries = async (filter?: EntryFilter): Promise<Entry[]> => {
  await delay(200);
  return applyFilter(entries, filter).map((entry) => ({ ...entry }));
};

export const getEntry = async (id: string): Promise<Entry | null> => {
  await delay(150);
  const entry = entries.find((item) => item.id === id);
  return entry ? { ...entry } : null;
};

export const createEntry = async (payload: Partial<Entry>): Promise<{ id: string }> => {
  await delay(250);
  const id = `entry-${Date.now()}`;
  const timestamp = new Date().toISOString();
  const entry: Entry = {
    id,
    title: payload.title ?? 'Untitled reflection',
    type: payload.type ?? 'other',
    experiencedAt: payload.experiencedAt ?? timestamp,
    reflection: payload.reflection,
    highlight: payload.highlight,
    impactScore: payload.impactScore,
    locationText: payload.locationText,
    timeOfDay: payload.timeOfDay ?? 'unknown',
    season: payload.season ?? 'unknown',
    privacy: payload.privacy ?? 'private',
    tags: payload.tags ?? [],
    emotions: payload.emotions ?? [],
    creators: payload.creators,
    createdAt: timestamp,
    updatedAt: timestamp
  };
  entries = [entry, ...entries];
  return { id };
};

export const updateEntry = async (id: string, payload: Partial<Entry>): Promise<void> => {
  await delay(200);
  entries = entries.map((entry) =>
    entry.id === id
      ? {
          ...entry,
          ...payload,
          updatedAt: new Date().toISOString()
        }
      : entry
  );
};

export const deleteEntry = async (id: string): Promise<void> => {
  await delay(150);
  entries = entries.filter((entry) => entry.id !== id);
};
