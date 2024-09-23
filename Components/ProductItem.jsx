import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="buy-button">Comprar</button>
    </div>
  );
}

export default ProductItem;
