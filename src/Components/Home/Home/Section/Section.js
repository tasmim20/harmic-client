import React from 'react';
import bg from '../../../../Assets/Images/2-1-1920x523.jpg';
import capsicum from '../../../../Assets/Images/2-1-503x430.png';


const Section = () => {
    return (
        <div className='my-10'>
            <div className="hero  bg-base-200 " style={{backgroundImage:`url(${bg})`, minHeight:610}}>
  <div className="hero-content flex-col lg:flex-row ">
 
    <img  src={capsicum} className=" rounded-lg mr-5  transition duration-700 hover:scale-110" />
    <div className='ml-10'>
      <h1 className="text-white font-bold text-xl">New Offer Products.!</h1>
      <h1 className="py-6 text-white text-7xl font-serif font-bold">SAVE 20% OFF</h1>
      <button className="btn bg-white text-black hover:bg-black  hover:text-white px-7 rounded-none border-none py-2   ">Shop Now</button>
 
    </div>
  </div>
</div>
        </div>
    );
};

export default Section;