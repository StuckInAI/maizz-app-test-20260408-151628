'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './MenuPage.module.css';

const restaurantData: Record<string, { name: string; cuisine: string; rating: number; time: string; emoji: string; color: string }> = {
  '1': { name: 'The Spice Garden', cuisine: 'Pakistani • Mughlai', rating: 4.8, time: '25-35 min', emoji: '🍛', color: '#fff3ed' },
  '2': { name: 'Pizza Palace', cuisine: 'Italian • Pizza', rating: 4.6, time: '20-30 min', emoji: '🍕', color: '#fff8e1' },
  '3': { name: 'Burger Bliss', cuisine: 'American • Burgers', rating: 4.7, time: '15-25 min', emoji: '🍔', color: '#e8f5e9' },
  '4': { name: 'Sushi Sakura', cuisine: 'Japanese • Sushi', rating: 4.9, time: '30-45 min', emoji: '🍣', color: '#fce4ec' },
};

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { id: 1, name: 'Crispy Samosas', desc: 'Golden fried pastry with spiced potato filling', price: 350, emoji: '🥟' },
      { id: 2, name: 'Chicken Wings', desc: 'Spicy buffalo wings with dipping sauce', price: 650, emoji: '🍗' },
      { id: 3, name: 'Spring Rolls', desc: 'Crispy vegetable spring rolls', price: 420, emoji: '🌯' },
    ],
  },
  {
    name: 'Main Course',
    items: [
      { id: 4, name: 'Chicken Biryani', desc: 'Fragrant basmati rice with tender chicken pieces', price: 950, emoji: '🍛' },
      { id: 5, name: 'Karahi Gosht', desc: 'Slow-cooked mutton in traditional karahi spices', price: 1450, emoji: '🫕' },
      { id: 6, name: 'Seekh Kebab Platter', desc: 'Juicy minced meat kebabs with naan & raita', price: 850, emoji: '🍢' },
      { id: 7, name: 'Butter Chicken', desc: 'Creamy tomato-based chicken curry', price: 900, emoji: '🍲' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: 8, name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings in sugar syrup', price: 280, emoji: '🍮' },
      { id: 9, name: 'Kheer', desc: 'Creamy rice pudding with cardamom', price: 250, emoji: '🥛' },
    ],
  },
  {
    name: 'Drinks',
    items: [
      { id: 10, name: 'Mango Lassi', desc: 'Fresh mango blended with yogurt', price: 280, emoji: '🥭' },
      { id: 11, name: 'Fresh Lime Soda', desc: 'Chilled lime soda with mint', price: 180, emoji: '🍋' },
    ],
  },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  emoji: string;
}

export default function MenuPage({ restaurantId }: { restaurantId: string }) {
  const restaurant = restaurantData[restaurantId] || restaurantData['1'];
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('Starters');

  const addToCart = (item: { id: number; name: string; price: number; emoji: string }) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c).filter(c => c.qty > 0));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ background: restaurant.color }}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroEmoji}>{restaurant.emoji}</div>
            <div className={styles.heroInfo}>
              <h1 className={styles.heroName}>{restaurant.name}</h1>
              <p className={styles.heroCuisine}>{restaurant.cuisine}</p>
              <div className={styles.heroMeta}>
                <span>⭐ {restaurant.rating}</span>
                <span>⏱ {restaurant.time}</span>
                <span>📍 Karachi, Pakistan</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link href={`/reservation/${restaurantId}`} className={styles.reserveBtn}>🪑 Reserve Table</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.menuSection}>
            <div className={styles.categories}>
              {menuCategories.map(cat => (
                <button
                  key={cat.name}
                  className={`${styles.catBtn} ${activeCategory === cat.name ? styles.catActive : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {menuCategories.map(cat => (
              <div key={cat.name} className={styles.catSection} id={cat.name}>
                <h3 className={styles.catTitle}>{cat.name}</h3>
                <div className={styles.items}>
                  {cat.items.map(item => {
                    const cartItem = cart.find(c => c.id === item.id);
                    return (
                      <div key={item.id} className={styles.item}>
                        <div className={styles.itemEmoji}>{item.emoji}</div>
                        <div className={styles.itemInfo}>
                          <div className={styles.itemName}>{item.name}</div>
                          <div className={styles.itemDesc}>{item.desc}</div>
                          <div className={styles.itemPrice}>PKR {item.price}</div>
                        </div>
                        <div className={styles.itemActions}>
                          {cartItem ? (
                            <div className={styles.qtyControl}>
                              <button onClick={() => removeFromCart(item.id)} className={styles.qtyBtn}>−</button>
                              <span className={styles.qty}>{cartItem.qty}</span>
                              <button onClick={() => addToCart(item)} className={styles.qtyBtn}>+</button>
                            </div>
                          ) : (
                            <button onClick={() => addToCart(item)} className={styles.addBtn}>+ Add</button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSection}>
            <div className={styles.cartBox}>
              <h3 className={styles.cartTitle}>🛒 Your Order {totalItems > 0 && `(${totalItems})`}</h3>
              {cart.length === 0 ? (
                <p className={styles.emptyCart}>Add items to get started</p>
              ) : (
                <>
                  <div className={styles.cartItems}>
                    {cart.map(item => (
                      <div key={item.id} className={styles.cartItem}>
                        <span className={styles.cartItemEmoji}>{item.emoji}</span>
                        <div className={styles.cartItemInfo}>
                          <div className={styles.cartItemName}>{item.name}</div>
                          <div className={styles.cartItemPrice}>PKR {item.price * item.qty}</div>
                        </div>
                        <div className={styles.cartQty}>
                          <button onClick={() => removeFromCart(item.id)} className={styles.qtyBtn}>−</button>
                          <span>{item.qty}</span>
                          <button onClick={() => addToCart(item)} className={styles.qtyBtn}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.cartTotal}>
                    <span>Total</span>
                    <span>PKR {total}</span>
                  </div>
                  <div className={styles.checkoutBtns}>
                    <Link href="/checkout/delivery" className={styles.checkoutBtn}>🚀 Order Delivery</Link>
                    <Link href="/checkout/dine-in" className={styles.checkoutBtnSecondary}>🍽️ Dine-In Order</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
