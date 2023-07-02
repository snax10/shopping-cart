import React from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useProductStore } from '../../store/product.store';

import './CartButton.css';

export function CartButton() {
  // const { cartItems, isCartActive, setIsCartActive } = useProducts();
  const { cartItems, isCartActive, setIsCartActive } = useProductStore((state) => state);

  return (
    <button className="cart-button" onClick={
      () => setIsCartActive(!isCartActive)
    }>
      <AiOutlineShoppingCart />
      {
        cartItems.length > 0 && (
          <span className="cart-status">{cartItems.length}</span>
        )
      }
    </button>
  );
}
