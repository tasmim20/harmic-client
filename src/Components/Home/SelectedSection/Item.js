import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {title, image, price,} = item;
    return (
        <div>
          
          <div className="card lg:w-64  bg-base-100  border border-light rounded-sm">
  <figure className=' w-100 h-48 '><img className='transition duration-700 hover:scale-110' src={image} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl  hover:text-lime">
    
     {title}
    </h2>
    <p className='text-sm'>{price}</p>
   
  </div>
</div>
        </div>
    );
};

export default Item;