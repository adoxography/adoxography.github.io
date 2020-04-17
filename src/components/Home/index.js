import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';
import { Spade } from '../svg';

const scrollWords = [
  'developer.',
  'linguist.',
  'educator.',
  'professional.',
  'creative.',
  'detail-oriented.',
  'Ruby.',
  'JavaScript.',
  'PHP.',
  'Python.'
];

const Home = () => (
  <div className="flex justify-center items-center h-full">
    <div className="flex flex-col text-indigo-100">
      <Spade className="h-48 md:h-64 opacity-75" />
      <h1 className="text-4xl md:text-5xl font-display uppercase font-thin tracking-wider opacity-75">
        Adoxography
      </h1>
      <Typewriter words={scrollWords} className="text-center h-2 lowercase text-lg md:text-xl text-white font-display font-semibold"/>
    </div>

    <nav className="absolute w-full flex justify-around bottom-0 font-display lowercase text-2xl mb-1 md:mb-2">
      <Link to="/about" className="block opacity-75 hover:text-shadow-glow hover:opacity-100 focus:outline-none focus:text-shadow-glow transform-all duration-300">
        About
      </Link>
      <Link to="/portfolio" className="block opacity-75 hover:text-shadow-glow hover:opacity-100 focus:outline-none focus:text-shadow-glow transform-all duration-300">
        Portfolio
      </Link>
      <Link to="/contact" className="block opacity-75 hover:text-shadow-glow hover:opacity-100 focus:outline-none focus:text-shadow-glow transform-all duration-300">
        Contact
      </Link>
    </nav>
  </div>
);

export default Home;
