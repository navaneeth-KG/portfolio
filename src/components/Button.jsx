import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-white text-black rounded-full px-5 py-3 text-xl my-9 font-semibold">
      {children}
    </button>
  );
};

export default Button;
