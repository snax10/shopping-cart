import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { fetchProducts } from '../../services/fetchProducts';
import { useProductStore } from '../../store/product.store';

import './SearchBar.css';

export function SearchBar() {
  const [search, setSearch] = useState('');

  // const { setProducts, setLoading } = useProducts();
  const { setProducts, setLoading  } = useProductStore((state) => state);
  

  async function handleSearch(event) {
    event.preventDefault();

    setLoading(true);
    const products = await fetchProducts(search);
    setProducts(products);
    setLoading(false);

    setSearch('');
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input 
        value={search} 
        onChange={(event) => setSearch(event.target.value)} 
        type="text" 
        placeholder="Buscar produtos" 
        className="search__input"  
        required
      />

      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}
