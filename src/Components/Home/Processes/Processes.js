import React from 'react';
import Process from './Process/Process';
import earphones from '../../../Assets/Images/earphones.png';
import plane from '../../../Assets/Images/plane.png';
import shield from '../../../Assets/Images/shield.png';


const Processes = () => {
    return (
        <div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 my-20'>
            
            {itemData.map((item) => (
            <Process item={item} ></Process>
  ))}
        </div>
    );
};

const itemData = [
  
    {
      img: `${earphones}`,
      title: 'Online Support',
      process:'24/7 Online Support Provide'
    },
    {
      img: `${plane}`,
      title: 'Free Shipping',
      process:'Free Home Delivery Offer'
    },
    {
      img: `${shield}`,
      title: 'Secure Payment',
      process:'Fully Secure Payment System'
      
    },

  ];





export default Processes;