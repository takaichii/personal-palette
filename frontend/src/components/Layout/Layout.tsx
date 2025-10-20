// Personal Palette – Layout framing each page with calm navigation and breathing space.
import { NavLink, Outlet } from 'react-router-dom';

import cls from '../../lib/cls';
import styles from './Layout.module.css';
import logo from '../../assets/logo.svg';

const Layout = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    cls(styles.navLink, isActive && styles.active);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img src={logo} alt="Personal Palette" className={styles.logo} />
          <span className={styles.title}>Personal Palette</span>
        </div>
        <nav className={styles.nav}>
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/entries" className={navClass}>
            Entries
          </NavLink>
          <NavLink to="/entries/new" className={navClass}>
            New
          </NavLink>
          <NavLink to="/stats" className={navClass}>
            Stats
          </NavLink>
        </nav>
        {/* TODO: Introduce gentle global notifications and breadcrumb trails. */}
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Personal Palette – Honoring quiet reflections.
      </footer>
    </div>
  );
};

export default Layout;
