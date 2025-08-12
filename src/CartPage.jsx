import { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartPage.css'
function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
  <h2>Your Cart</h2>
  <div className="cart-list">
    {cartItems.map((item, index) => (
      <div className="cart-item" key={index}>
        <img src={item.image} alt={item.name} />
        <div className="cart-info">
          <h4>{item.name}</h4>
          <p>{item.quantity}</p>
          <p>Delivery: {item.delivery}</p>
          <p>Price: ₹{item.total}</p>
        </div>
        <div className="cart-actions">
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
  <div className="total-box">
    Total: ₹{cartItems.reduce((acc, item) => acc + parseInt(item.total), 0)}
  </div>
  </div>

  );
}

export default CartPage;
