'use client';
import { useState } from 'react';
import styles from './Checkout.module.css';

export default function DeliveryCheckout() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', instructions: '', payment: 'cash' });
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
          <div className={styles.successIcon}>🚀</div>
          <h2 className={styles.successTitle}>Order Placed Successfully!</h2>
          <p className={styles.successMsg}>Your order is being prepared and will be delivered to {form.address}.</p>
          <p className={styles.successSub}>Estimated delivery time: 30-45 minutes</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.formSection}>
          <h1 className={styles.pageTitle}>🚀 Delivery Checkout</h1>
          <p className={styles.pageSub}>Enter your delivery details</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+92 300 0000000" required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Delivery Address</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="Street address, apartment..." required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>City</label>
              <select name="city" value={form.city} onChange={handleChange} className={styles.input}>
                <option value="">Select city</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Rawalpindi</option>
                <option>Faisalabad</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Delivery Instructions (optional)</label>
              <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="Gate code, floor, landmark..." className={styles.textarea} rows={3} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Payment Method</label>
              <div className={styles.paymentOptions}>
                {[
                  { value: 'cash', label: '💵 Cash on Delivery' },
                  { value: 'card', label: '💳 Credit/Debit Card' },
                  { value: 'jazz', label: '📱 JazzCash' },
                  { value: 'easypaisa', label: '📱 EasyPaisa' },
                ].map(opt => (
                  <label key={opt.value} className={`${styles.payOption} ${form.payment === opt.value ? styles.payActive : ''}`}>
                    <input type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={handleChange} style={{display:'none'}} />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className={styles.submitBtn}>Place Order →</button>
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
            <div className={styles.summaryItem}><span>Delivery Fee</span><span>PKR 150</span></div>
            <div className={styles.summaryItem}><span>Discount (MAIZ30)</span><span style={{color:'green'}}>-PKR 708</span></div>
            <div className={styles.summaryDivider} />
            <div className={styles.summaryGrand}><span>Total</span><span>PKR 1,802</span></div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoItem}>🏪 The Spice Garden</div>
            <div className={styles.infoItem}>⏱ Estimated: 30-45 min</div>
            <div className={styles.infoItem}>🔥 Free delivery on orders above PKR 800</div>
          </div>
        </div>
      </div>
    </div>
  );
}
