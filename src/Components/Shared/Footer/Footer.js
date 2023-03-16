import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import footer from '../../../Assets/Images/1.png';

const Footer = () => {
    return (
 <div className=''>
           <footer className="footer pt-28 lg:pl-32 p-6  font-poppins   bg-lightyellow text-base-content" style={{ minHeight:500 , fontSize:16}}>
        <div className='' >
        <a className="btn btn-ghost normal-case text-3xl lg:-mt-3 lg:-ml-4 font-extrabold"> <HiShoppingCart className='text-black'></HiShoppingCart>Harmic</a>
          <a className=" hover:text-lime">Lorem ipsum dolor sit amet consectetur .</a> 
          <a className="hover:text-lime">dolor sit amet consectetur</a> 
          <a className="hover:text-lime">Marketing</a> 
          <a className="hover:text-lime">Jobs</a> 
          <a className="hover:text-lime">Press kit</a>
          <a className="hover:text-lime py-16 "> <img src={footer} alt="" /></a>
        </div> 
        <div className=''>
          <span className="footer-title">Information</span> 
          <a className="hover:text-lime">My Account</a> 
          <a className="hover:text-lime">Contact us</a> 
          <a className="hover:text-lime">Tracking your Order</a>
          <a className="hover:text-lime">Terms & Conditions</a>
          <a className="hover:text-lime">Manufacturers</a>
          <a className="hover:text-lime">Terms & Conditions</a>
          <a className="hover:text-lime">Manufacturers</a>
        </div> 
        <div className=''>
          <span className="footer-title">Company</span> 
          <a className="hover:text-lime">About us</a> 
          <a className="hover:text-lime">Contact</a> 
          <a className="hover:text-lime">Jobs</a> 
          <a className="hover:text-lime">Press kit</a>
          <a className="hover:text-lime">Jobs</a> 
          <a className="hover:text-lime">Press kit</a>
        </div> 
    
        <div  className=' '>
          <span className="footer-title">Newsletter</span> 
          <div className="form-control w-60">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolor.</p> 
            <div className="relative pt-5 pb-3 ">
              <input type="text" placeholder="Your Email Address" className="input input-bordered rounded-none w-full pr-16 " /> 
              
            </div>
         
          </div>
          <button className="btn bg-lime mb-3  rounded-none border-none ">Send Mail</button>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-lime  text-bslight">
  <div>
    <p>Copyright © 2023 - All right reserved by Harmic Shopify</p>
  </div>
</footer>
 </div>
    );
};

export default Footer;