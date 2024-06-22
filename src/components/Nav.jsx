import React from "react";

const Nav = () => {
  return (
    <header className = 'absolute w-full'>
      <nav className="flex justify-between padding-x text-white py-5">
        <div className="font-clicker text-5xl">Bean Scene</div>
        <div>
            <ul className = 'flex font-playfair text-m gap-16'>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
