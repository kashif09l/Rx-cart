// components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </Link>
      <button 
        onClick={() => addToCart(product)} 
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
