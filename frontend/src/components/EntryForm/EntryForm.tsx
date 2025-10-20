// Personal Palette – Entry form nurturing mindful journaling interactions.
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { Entry } from '../../features/entries/types';
import cls from '../../lib/cls';
import styles from './EntryForm.module.css';

type EntryFormProps = {
  mode: 'create' | 'edit';
  entry?: Entry;
  onSubmit: (values: Partial<Entry>) => Promise<void> | void;
  isSubmitting?: boolean;
};

type FormState = {
  title: string;
  type: Entry['type'];
  experiencedAt: string;
  reflection: string;
  highlight: string;
  impactScore: number;
  tags: string;
  emotions: string;
};

const defaultState: FormState = {
  title: '',
  type: 'other',
  experiencedAt: new Date().toISOString().split('T')[0],
  reflection: '',
  highlight: '',
  impactScore: 3,
  tags: '',
  emotions: ''
};

const EntryForm = ({ mode, entry, onSubmit, isSubmitting }: EntryFormProps) => {
  const [state, setState] = useState<FormState>(() => {
    if (!entry) {
      return defaultState;
    }

    return {
      title: entry.title,
      type: entry.type,
      experiencedAt: entry.experiencedAt.slice(0, 10),
      reflection: entry.reflection ?? '',
      highlight: entry.highlight ?? '',
      impactScore: entry.impactScore ?? 3,
      tags: entry.tags.join(', '),
      emotions: entry.emotions.map((emotion) => emotion.name).join(', ')
    };
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const tagList = useMemo(
    () =>
      state.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    [state.tags]
  );

  const emotionList = useMemo(
    () =>
      state.emotions
        .split(',')
        .map((emotion) => emotion.trim())
        .filter(Boolean),
    [state.emotions]
  );

  const handleChange = (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        key === 'impactScore' ? Number(event.target.value) : event.target.value;
      setState((prev) => ({ ...prev, [key]: value }));
    };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!state.title.trim()) {
      nextErrors.title = 'Title is required to anchor the memory.';
    }

    if (state.title.length > 120) {
      nextErrors.title = 'Title can be at most 120 characters to stay concise.';
    }

    if (!state.reflection.trim()) {
      nextErrors.reflection = 'Reflection helps crystallize learning; please add a note.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    await onSubmit({
      title: state.title.trim(),
      type: state.type,
      experiencedAt: new Date(state.experiencedAt).toISOString(),
      reflection: state.reflection.trim(),
      highlight: state.highlight.trim() || undefined,
      impactScore: state.impactScore,
      tags: tagList,
      emotions: emotionList.map((name) => ({ name })),
      privacy: entry?.privacy ?? 'private'
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset disabled={isSubmitting} className={styles.fieldset}>
        <legend className={styles.legend}>
          {mode === 'create' ? 'Create a new reflection' : 'Edit reflection'}
        </legend>
        <label className={styles.label}>
          Title
          <input
            className={cls(styles.input, errors.title && styles.inputError)}
            value={state.title}
            onChange={handleChange('title')}
            maxLength={150}
            required
          />
          {errors.title ? <span className={styles.error}>{errors.title}</span> : null}
        </label>
        <label className={styles.label}>
          Type
          <select className={styles.select} value={state.type} onChange={handleChange('type')}>
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
        <label className={styles.label}>
          Experienced At
          <input
            type="date"
            className={styles.input}
            value={state.experiencedAt}
            onChange={handleChange('experiencedAt')}
            required
          />
        </label>
        <label className={styles.label}>
          Reflection
          <textarea
            className={cls(styles.textarea, errors.reflection && styles.inputError)}
            value={state.reflection}
            onChange={handleChange('reflection')}
            rows={6}
            required
          />
          {errors.reflection ? (
            <span className={styles.error}>{errors.reflection}</span>
          ) : null}
        </label>
        <label className={styles.label}>
          Highlight
          <textarea
            className={styles.textarea}
            value={state.highlight}
            onChange={handleChange('highlight')}
            rows={3}
            placeholder="A short quote or insight worth revisiting."
          />
        </label>
        <label className={styles.label}>
          Impact Score
          <input
            type="range"
            min={0}
            max={5}
            className={styles.range}
            value={state.impactScore}
            onChange={handleChange('impactScore')}
          />
          <span className={styles.rangeValue}>{state.impactScore}</span>
        </label>
        <label className={styles.label}>
          Tags
          <input
            className={styles.input}
            value={state.tags}
            onChange={handleChange('tags')}
            placeholder="Comma separated (e.g. mindful, evening)"
          />
          <div className={styles.chipsPreview}>
            {tagList.map((tag) => (
              <span key={tag} className={styles.chip}>
                {tag}
              </span>
            ))}
          </div>
        </label>
        <label className={styles.label}>
          Emotions (quick note)
          <input
            className={styles.input}
            value={state.emotions}
            onChange={handleChange('emotions')}
            placeholder="Comma separated feelings"
          />
        </label>
        <div className={styles.actions}>
          <button type="submit" className={styles.submit}>
            {isSubmitting ? 'Saving…' : mode === 'create' ? 'Save entry' : 'Update entry'}
          </button>
        </div>
      </fieldset>
      {/* TODO: Extend with emotion intensity sliders once user testing confirms value. */}
    </form>
  );
};

export default EntryForm;
