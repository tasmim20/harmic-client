import React from 'react';
import peppers from '../../../../Assets/Images/1-3-370x250.jpg'
const Offer = () => {
    return (
        <div className=''>
            <div className="card  bg-base-100 bg-no-repeat bg-left bg-cover  py-12 rounded-sm  " style={{backgroundImage:`url(${peppers})`}}>

  <div className="card-body  ">
    <p className='text-sm'>-10% Off</p>
    <h2 className="card-title">Bell Pepper  </h2>
    <h2 className="card-title">Orange</h2>
   
   
    <div className="card-actions justify-start">
    <button className="btn bg-lime hover:bg-light hover:text-black rounded-none border-none">Shop Now</button>
    </div>
  </div>
 
</div>
 
        </div>
    );
};

export default Offer;