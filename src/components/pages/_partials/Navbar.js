import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(state => !state);
  };

  const menuLinks = (
    <>
      <li>
        <Link onClick={() => setToggleMobileMenu(false)} to="/">Home</Link>
      </li>
      <li>
        <Link onClick={() => setToggleMobileMenu(false)} to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link onClick={() => setToggleMobileMenu(false)} to="/quote">Quote of Day</Link>
      </li>
    </>
  );

  const desktopMenu = (
    <ol className="hidden md:flex flex-row w-3/12 justify-around">
      {menuLinks}
    </ol>
  );

  const mobileMenu = (
    <div className="absolute w-screen h-screen bg-black text-white p-4">
      <button
        type="button"
        onClick={handleToggleMobileMenu}
        className="text-white w-11 h-11 text-6xl absolute top-5 right-5"
      >
        x
      </button>
      <ol className="h-full flex flex-col w-11/12 py-20 px-5 text-5xl items-center justify-evenly">
        {menuLinks}
      </ol>
    </div>
  );

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
    <>
      <nav className={toggleMobileMenu ? 'hidden' : 'flex flex-row justify-between h-14 bg-blue-700 text-white text-xl p-3'}>
        <div>
          <h1 className="text-3xl mb-3">MATH MAGICIANS</h1>
        </div>
        {desktopMenu}
        {mobileMenuBtn}
      </nav>
      {toggleMobileMenu && mobileMenu}
    </>
  );
}
