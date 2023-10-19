import React , { useState }from 'react'
import KidsItems from '../components/KidsItems'

const Kids = () => {
  const [cart, setCart] = useState([]);
   const addToCart = (product) => {
     const productExistsInCart = cart.some((item) => item.name === product.name);
 
     if (productExistsInCart) {
       const updatedCart = cart.map((item) =>
         item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
       );
       setCart(updatedCart);
     } else {
       setCart([...cart, { ...product, quantity: 1 }]);
     }
     console.log('Product added to cart from Home:', product);
   };
  return (
    <div>
       <p className="subheading" style={{fontSize: '1.5em',margin: '3.5em 0 0 1.5em',
       fontWeight: 650,}}>Kid's Fashion</p>
      <KidsItems addToCart={addToCart}/>
    </div>
  )
}

export default Kids
