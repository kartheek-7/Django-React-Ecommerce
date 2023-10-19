import React from 'react';
import '../styles/Discount.css'
const Discount = () => {
  return (
    <div className='Container'>
      <div className='TextContainer'>
        <p className='para1'>UP TO 50% DISCOUNT</p>
        <p className='para2'>Checkout The Best</p>
        <p className='para3'>Eco Fashion Style</p>
      </div>
      <div className='ImageContainer'>
        <img src='images/model.png' alt='Discount' className='modelImage' />
      </div>
    </div>
  );
}

export default Discount;
