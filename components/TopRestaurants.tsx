import Link from 'next/link';
import styles from './TopRestaurants.module.css';

const restaurants = [
  { id: 1, name: 'The Spice Garden', cuisine: 'Pakistani • Mughlai', rating: 4.8, reviews: 1240, price: '$$', time: '25-35 min', tag: 'Top Rated', emoji: '🍛', color: '#fff3ed' },
  { id: 2, name: 'Pizza Palace', cuisine: 'Italian • Pizza', rating: 4.6, reviews: 892, price: '$$', time: '20-30 min', tag: 'Popular', emoji: '🍕', color: '#fff8e1' },
  { id: 3, name: 'Burger Bliss', cuisine: 'American • Burgers', rating: 4.7, reviews: 2100, price: '$', time: '15-25 min', tag: 'Fast Delivery', emoji: '🍔', color: '#e8f5e9' },
  { id: 4, name: 'Sushi Sakura', cuisine: 'Japanese • Sushi', rating: 4.9, reviews: 678, price: '$$$', time: '30-45 min', tag: 'Premium', emoji: '🍣', color: '#fce4ec' },
  { id: 5, name: 'Grill House', cuisine: 'BBQ • Steaks', rating: 4.5, reviews: 1560, price: '$$$', time: '35-50 min', tag: 'Best Steaks', emoji: '🥩', color: '#fbe9e7' },
  { id: 6, name: 'Café Aroma', cuisine: 'Café • Brunch', rating: 4.6, reviews: 445, price: '$', time: '10-20 min', tag: 'Best Brunch', emoji: '☕', color: '#e3f2fd' },
  { id: 7, name: 'Taco Fiesta', cuisine: 'Mexican • Tacos', rating: 4.4, reviews: 789, price: '$', time: '20-30 min', tag: 'Trending', emoji: '🌮', color: '#f3e5f5' },
  { id: 8, name: 'The Desi Dhaba', cuisine: 'Pakistani • Desi', rating: 4.7, reviews: 3200, price: '$', time: '25-40 min', tag: 'Most Reviewed', emoji: '🫕', color: '#fff3e0' },
];

export default function TopRestaurants() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="flex-between mb-32">
          <div>
            <h2 className="section-title">Top Restaurants Near You</h2>
            <p className="section-subtitle" style={{marginBottom: 0}}>Handpicked for quality and taste</p>
          </div>
          <Link href="/menu/1" className="btn-secondary" style={{fontSize: '14px', padding: '8px 20px'}}>
            View All →
          </Link>
        </div>
        <div className={styles.grid}>
          {restaurants.map(r => (
            <div key={r.id} className={`card ${styles.card}`}>
              <div className={styles.imgBox} style={{background: r.color}}>
                <span className={styles.emoji}>{r.emoji}</span>
                <span className={styles.tagBadge}>{r.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <div className="flex-between">
                  <h3 className={styles.name}>{r.name}</h3>
                  <span className={styles.price}>{r.price}</span>
                </div>
                <p className={styles.cuisine}>{r.cuisine}</p>
                <div className={styles.meta}>
                  <span className={styles.rating}>⭐ {r.rating} <span className={styles.reviews}>({r.reviews})</span></span>
                  <span className={styles.time}>⏱ {r.time}</span>
                </div>
                <div className={styles.actions}>
                  <Link href={`/menu/${r.id}`} className={styles.orderBtn}>Order Now</Link>
                  <Link href={`/reservation/${r.id}`} className={styles.reserveBtn}>Reserve</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
