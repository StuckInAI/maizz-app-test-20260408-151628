import styles from './DealsOffers.module.css';

const deals = [
  { id: 1, title: '30% OFF Your First Order', description: 'Use code MAIZ30 at checkout. Valid for new users.', code: 'MAIZ30', emoji: '🎉', bg: 'linear-gradient(135deg, #e85d26 0%, #ff8a50 100%)', textColor: 'white' },
  { id: 2, title: 'Free Delivery This Weekend', description: 'No delivery charges on all orders above PKR 800.', code: 'FREEDEL', emoji: '🚀', bg: 'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)', textColor: 'white' },
  { id: 3, title: 'Buy 1 Get 1 Burger', description: 'At Burger Bliss every Tuesday. No code needed.', code: 'AUTO', emoji: '🍔', bg: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)', textColor: 'white' },
  { id: 4, title: 'Dine-In Special: 20% Off', description: 'Reserve a table and get 20% off on the total bill.', code: 'DINEIN20', emoji: '🍽️', bg: 'linear-gradient(135deg, #6a1b9a 0%, #ba68c8 100%)', textColor: 'white' },
];

export default function DealsOffers() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Deals & Offers</h2>
        <p className="section-subtitle">Save big with our exclusive promotions</p>
        <div className={styles.grid}>
          {deals.map(deal => (
            <div key={deal.id} className={styles.card} style={{background: deal.bg}}>
              <div className={styles.emoji}>{deal.emoji}</div>
              <div className={styles.info}>
                <h3 className={styles.title} style={{color: deal.textColor}}>{deal.title}</h3>
                <p className={styles.desc} style={{color: 'rgba(255,255,255,0.85)'}}>{deal.description}</p>
                {deal.code !== 'AUTO' && (
                  <div className={styles.codeBox}>
                    <span className={styles.codeLabel}>Use Code:</span>
                    <span className={styles.code}>{deal.code}</span>
                  </div>
                )}
              </div>
              <button className={styles.claimBtn}>Claim →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
