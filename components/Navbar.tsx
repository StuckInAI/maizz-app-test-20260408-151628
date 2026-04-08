'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🌽</span>
          <span className={styles.logoText}>Maiz</span>
        </Link>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/menu/1">Restaurants</Link></li>
          <li><Link href="/reservation/1">Reserve</Link></li>
          <li><Link href="/checkout/delivery">Orders</Link></li>
        </ul>

        <div className={styles.navActions}>
          <button className={styles.iconBtn} aria-label="Search">🔍</button>
          <button className={styles.iconBtn} aria-label="Cart">🛒</button>
          <button className={`btn-primary ${styles.signInBtn}`}>Sign In</button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
