import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between h-14 bg-blue-700 text-white text-xl p-3">
      <div>
        <h1 className="text-3xl mb-3">MATH MAGICIANS</h1>
      </div>
      <ol className="flex flex-row w-3/12 justify-around">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote of Day</Link>
        </li>
      </ol>
    </nav>
  );
}
