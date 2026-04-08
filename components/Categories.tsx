import styles from './Categories.module.css';

const categories = [
  { id: 1, name: 'Pizza', emoji: '🍕', count: 48 },
  { id: 2, name: 'Burgers', emoji: '🍔', count: 62 },
  { id: 3, name: 'Sushi', emoji: '🍣', count: 24 },
  { id: 4, name: 'Pakistani', emoji: '🍛', count: 85 },
  { id: 5, name: 'Chinese', emoji: '🥡', count: 37 },
  { id: 6, name: 'Desserts', emoji: '🍰', count: 43 },
  { id: 7, name: 'Healthy', emoji: '🥗', count: 29 },
  { id: 8, name: 'BBQ', emoji: '🔥', count: 31 },
  { id: 9, name: 'Seafood', emoji: '🦐', count: 19 },
  { id: 10, name: 'Breakfast', emoji: '🍳', count: 22 },
  { id: 11, name: 'Mexican', emoji: '🌮', count: 16 },
  { id: 12, name: 'Drinks', emoji: '🧃', count: 54 },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Browse by Category</h2>
        <p className="section-subtitle">What are you craving today?</p>
        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.emojiBox}>
                <span className={styles.emoji}>{cat.emoji}</span>
              </div>
              <span className={styles.name}>{cat.name}</span>
              <span className={styles.count}>{cat.count} places</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
