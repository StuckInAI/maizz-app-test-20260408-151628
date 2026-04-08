import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🌽</span>
            <span className={styles.logoText}>Maiz</span>
          </div>
          <p className={styles.tagline}>Discover, order & reserve from the best restaurants near you.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.social}>📘</a>
            <a href="#" className={styles.social}>📸</a>
            <a href="#" className={styles.social}>🐦</a>
            <a href="#" className={styles.social}>▶️</a>
          </div>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Explore</h4>
          <ul className={styles.colLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu/1">Restaurants</Link></li>
            <li><Link href="/reservation/1">Reservations</Link></li>
            <li><Link href="/checkout/delivery">Delivery</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.colLinks}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Support</h4>
          <ul className={styles.colLinks}>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 Maiz. All rights reserved.</p>
      </div>
    </footer>
  );
}
