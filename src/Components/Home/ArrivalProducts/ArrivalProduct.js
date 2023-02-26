import React from 'react';
import strawbray from '../../../Assets/Images/10_654a84bf-bcd9-4dd8-8f71-a01018b74c01_600x600_crop_center.jpg';
import { HiShoppingCart } from "react-icons/hi";

const ArrivalProduct = () => {
    return (
        <div>
         
            <div className="card card-side bg-base-100 border  border-light rounded-sm">
  <figure className=' pl-2 w-40 rounded'><img src={strawbray} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="text-xl">Demo Product Title</h2>
    <p className='text-sm'>$50.00</p>
    <div className="card-actions justify-end">
    <button className="btn bg-lime hover:bg-black hover:text-white rounded-none border-none"><HiShoppingCart></HiShoppingCart></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ArrivalProduct;