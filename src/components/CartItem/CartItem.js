import React from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import { formatMoneyValue } from '../../utils/currency';
import { useProductStore } from '../../store/product.store';

import './CartItem.css';

export function CartItem({ product }) {
  const { thumbnail, title, price, id } = product;

  // const { setCartItems, cartItems } = useProducts();
  const { cartItems, setCartItems, setIsCartActive } = useProductStore((state) => state);

  const handleRemoveItem = () => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);

    if(newCartItems.length === 0) {
      setIsCartActive(false);
    }
  };

  return (
    <section  className="cart-item">
      <img
        className="cart-item__image"
        src={thumbnail}
        alt={title}
      />
      
      <div className="cart-item__info">
        <h3 className="cart-item__name">{title}</h3>
        <h3 className="cart-item__price">{formatMoneyValue(price)}</h3>
        
        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  product: propTypes.object.isRequired,
};
