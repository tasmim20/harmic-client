import React from 'react';
import product from '../../../Assets/Images/1_3ec7c91e-1742-4a93-8e66-2073547e4c43_600x600_crop_center.jpg';

const Product = () => {
    return (
        <div>
            <div className="card lg:w-64  bg-base-100  border border-light rounded-sm">
  <figure className=' w-100 h-48 '><img className='' src={product} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl">
     Black Pepper Grains
     
    </h2>
    <p className='text-sm'>$100.00</p>
   
  </div>
</div>
        </div>
    );
};

export default Product;