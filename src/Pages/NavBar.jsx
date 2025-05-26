import React from "react";
import { TbCoffee } from "react-icons/tb";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/product">Coffee Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <TbCoffee className="text-sky-400" />
            Aroma Sriwijaya
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold hover:text-amber-700" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-amber-700" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-amber-700" to="/product">
                Coffee Product
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-amber-700" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn mr-2 bg-white text-black">Request a Quote</a>
          <a className="btn mr-2 bg-sky-400 text-white">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
