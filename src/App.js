import React from 'react';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';
import { ProductsProvider } from './context/Products';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <ProductsProvider>
      <Header />
      <Products/>
      <Cart />
    </ProductsProvider>
  );
}

export default App;
