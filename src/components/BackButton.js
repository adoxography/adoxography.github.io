import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className="absolute bottom-0 w-full flex md:justify-center text-2xl lowercase">
    <Link to="/" className="ml-2 block opacity-75 hover:opacity-100 focus:outline-none hover:text-shadow-glow focus:text-shadow-glow transition-all duration-300">
      Back
    </Link>
  </div>
);

export default BackButton;
