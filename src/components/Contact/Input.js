import React from 'react';

const Input = ({ className, id, onFocus, onBlur, required, type = 'text' }) => (
  <input
    id={id}
    name={id}
    type={type}
    required={required}
    className={`py-2 px-4 w-full appearance-none rounded-lg leading-normal text-gray-900 border bg-gray-050 border-gray-700 focus:outline-none ${className}`}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export default Input;
