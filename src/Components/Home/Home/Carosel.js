import React from 'react';
import bg from '../../../Assets/Images/1-1.jpg'
import tomato from '../../../Assets/Images/1-3-601x534.png'
import tomato2 from '../../../Assets/Images/2-1-601x426.png'

const Carosel = () => {
    return (
        <div >
           <div className="hero  bg-base-200 max-h-full" style={{backgroundImage:`url(${bg})`, minHeight:610}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={tomato2} className=" rounded-lg w-1/2" />
    <div className='font-hairline' >
        <p className='text-xl font-serif '>Natural & Organic</p>
      <h3 className="text-7xl  font-serif  py-6">45% Offer All 
      Products.
      </h3>
      
      <button className="btn bg-black hover:bg-lightyellow  hover:text-black px-7 rounded-none ">Shop Now</button>
    </div>
  </div>
</div>
          
          {/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero  bg-base-200" style={{backgroundImage:`url(${bg})`}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={tomato} className="w-1/2 rounded-lg " />
    <div className='font-hairline' >
        <p className='text-xl font-serif '>Natural & Organic</p>
      <h1 className="text-7xl  font-serif  py-6">45% Offer All 
      Products.
      </h1>
      
      <button className="btn bg-black hover:bg-lightyellow px-7 rounded-none ">Shop Now</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle rounded-none  text-black bg-white  hover:bg-lime"><p className='bg-black'>❮</p></a> 
      <a href="#slide2" className="btn btn-circle rounded-none  text-black bg-white hover:bg-lime" >❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero  bg-base-200" style={{backgroundImage:`url(${bg})`}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={tomato2} className="w-1/2 rounded-lg " />
    <div className='font-hairline' >
        <p className='text-xl font-serif '>Natural & Organic</p>
      <h1 className="text-7xl  font-serif  py-6">40% Offer All 
      Products.
      </h1>
      
      <button className="btn bg-black hover:bg-lightyellow px-7 rounded-none ">Shop Now</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle rounded-none bg-white  hover:bg-lime">❮</a> 
      <a href="#slide3" className="btn btn-circle rounded-none bg-white hover:bg-lime">❯</a>
    </div>
  </div> 

</div> */}
        </div>
    );
};

export default Carosel;