import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/CategoryCard.css'
const CategoryCard = ({ imageSrc, categoryLink }) => {
  return (
    <div className="category-card">
      <img src={imageSrc}  className='category-image'/>
      <Link to={categoryLink} className='ShopNow'>Shop Now</Link>
    </div>
  );
};

export default CategoryCard;

