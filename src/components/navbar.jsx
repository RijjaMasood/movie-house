import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/">Movie House</Link>
        </div>

        <div className={styles.menu}>
          <ul>
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
