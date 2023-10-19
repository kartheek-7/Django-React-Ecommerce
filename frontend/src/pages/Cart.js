import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { useCart } from '../components/CartContext';
import CartCard from '../components/CartCard';
import axios from 'axios'; 
import '../styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const { user, login, logout } = useAuth();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckoutClick = () => {
    setIsCheckout(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user) {
        const userToken = user.token;
        const headers = {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        };
        const orderItems = cart.map(item => ({
          product: item._id,
          qty: item.quantity,
          price: item.price,
        }));
        
        const orderData = {
          orderItems: orderItems,
          address: formData.address,
          city: formData.city,
          postalcode: formData.postalcode,
          total_price: calculateTotalPrice(),
        };
        const response = await axios.post('/api/order/add/', orderData, { headers });
        if (response.status === 200) {
          setIsOrderPlaced(true);
        } else {
          setError('Failed to place the order');}
      } else {
        navigate('/account');
      }
    } catch (error) {
      setError('Cart items posting to DB is Failed');
    }
  };

  return (
    <div className="cart-container">
      <h2 style={{ fontSize: '1.5em', margin: '3.5em 0 0 1.5em', fontWeight: 650 }}>
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="single-cart-container">
          {cart.map((item) => (
            <CartCard
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          {isCheckout ? (
            <form onSubmit={handleSubmit}>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </label>
              <label>
                Postal Code:
                <input
                  type="text"
                  name="postalcode"
                  value={formData.postalcode}
                  onChange={(e) => setFormData({ ...formData, postalcode: e.target.value })}
                />
              </label>
              <label>
                Total Price: ₹{calculateTotalPrice()}
              </label>
              {isOrderPlaced ? (
                <div className="order-placed-message">
                  <p>Order placed successfully!</p>
                </div>
              ) : (
                <button type="submit">Submit Order</button>
              )}
            </form>
          ) : (
            <div>
              <p className='cart-total'>Total Quantity: {calculateTotalQuantity()}</p>
              <p className="cart-total">Grand Total: ₹{calculateTotalPrice()}</p>
              <button className='checkout' onClick={handleCheckoutClick}>Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
