import React from 'react';
import ArrivalProduct from './ArrivalProduct';
import demo from '../../../Assets/Images/10_654a84bf-bcd9-4dd8-8f71-a01018b74c01_600x600_crop_center.jpg';
import cras from '../../../Assets/Images/8_f23aa418-f01c-4880-8531-c83eb15d80f3_600x600_crop_center.jpg';
import black from '../../../Assets/Images/5_9d119913-21f9-495f-bfc5-6554dfe4bec6_600x600_crop_center.jpg';
import greem from '../../../Assets/Images/2_5ac7c6bd-b4a5-4e34-bd58-06979b4d1549_600x600_crop_center.jpg';
import Peanut from '../../../Assets/Images/4_0d93349a-3149-41f9-891b-6de542365358_600x600_crop_center.jpg';
import coconut from '../../../Assets/Images/1_3ec7c91e-1742-4a93-8e66-2073547e4c43_600x600_crop_center.jpg';

const ArrivalProducts = () => {
    return (
<div>
<h2 className='text-lime text-center text-xl mb-2'>See our latest</h2>
            <h2 className='text-3xl text-center font-bold -mb-10'>ARRIVAL PRODUCTS</h2>
<div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 '>
            
            {itemData.map((item) => (
        <ArrivalProduct item={item}></ArrivalProduct>
      
    ))}
        </div>
</div>
    );
};

const itemData = [
  
    {
      img: `${demo}`,
      title: 'Demo Product Title',
      price:'$50.00'
    },
    {
      img: `${cras}`,
      title: 'Cras neque metus',
      price:'$50.00'
    },
    {
      img: `${black}`,
      title: 'Black Pepper Read',
      price:'$30.00'
    },
    {
      img: `${greem}`,
      title: 'Green Big Bean',
      price:'$80.00'
    },
    {
      img: `${Peanut}`,
      title: 'Peanut Big Bean',
      price:'$100.00'
    },
    {
      img: `${coconut}`,
      title: 'Natural Coconut',
      price:'$80.00'
    },
   

  ];


export default ArrivalProducts;