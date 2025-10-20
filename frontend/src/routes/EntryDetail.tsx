// Personal Palette – Entry detail page honoring full reflections.
import { useParams } from 'react-router-dom';

import TagChip from '../components/TagChip/TagChip';
import { useDeleteEntry, useEntry } from '../features/entries/hooks';
import { formatDate } from '../lib/date';
import styles from './EntryDetail.module.css';

const EntryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: entry, loading } = useEntry(id);
  const { remove, loading: deleting } = useDeleteEntry(id ?? '');

  if (loading) return <p className={styles.status}>Loading entry…</p>;
  if (!entry) return <p className={styles.status}>Entry not found.</p>;

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div>
          <h1>{entry.title}</h1>
          <p className={styles.meta}>{formatDate(entry.experiencedAt)}</p>
        </div>
        <button className={styles.delete} onClick={remove} disabled={deleting}>
          {deleting ? 'Removing…' : 'Delete'}
        </button>
      </header>
      <section className={styles.tags}>
        {entry.tags.map((tag) => (
          <TagChip key={tag} label={tag} tone="accent" />
        ))}
      </section>
      {entry.highlight ? (
        <blockquote className={styles.highlight}>
          <p>{entry.highlight}</p>
        </blockquote>
      ) : null}
      <section className={styles.reflection}>
        <p>{entry.reflection}</p>
      </section>
      <footer className={styles.footer}>
        <span>Impact score: {entry.impactScore ?? '–'}</span>
        <span>Updated: {formatDate(entry.updatedAt)}</span>
      </footer>
      {/* TODO: Layer breadcrumbs and edit CTA once flows stabilize. */}
    </article>
  );
};

export default EntryDetail;
