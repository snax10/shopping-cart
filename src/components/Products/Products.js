/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { fetchProducts } from '../../services/fetchProducts';
import { Loading } from '../Loading/Loading';
import { useProductStore } from '../../store/product.store';

import './Products.css';

export const Products = () => {
  // const { products, setProducts, setLoading, loading } = useProducts();
  const { products, setProducts, setLoading, loading  } = useProductStore((state) => state);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data); 
      
      setLoading(false);
    });
  }, []); 

  const handleAddToCart = (product) => {
    console.log('adicionado no carrinho', product);
  };

  return (
    <section className="products container">
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          />
        ))
      )}
    </section>
  );
};
