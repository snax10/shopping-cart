import React from 'react';
import propTypes from 'prop-types';
import { formatMoneyValue } from '../../utils/currency';
import { BsFillCartPlusFill } from 'react-icons/bs'; 
import { useProductStore } from '../../store/product.store';

import './ProductItem.css';

export const ProductItem = ({ product }) => {
  const { thumbnail, title, price } = product;

  // const { cartItems, setCartItems, setIsCartActive } = useProducts();
  const { cartItems, setCartItems, setIsCartActive } = useProductStore((state) => state);

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
    setIsCartActive(true);
  };

  return (
    <article className="product-card">
      <img 
        className="card__image" 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt={title} 
      />

      <div className="card__infos">
        <h2 className="card__title">{title}</h2>
        <span className="card__price">
          {formatMoneyValue(price)}
        </span>
      </div>

      <button type="button" className="button__add-cart" onClick={ handleAddToCart}>
        <BsFillCartPlusFill />
      </button>
    </article>
  );
};

ProductItem.propTypes = {
  product: propTypes.object.isRequired,
};
