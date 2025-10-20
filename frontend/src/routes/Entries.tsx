// Personal Palette – Entries page presenting filters and cards for mindful review.
import { FormEvent, useMemo, useState } from 'react';

import EntryCard from '../components/EntryCard/EntryCard';
import TagChip from '../components/TagChip/TagChip';
import { useEntries } from '../features/entries/hooks';
import { EntryFilter } from '../features/entries/types';
import styles from './Entries.module.css';

const defaultFilter: EntryFilter = {};

const Entries = () => {
  const [filter, setFilter] = useState<EntryFilter>(defaultFilter);
  const { data: entries, loading } = useEntries(filter);

  const uniqueTags = useMemo(() => {
    const tagSet = new Set<string>();
    entries.forEach((entry) => entry.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).slice(0, 12);
  }, [entries]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setFilter({
      q: (formData.get('q') as string) || undefined,
      type: (formData.get('type') as EntryFilter['type']) || undefined,
      tag: (formData.get('tag') as string) || undefined,
      from: (formData.get('from') as string) || undefined,
      to: (formData.get('to') as string) || undefined
    });
  };

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Entries</h1>
        <p>Filter reflections by type, tags, and timeframe to revisit what matters.</p>
        <form className={styles.filters} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label>
              キーワード
              <input name="q" type="search" placeholder="Search reflections" />
            </label>
            <label>
              Type
              <select name="type" defaultValue="">
                <option value="">All</option>
                <option value="book">Book</option>
                <option value="movie">Movie</option>
                <option value="drama">Drama</option>
                <option value="anime">Anime</option>
                <option value="music">Music</option>
                <option value="event">Event</option>
                <option value="learning">Learning</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Tag
              <input name="tag" list="tagOptions" placeholder="Select tag" />
            </label>
            <datalist id="tagOptions">
              {uniqueTags.map((tag) => (
                <option value={tag} key={tag} />
              ))}
            </datalist>
          </div>
          <div className={styles.fieldGroup}>
            <label>
              From
              <input type="date" name="from" />
            </label>
            <label>
              To
              <input type="date" name="to" />
            </label>
            <button type="submit">Apply filters</button>
          </div>
        </form>
      </header>
      <div className={styles.tagCloud}>
        {uniqueTags.map((tag) => (
          <button key={tag} className={styles.tagButton} onClick={() => setFilter((prev) => ({ ...prev, tag }))}>
            <TagChip label={tag} tone="primary" />
          </button>
        ))}
      </div>
      {loading ? (
        <p className={styles.status}>Loading…</p>
      ) : entries.length === 0 ? (
        <p className={styles.status}>No entries match these filters yet.</p>
      ) : (
        <div className={styles.grid}>
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Entries;
