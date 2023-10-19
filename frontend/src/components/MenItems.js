import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

const MenItems = () => {
  const [products, setProducts]= useState([])

  useEffect(() => {
    async function fetchMenProducts() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/product/men-products/');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    }
  
    fetchMenProducts();
  }, []);
  return (
    <div className="featured-items">
      {products.map((item) => (
        <ProductCard item={item}/>
      ))}
    </div>
  );
};

export default MenItems;