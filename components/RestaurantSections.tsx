import Link from 'next/link';
import styles from './RestaurantSections.module.css';

const newRestaurants = [
  { id: 9, name: 'Urban Bites', cuisine: 'Fusion • Modern', rating: 4.3, time: '20-30 min', emoji: '🥘', color: '#e8f5e9' },
  { id: 10, name: 'The Waffle House', cuisine: 'Desserts • Waffles', rating: 4.5, time: '15-25 min', emoji: '🧇', color: '#fff8e1' },
  { id: 11, name: 'Noodle Nation', cuisine: 'Chinese • Noodles', rating: 4.4, time: '25-35 min', emoji: '🍜', color: '#fce4ec' },
  { id: 12, name: 'Green Bowl', cuisine: 'Healthy • Salads', rating: 4.6, time: '20-30 min', emoji: '🥗', color: '#e3f2fd' },
];

const topRated = [
  { id: 1, name: 'The Spice Garden', cuisine: 'Pakistani • Mughlai', rating: 4.8, time: '25-35 min', emoji: '🍛', color: '#fff3ed' },
  { id: 4, name: 'Sushi Sakura', cuisine: 'Japanese • Sushi', rating: 4.9, time: '30-45 min', emoji: '🍣', color: '#fce4ec' },
  { id: 3, name: 'Burger Bliss', cuisine: 'American • Burgers', rating: 4.7, time: '15-25 min', emoji: '🍔', color: '#e8f5e9' },
  { id: 8, name: 'The Desi Dhaba', cuisine: 'Pakistani • Desi', rating: 4.7, time: '25-40 min', emoji: '🫕', color: '#fff3e0' },
];

function RestaurantRow({ restaurant }: { restaurant: typeof newRestaurants[0] }) {
  return (
    <Link href={`/menu/${restaurant.id}`} className={styles.row}>
      <div className={styles.rowImg} style={{background: restaurant.color}}>
        <span className={styles.rowEmoji}>{restaurant.emoji}</span>
      </div>
      <div className={styles.rowInfo}>
        <div className={styles.rowName}>{restaurant.name}</div>
        <div className={styles.rowCuisine}>{restaurant.cuisine}</div>
        <div className={styles.rowMeta}>
          <span>⭐ {restaurant.rating}</span>
          <span>⏱ {restaurant.time}</span>
        </div>
      </div>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}

export default function RestaurantSections() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.twoCol}>
          <div className={styles.col}>
            <div className="flex-between mb-24">
              <div>
                <h2 className="section-title" style={{marginBottom: 4}}>Newly Opened</h2>
                <p style={{fontSize: 14, color: 'var(--text-secondary)'}}>Fresh additions to our platform</p>
              </div>
              <Link href="/menu/1" className={styles.viewAll}>View All</Link>
            </div>
            <div className={styles.list}>
              {newRestaurants.map(r => <RestaurantRow key={r.id} restaurant={r} />)}
            </div>
          </div>
          <div className={styles.col}>
            <div className="flex-between mb-24">
              <div>
                <h2 className="section-title" style={{marginBottom: 4}}>Top Rated</h2>
                <p style={{fontSize: 14, color: 'var(--text-secondary)'}}>Consistently excellent experiences</p>
              </div>
              <Link href="/menu/1" className={styles.viewAll}>View All</Link>
            </div>
            <div className={styles.list}>
              {topRated.map(r => <RestaurantRow key={r.id} restaurant={r} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
