import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import { formatMoneyValue } from '../../utils/currency';
import { useProductStore } from '../../store/product.store';

import './Cart.css';

export function Cart() {
  // const { cartItems, isCartActive } = useProducts();
  const { cartItems, isCartActive } = useProductStore((state) => state);

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section className={
      `cart ${isCartActive ? 'cart--active' : ''}`
    }>
      <div className="cart-items">
        {
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} product={cartItem}/>
          ))
        }
      </div>

      <div className="cart-resume">
       Total: {formatMoneyValue(totalPrice)}
      </div>
    </section>
  );
}
