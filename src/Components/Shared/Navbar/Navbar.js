import React, { useContext } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
  const{user, logOut} = useContext(AuthContext);
    return (
        <div className="navbar bg-lime fixed z-40 " style={{ minHeight:80}}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/shops'>Shops</Link></li>
            {
          user?.uid ? 
          <>
         
         <li tabIndex={0}>
          <a className="justify-between">
           Dashboard
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2  text-white bg-lime">
          <li><Link to='/addBlogs'>Add Blogs</Link></li>
          <li><Link to='/viewBlogs'>View Blogs</Link></li>
          </ul>
        </li>
         <li onClick={logOut} className="btn bg-lime border-none hover:bg-lime">Log Out</li>
          </>
         
          :
          <>
             <li><Link to='/register'>Register</Link></li>
            <li><Link to ='/login'>Login</Link></li>
          </>
         }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-extrabold"> <HiShoppingCart className='text-black'></HiShoppingCart>Harmic</a>
        </div>
        <div className="navbar-center hidden lg:flex text-white font-semibold">
          <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blogs' className=''>Blogs</Link></li>
          <li><Link to='/shops'>Shops</Link></li>
         
          <span className="indicator-item text-sm badge badge-error bg-red text-white rounded-none -ml-12">NEW</span> 
           {/* <div className="badge badge-error bg-red text-white text-sm rounded-none">NEW</div> */}
           {
          user?.uid ? 
          <>
         
      
        <li tabIndex={0}>
        <Link>
          Dashboard
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100 text-white bg-lime">
        <li><Link to='/addBlogs'>Add Blogs</Link></li>
          <li><Link to='/viewBlogs'>View Blogs</Link></li>
        </ul>
      </li>
          <li onClick={logOut} className="btn  bg-lime border-none hover:bg-lime">Log Out</li>
          </>
         
          :
          <>
             <li><Link to='/register'>Register</Link></li>
            <li><Link to ='/login'>Login</Link></li>
          </>
         }
         
          </ul>
        </div>
        <div className="navbar-end">
         
          <input type="checkbox" className="toggle toggle-lime" checked />
        </div>
      </div>
    );
};

export default Navbar;