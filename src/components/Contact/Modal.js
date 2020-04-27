import React from 'react';

const Modal = ({ show, children, onBlur }) => (
  <div className={`w-full h-full absolute top-0 flex items-center justify-center transition-all duration-500 ${show ? 'opacity-100' : 'opacity-0 -z-10'}`}>
    <div className="w-full h-full absolute top-0 bg-black opacity-75" onClick={onBlur} />
    <div className="rounded-lg shadow-lg bg-gray-200 p-8 z-10">
      {children}
    </div>
  </div>
);

export default Modal;
