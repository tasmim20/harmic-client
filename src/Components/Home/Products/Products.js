import React from 'react';
import Product from './Product';
import read from '../../../Assets/Images/5_9d119913-21f9-495f-bfc5-6554dfe4bec6_600x600_crop_center.jpg';
import narikel from '../../../Assets/Images/3_f6a01d7d-354f-425d-b276-25e71ac2956d_600x600_crop_center.jpg';
import capsicum from '../../../Assets/Images/1_3ec7c91e-1742-4a93-8e66-2073547e4c43_600x600_crop_center.jpg';
import capsicum2 from '../../../Assets/Images/1_c33b2b68-6236-4158-bc37-bd6950f997de_600x600_crop_center.jpg';

const Products = () => {
    return (
        <div>
<h2 className='text-lime text-center text-xl mb-2'>See our latest</h2>
            <h2 className='text-3xl text-center font-bold -mb-10'>ARRIVAL PRODUCTS</h2>
<div className='grid  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-32 gap-y-20 '>
            
            {itemData.map((item) => (
       <Product item={item}></Product>
      
    ))}
        </div>
</div>
    );
};


const itemData = [
  
    {
      img: `${read}`,
      title: 'Black Peppepr Read',
      price:'$80.00'
    },
    {
      img: `${capsicum}`,
      title: 'Peanut Big Bean',
      price:'$100.00'
    },
    {
      img: `${narikel}`,
      title: 'Black Peppepr Grains',
      price:'$30.00'
      
    },
    {
      img: `${capsicum2}`,
      title: 'Black Peppepr Grains',
      price:'$130.00'
      
    },

  ];


export default Products;