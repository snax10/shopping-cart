import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

import './Header.css';
import { CartButton } from '../CartButton/CartButton';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}
