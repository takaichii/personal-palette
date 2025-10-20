// Personal Palette – Stats page staging future insights visualizations.
import ChartPanel from '../components/ChartPanel/ChartPanel';
import { useEntries } from '../features/entries/hooks';
import styles from './Stats.module.css';

const Stats = () => {
  const { data: entries } = useEntries();

  const chartData = entries.slice(0, 5).map((entry) => ({
    label: entry.title,
    value: entry.impactScore ?? 0
  }));

  return (
    <section className={styles.wrapper}>
      <h1>Stats</h1>
      <p className={styles.caption}>
        Track emotional palettes and impact scores. Visual components remain placeholders until
        charting libraries join.
      </p>
      <ChartPanel data={chartData} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.title}</td>
              <td>{entry.type}</td>
              <td>{entry.impactScore ?? '–'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* TODO: Summarize top emotions and time-of-day once analytics requirements land. */}
    </section>
  );
};

export default Stats;
