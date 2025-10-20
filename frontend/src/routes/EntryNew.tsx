// Personal Palette – Entry creation page offering a gentle starting point.
import EntryForm from '../components/EntryForm/EntryForm';
import { useCreateEntry } from '../features/entries/hooks';
import styles from './EntryNew.module.css';

const EntryNew = () => {
  const { submit, loading } = useCreateEntry();

  return (
    <section className={styles.wrapper}>
      <EntryForm mode="create" onSubmit={submit} isSubmitting={loading} />
      {/* TODO: Surface autosave hints when API integration arrives. */}
    </section>
  );
};

export default EntryNew;
