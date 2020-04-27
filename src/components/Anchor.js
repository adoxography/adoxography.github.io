import React from 'react';

const Anchor = ({ children, className, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${className}
                text-cyan-300 hover:text:shadow-glow hover:text-cyan-200
                hover:text-shadow-glow focus:outline-none focus:text-shadow-glow
                transform-all duration-150`}
  >
    {children}
  </a>
);

export default Anchor;
