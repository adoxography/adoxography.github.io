import React from 'react';
import { Link } from 'react-router-dom';
import { Spade } from './svg';

const TopNav = () => (
  <nav className="flex-row shadow pl-3 py-2" style={{ backgroundColor: 'rgb(0, 0, 0, .75)' }}>
    <Link to="/" className="flex items-center opacity-75 hover:opacity-100 hover:text-shadow-glow focus:text-shadow-glow focus:outline-none">
      <Spade className="block h-4" />
      <h1 className="ml-1 text-lg lowercase font-thin">
        Adoxography
      </h1>
    </Link>
  </nav>
);

export default TopNav;
