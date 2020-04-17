import React from 'react';
import TopNav from '../TopNav';

const Portfolio = () => (
  <>
    <TopNav />

    <div className="mx-8 mt-8 mb-8">
      <article className="flex">
        <a href="http://alglang.net" target="_blank" rel="noopener noreferrer" className="block flex-shrink-0 mr-4">
          <img src="alglang-logo.png" alt="Alglang logo" className="h-24" />
        </a>
        <p className="opacity-75">
          The Database of Algonquian Language Structures (<a href="https://alglang.net" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-shadow-glow focus:outline-none focus:text-shadow-glow transform-all duration-150">alglang.net</a>) is a project to provide basic information about the sounds and grammar of the Algonquian languages in an easily searchable format.
        </p>
      </article>

      <article className="mt-12 flex">
        <p className="opacity-75">
          I often find myself needing a timer for the work sessions within in-person workshops I teach. All of the MacOS timers I've found so far either won't work on top of a full-screen app, or are glued to the top bar. <a href="https://github.com/adoxography/countdown" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-shadow-glow focus:outline-none focus:text-shadow-glow transform-all duration-150">Countdown</a> overcomes both of these limitations.
        </p>
        <a href="https://github.com/adoxography/countdown" target="_blank" rel="noopener noreferrer" className="block flex-shrink-0 ml-4">
          <img src="countdown-logo.png" alt="Countdown logo" className="h-24" />
        </a>
      </article>

      <article className="mt-12">
        <p className="opacity-75">
          I'm always working on new things! You can find a lot more of my work on <a href="https://github.com/adoxography" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-shadow-glow focus:outline-none focus:text-shadow-glow transform-all duration-150">GitHub</a>.
        </p>
      </article>
    </div>
  </>
);

export default Portfolio;
