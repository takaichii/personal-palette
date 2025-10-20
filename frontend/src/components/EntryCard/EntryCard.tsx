// Personal Palette – Entry preview card hinting at reflective memories.
import { Link } from 'react-router-dom';

import { Entry } from '../../features/entries/types';
import { formatDate } from '../../lib/date';
import cls from '../../lib/cls';
import TagChip from '../TagChip/TagChip';
import ContentTypeIcon from '../Icon/ContentTypeIcon';
import styles from './EntryCard.module.css';

type EntryCardProps = {
  entry: Entry;
};

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <Link to={`/entries/${entry.id}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <ContentTypeIcon type={entry.type} className={styles.icon} />
        </div>
        <div>
          <h3 className={styles.title}>{entry.title}</h3>
          <p className={styles.meta}>{formatDate(entry.experiencedAt)}</p>
        </div>
      </div>
      <div className={styles.tags}>
        {entry.tags.slice(0, 4).map((tag) => (
          <TagChip key={tag} label={tag} tone="neutral" />
        ))}
        {entry.tags.length > 4 ? <span className={styles.more}>+{entry.tags.length - 4}</span> : null}
      </div>
      {entry.reflection ? (
        <p className={styles.preview}>{entry.reflection.slice(0, 120)}...</p>
      ) : (
        <p className={cls(styles.preview, styles.placeholder)}>No reflection added yet.</p>
      )}
    </Link>
  );
};

export default EntryCard;
