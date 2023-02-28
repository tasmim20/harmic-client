import React from 'react';
import bg from '../../../Assets/Images/1-1.jpg'
import tomato from '../../../Assets/Images/1-3-601x534.png'
import tomato2 from '../../../Assets/Images/2-1-601x426.png'

const Carosel = () => {
    return (
        <div >
           <div className="hero  bg-base-200 max-h-full" style={{backgroundImage:`url(${bg})`, minHeight:610}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={tomato2} className=" rounded-lg " />
    <div className='font-hairline' >
        <p className='text-xl font-serif ' data-aos="fade-up" data-aos-duration="1000"
     >Natural & Organic</p>
      <h3 className="text-7xl  font-serif  py-6" data-aos="fade-up"
     data-aos-duration="2000">45% Offer All 
      Products.
      </h3>
      
      <button data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="2000" className="btn bg-black hover:bg-lightyellow  hover:text-black px-7 rounded-none ">Shop Now</button>
    </div>
  </div>
</div>
          

        </div>
    );
};

export default Carosel;