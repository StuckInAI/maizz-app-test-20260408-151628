'use client';
import { useState } from 'react';
import styles from './ReservationPage.module.css';

const restaurantData: Record<string, { name: string; cuisine: string; emoji: string; color: string }> = {
  '1': { name: 'The Spice Garden', cuisine: 'Pakistani • Mughlai', emoji: '🍛', color: '#fff3ed' },
  '2': { name: 'Pizza Palace', cuisine: 'Italian • Pizza', emoji: '🍕', color: '#fff8e1' },
  '3': { name: 'Burger Bliss', cuisine: 'American • Burgers', emoji: '🍔', color: '#e8f5e9' },
  '4': { name: 'Sushi Sakura', cuisine: 'Japanese • Sushi', emoji: '🍣', color: '#fce4ec' },
};

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
];

export default function ReservationPage({ restaurantId }: { restaurantId: string }) {
  const restaurant = restaurantData[restaurantId] || restaurantData['1'];
  const [form, setForm] = useState({ name: '', phone: '', email: '', guests: '2', date: '', time: '', occasion: '', requests: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

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
          <div className={styles.successIcon}>🎉</div>
          <h2 className={styles.successTitle}>Reservation Confirmed!</h2>
          <p className={styles.successMsg}>Table for {form.guests} at {restaurant.name} on {form.date} at {selectedTime || form.time}.</p>
          <p className={styles.successSub}>Confirmation sent to {form.email || form.phone}</p>
          <div className={styles.successDetails}>
            <div className={styles.successDetailItem}>
              <span className={styles.successDetailLabel}>Guest Name</span>
              <span className={styles.successDetailValue}>{form.name}</span>
            </div>
            <div className={styles.successDetailItem}>
              <span className={styles.successDetailLabel}>Restaurant</span>
              <span className={styles.successDetailValue}>{restaurant.name}</span>
            </div>
            <div className={styles.successDetailItem}>
              <span className={styles.successDetailLabel}>Date & Time</span>
              <span className={styles.successDetailValue}>{form.date} at {selectedTime || form.time}</span>
            </div>
            <div className={styles.successDetailItem}>
              <span className={styles.successDetailLabel}>Party Size</span>
              <span className={styles.successDetailValue}>{form.guests} Guests</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.heroBar} style={{ background: restaurant.color }}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEmoji}>{restaurant.emoji}</span>
            <div>
              <h1 className={styles.heroName}>{restaurant.name}</h1>
              <p className={styles.heroCuisine}>{restaurant.cuisine}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Reserve a Table</h2>
            <p className={styles.sectionSub}>Fill in the details to book your table</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 0000000" required className={styles.input} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email (optional)</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={styles.input} />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Number of Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange} className={styles.input}>
                    {[1,2,3,4,5,6,7,8,10,12].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} required className={styles.input} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Select Time</label>
                <div className={styles.timeGrid}>
                  {timeSlots.map(slot => (
                    <button
                      type="button"
                      key={slot}
                      className={`${styles.timeSlot} ${selectedTime === slot ? styles.timeActive : ''}`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Occasion (optional)</label>
                <select name="occasion" value={form.occasion} onChange={handleChange} className={styles.input}>
                  <option value="">Select occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Business Lunch</option>
                  <option>Family Dinner</option>
                  <option>Date Night</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Special Requests (optional)</label>
                <textarea name="requests" value={form.requests} onChange={handleChange} placeholder="High chair, wheelchair access, dietary restrictions..." className={styles.textarea} rows={3} />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={!selectedTime && !form.time}>
                Confirm Reservation →
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Restaurant Info</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <span>Main Boulevard, DHA, Karachi</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <span>+92 21 111 222 333</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>⏰</span>
                  <span>Mon–Sun: 11:30 AM – 11:30 PM</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🪑</span>
                  <span>Capacity: 120 guests</span>
                </div>
              </div>
            </div>

            <div className={styles.policyCard}>
              <h3 className={styles.infoTitle}>Reservation Policy</h3>
              <ul className={styles.policyList}>
                <li>Reservations held for 15 minutes</li>
                <li>Cancellations accepted up to 1 hour before</li>
                <li>For parties over 10, call directly</li>
                <li>Special occasions require advance notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
