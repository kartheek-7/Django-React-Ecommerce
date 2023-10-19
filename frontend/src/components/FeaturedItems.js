import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import '../styles/FeaturedItems.css';
//import data from '../data';
import axios from 'axios';

const FeaturedItems = () => {

  const [products, setProducts]= useState([])

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/product/featured-products/');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    }
  
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="featured-items">
      {products.map((item) => (
        <ProductCard key={item.id} item={item}  />
      ))}
    </div>
  );
};

export default FeaturedItems;
