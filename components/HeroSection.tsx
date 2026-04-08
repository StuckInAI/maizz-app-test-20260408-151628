'use client';
import { useState } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={`container ${styles.content}`}>
          <div className={styles.badge}>
            🍽️ Your Next Meal Awaits
          </div>
          <h1 className={styles.title}>
            Discover & Order from
            <span className={styles.highlight}> the Best</span>
            <br />Restaurants Near You
          </h1>
          <p className={styles.subtitle}>
            Explore top-rated restaurants, reserve tables, and get food delivered to your door.
          </p>

          <form className={styles.searchBar} onSubmit={handleSearch}>
            <div className={styles.searchLeft}>
              <span className={styles.searchIcon}>📍</span>
              <input
                type="text"
                placeholder="Your location"
                className={styles.locationInput}
              />
            </div>
            <div className={styles.divider} />
            <div className={styles.searchRight}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search restaurants, cuisines, dishes..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <button type="submit" className={styles.searchBtn}>Search</button>
          </form>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Restaurants</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>50K+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4.8⭐</span>
              <span className={styles.statLabel}>Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
