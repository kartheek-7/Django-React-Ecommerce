import React, {useState, useEffect}from 'react'
import ProductCard from './ProductCard'
//import data from '../data';
import axios from 'axios';

const KidsItems = ({addToCart}) => {
  const [products, setProducts]= useState([])

  useEffect(() => {
    async function fetchKidsProducts() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/product/kids-products/');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    }
  
    fetchKidsProducts();
  }, []);
  return (

    <div className="featured-items">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>);
  
};

export default KidsItems;
