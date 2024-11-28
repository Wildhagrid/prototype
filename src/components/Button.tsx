import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export function Button({ to, children }: ButtonProps) {
  return (
    <Link
      to={to}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg 
                 transition-colors duration-200 transform hover:scale-105"
    >
      {children}
    </Link>
  );
}