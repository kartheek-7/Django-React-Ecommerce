import React, { useState } from 'react';
import Discount from './Discount';
import FeaturedCategories from './FeaturedCategories';
import FeaturedItems from '../components/FeaturedItems';
const Home = () => {

  return (
    <div>
      <Discount />
      <p className='sideheading'>Featured Categories</p>
      <FeaturedCategories />
      <p className='sideheading'>Featured Items</p>
      <FeaturedItems />
    </div>
  );
};

export default Home;
