// CartPage.jsx
import React from "react";
import "./CartPage.css";

const cartItems = [
 
];

const CartPage = () => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  const handleSubmit = (e) => {
   
  };

  return (
    <main className="cart-container">
      
      <header className="cart-header">
        <h1>Your Cart</h1>
        <p>Review your items and provide delivery details to place the order.</p>
      </header>

      <section className="cart-content">
        <div className="cart-items">
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <article key={index} className="cart-item-card">
                <h3>{item.name}</h3>
                <p>Qty: {item.qty}</p>
                <p>{item.price} each</p>
                <strong>Total: {item.price * item.qty}</strong>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: {totalPrice}</h2>
          </div>
        </div>

        <aside className="cart-form-wrapper">
          <h2>Delivery Details</h2>
          <form onSubmit={handleSubmit} className="cart-form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Full Delivery Address" rows={3} required></textarea>
            <button type="submit">Place Order</button>
          </form>
        </aside>
      </section>
    </main>
  );
};

export default CartPage;