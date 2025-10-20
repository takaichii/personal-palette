// Personal Palette – Not found screen guiding users back gently.
import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.wrapper}>
      <h1>404</h1>
      <p>The page you were seeking is still blank on this canvas.</p>
      <Link to="/" className={styles.link}>
        Return home
      </Link>
    </section>
  );
};

export default NotFound;
