'use client';
import { useState } from 'react';
import styles from './Checkout.module.css';

export default function DineInCheckout() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '2', date: '', time: '', requests: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>✅</div>
          <h2 className={styles.successTitle}>Dine-In Order Confirmed!</h2>
          <p className={styles.successMsg}>Your table has been reserved for {form.guests} guests on {form.date} at {form.time}.</p>
          <p className={styles.successSub}>Confirmation will be sent to {form.phone}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.formSection}>
          <h1 className={styles.pageTitle}>🍽️ Dine-In Checkout</h1>
          <p className={styles.pageSub}>Complete your dine-in reservation details</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 0000000" required className={styles.input} />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Number of Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange} className={styles.input}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Date</label>
                <input name="date" type="date" value={form.date} onChange={handleChange} required className={styles.input} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Preferred Time</label>
              <select name="time" value={form.time} onChange={handleChange} className={styles.input}>
                <option value="">Select a time</option>
                {['12:00 PM','1:00 PM','2:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Special Requests (optional)</label>
              <textarea name="requests" value={form.requests} onChange={handleChange} placeholder="Any dietary restrictions, preferences..." className={styles.textarea} rows={3} />
            </div>
            <button type="submit" className={styles.submitBtn}>Confirm Dine-In Reservation →</button>
          </form>
        </div>

        <div className={styles.summarySection}>
          <div className={styles.summaryBox}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>
            <div className={styles.summaryItems}>
              <div className={styles.summaryItem}><span>Chicken Biryani</span><span>PKR 950</span></div>
              <div className={styles.summaryItem}><span>Seekh Kebab Platter</span><span>PKR 850</span></div>
              <div className={styles.summaryItem}><span>Mango Lassi x2</span><span>PKR 560</span></div>
            </div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryTotal}><span>Subtotal</span><span>PKR 2,360</span></div>
            <div className={styles.summaryItem}><span>Service Charge (10%)</span><span>PKR 236</span></div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryGrand}><span>Total</span><span>PKR 2,596</span></div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoItem}>🪑 Dine-In at The Spice Garden</div>
            <div className={styles.infoItem}>📍 Main Boulevard, Karachi</div>
            <div className={styles.infoItem}>⏰ Open until 11:30 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
