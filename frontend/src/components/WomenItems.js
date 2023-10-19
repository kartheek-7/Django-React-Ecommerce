import React, {useState, useEffect}from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

const WomenItems = ({ addToCart }) => {
  const [products, setProducts]= useState([])

  useEffect(() => {
    async function fetchWomenProducts() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/product/women-products/');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    }
  
    fetchWomenProducts();
  }, []);
  return (
    <div className="featured-items">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default WomenItems;