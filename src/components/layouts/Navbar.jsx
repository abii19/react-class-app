import React from "react";
// import Cart from "../../assets/icons/Cart.svg"; //path
// import { ReactComponent as Cart } from "../../assets/icons/Cart.svg"; //react component
// import { ReactComponent as Search } from "../../assets/icons/Search.svg"; //react component

import { CartIcon, SearchIcon } from "../../assets/icons";

const Navbar = () => {
  return (
    <>
      <nav className="container flex justify-between items-center py-6">
        {/* Nav Links */}
        <ul className="flex items-center gap-x-8 text-links">
          <li className="font-semibold text-xl">Website</li>
          <li>Ziyarat</li>
          <li>Store</li>
          <li>Marriage Beuro</li>
          <li>Qura’an</li>
        </ul>
        {/* Search and Login */}
        <div className="">
          {/* Search */}
          {/* ------------- */}
          {/* Login */}
          <div className="flex items-center gap-x-5">
            <div className="">
              <CartIcon className="text-green-500" />
              <SearchIcon className="text-red-500" />
              {/* <img src={Cart} alt="" /> */}
            </div>
            <div className="text-links">Login</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
