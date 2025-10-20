// Personal Palette – Home page inviting users into mindful archiving.
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <img src="/src/assets/logo.svg" alt="Personal Palette" className={styles.logo} />
        <h1>Welcome to Personal Palette</h1>
        <p>
          Collect memories, revisit emotional hues, and paint a narrative of your growth. This
          MVP keeps things simple yet spacious.
        </p>
        <Link to="/entries/new" className={styles.cta}>
          記録をはじめる
        </Link>
      </div>
    </section>
  );
};

export default Home;
