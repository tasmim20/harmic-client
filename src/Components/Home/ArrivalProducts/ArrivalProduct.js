import React, { useState } from 'react';
import strawbray from '../../../Assets/Images/10_654a84bf-bcd9-4dd8-8f71-a01018b74c01_600x600_crop_center.jpg';
import { HiShoppingCart } from "react-icons/hi";

const ArrivalProduct = ({item}) => {
  const [style, setStyle] = useState({display: 'none'});
    return (
        <div>
         
            <div className="card card-side bg-base-100 border  border-light rounded-sm "  style={{backgroundColor: 'white'}}    onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}> 
  {/* <figure className=' pl-2 w-40 my-3 rounded transition duration-700 hover:scale-110'><img className='' src={strawbray} alt="Movie"/></figure> */}
  <figure className=' w-36 p-2  '><img className='transition duration-700 hover:scale-95' src={item.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-xl font-serif hover:text-lime">{item.title}</h2>
    <p className='text-sm'>{item.price}</p>
  
    <div className="card-actions justify-end ">
    <button  style={style} className="btn bg-lime hover:bg-black hover:text-white rounded-none border-none -mt-6 -mb-5 "><HiShoppingCart></HiShoppingCart></button>
    </div>
  </div>
</div>
        </div>
    );
};


export default ArrivalProduct;