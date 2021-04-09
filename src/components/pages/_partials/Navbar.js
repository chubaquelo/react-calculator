import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const desktopMenu = (
    <ol className="hidden md:flex flex-row w-3/12 justify-around">
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
  );

  const mobileMenu = (
    <div className="absolute w-screen h-screen bg-black text-white">Hello there</div>
  );

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(state => !state);
  };

  const mobileMenuBtn = (
    <button
      onClick={handleToggleMobileMenu}
      type="button"
      className="h-10 w-10 flex md:hidden text-3xl cursor-pointer align-middle justify-center"
    >
      ☰
    </button>
  );

  return (
    <nav className="flex flex-row justify-between h-14 bg-blue-700 text-white text-xl p-3">
      <div>
        <h1 className="text-3xl mb-3">MATH MAGICIANS</h1>
      </div>
      {desktopMenu}
      {mobileMenuBtn}
      {toggleMobileMenu && mobileMenu}
    </nav>
  );
}
