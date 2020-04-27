import React from 'react';

const Textarea = ({ className, id, required, onFocus, onBlur }) => (
  <textarea
    id={id}
    name={id}
    required={required}
    className={`py-2 px-4 w-full appearance-none rounded-lg leading-normal text-gray-900 border bg-gray-050 border-gray-700 focus:outline-none ${className}`}
    onFocus={onFocus}
    onBlur={onBlur}
  ></textarea>
);

export default Textarea;
