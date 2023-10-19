import React from 'react';
import '../styles/CartCard.css';
const CartCard = ({ item, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const { _id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <p>{name}</p>
        <p>Price: ₹{price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ₹{price * quantity}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => incrementQuantity(_id)}>+</button>
        <button onClick={() => decrementQuantity(_id)}>-</button>
        <button onClick={() => removeFromCart(_id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
