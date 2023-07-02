import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  const [loading, setLoading] = useState(true);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartActive,
        setIsCartActive,
      }}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: propTypes.any,
}.isRequired;
