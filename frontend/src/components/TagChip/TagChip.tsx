// Personal Palette – Tag chip hinting at tone and context.
import cls from '../../lib/cls';
import styles from './TagChip.module.css';

type TagChipProps = {
  label: string;
  tone?: 'primary' | 'accent' | 'neutral';
};

const TagChip = ({ label, tone = 'neutral' }: TagChipProps) => {
  return <span className={cls(styles.chip, styles[tone])}>{label}</span>;
};

export default TagChip;
