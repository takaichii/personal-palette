// Personal Palette – Chart panel placeholder awaiting tranquil visualizations.
import styles from './ChartPanel.module.css';

type ChartDataPoint = {
  label: string;
  value: number;
};

type ChartPanelProps = {
  data: ChartDataPoint[];
};

const ChartPanel = ({ data }: ChartPanelProps) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3>Insights overview</h3>
        <p className={styles.caption}>A calm overview – charts will arrive soon.</p>
      </div>
      <div className={styles.placeholder}>
        <p>Visualization coming soon.</p>
        <ul>
          {data.map((point) => (
            <li key={point.label}>
              <span>{point.label}</span>
              <span>{point.value}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* TODO: Replace with Recharts area/line combinations once analytics solidify. */}
    </div>
  );
};

export default ChartPanel;
