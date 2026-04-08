import styles from './AppPromotion.module.css';

export default function AppPromotion() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.badge}>📱 Mobile App</div>
            <h2 className={styles.title}>Get the Maiz App</h2>
            <p className={styles.subtitle}>
              Order food, track deliveries, and reserve tables — all from your phone.
              Available on iOS and Android.
            </p>
            <ul className={styles.features}>
              <li>✅ Real-time order tracking</li>
              <li>✅ Exclusive app-only deals</li>
              <li>✅ Easy table reservations</li>
              <li>✅ Saved favorites & reorder</li>
            </ul>
            <div className={styles.buttons}>
              <button className={styles.storeBtn}>
                <span className={styles.storeIcon}>🍎</span>
                <div>
                  <div className={styles.storeSmall}>Download on the</div>
                  <div className={styles.storeBig}>App Store</div>
                </div>
              </button>
              <button className={styles.storeBtn}>
                <span className={styles.storeIcon}>▶️</span>
                <div>
                  <div className={styles.storeSmall}>Get it on</div>
                  <div className={styles.storeBig}>Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>🌽 Maiz</div>
                <div className={styles.phoneCard}>🍔 Burger Bliss</div>
                <div className={styles.phoneCard}>🍕 Pizza Palace</div>
                <div className={styles.phoneCard}>🍛 Spice Garden</div>
                <div className={styles.phoneBtn}>Order Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
