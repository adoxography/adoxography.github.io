import React from 'react';
import { Link } from 'react-router-dom';
import { Spade } from './svg';

const TopNav = () => (
  <nav className="flex-row shadow pl-3 py-2 bg-shade-80">
    <Link to="/" className="flex items-center text-tint-80 hover:text-white hover:text-shadow-glow focus:text-shadow-glow focus:outline-none">
      <Spade className="block h-4" />
      <h1 className="ml-1 text-lg lowercase font-thin">
        Adoxography
      </h1>
    </Link>
  </nav>
);

export default TopNav;
