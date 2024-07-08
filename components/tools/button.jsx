import Link from 'next/link';
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <Link><button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Tambah Data
      {children}
    </button></Link>
  );
};

export default Button;
