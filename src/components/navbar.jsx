import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/">Movie House</Link>
        </div>

        <div className={styles.menu}>
          <ul>
            <li>
              <button onClick={toggleTheme} className={styles.toggleButton}>
                {theme === "light" ? "☀ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/directors">Directors</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
