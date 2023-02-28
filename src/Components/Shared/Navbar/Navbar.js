import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className="navbar bg-lime">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Blog</a></li>
            <li><a>Register</a></li>
            <li><a>Login</a></li>
           <li><a>Dashbooard</a></li>
           <li><a>Shop</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-extrabold"> <HiShoppingCart className='text-black'></HiShoppingCart>Harmic</a>
        </div>
        <div className="navbar-center hidden lg:flex text-white font-semibold">
          <ul className="menu menu-horizontal px-1">
            <li><a>Blog</a></li>
            <li><a>Register</a></li>
            <li><a>Login</a></li>
           <li><a>Dashbooard</a></li>
           <li><a>Shop</a></li>
           <div className="badge badge-error bg-red text-white text-sm rounded-none">NEW</div>
          </ul>
        </div>
        <div className="navbar-end">
         
          <input type="checkbox" className="toggle toggle-lime" checked />
        </div>
      </div>
    );
};

export default Navbar;