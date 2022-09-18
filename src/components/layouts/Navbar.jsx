import { Link } from "react-router-dom";
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
          <Link to="/" className="font-semibold text-xl">
            Website
          </Link>
          <Link to="/shop">Shop</Link>
          <li>Marriage Beuro</li>
          <li>Qura’an</li>
        </ul>
        {/* Search and Login */}
        <div className="">
          {/* Search */}
          {/* ------------- */}
          {/* Login */}
          <div className="flex items-center gap-x-5">
            <div className="flex items-center relative group">
              <SearchIcon className="text-gray-400 absolute left-2 transition duration-300 group-hover:text-gray-800" />
              <input type="text" className="pl-8" placeholder="Search" />
            </div>
            <div className="flex items-center gap-x-3">
              <CartIcon className="text-green-500" />
              <div className="text-links">Login</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
