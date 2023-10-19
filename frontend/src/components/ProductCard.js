import React from 'react';
import { useCart } from './CartContext';
import '../styles/ProductCard.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const ProductCard = ({item}) => {
  const { id, image, name, price } = item;
  const {addToCart}= useCart();

  const handleAddToCartClick = () => {
    addToCart(item);
    console.log("Added to cart from ProductCard", { item});
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <p className="product-name">{name}</p>
      <div className="product-actions">
        <button className="wishlist-button">
          <AiOutlineHeart />
        </button>
        <p className="product-price">₹{price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCartClick}>
          <MdOutlineAddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
