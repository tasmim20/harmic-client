import React from 'react';
import Offer from './Offer';
import bell from '../../../../Assets/Images/1-1-370x250.jpg';
import fruit from '../../../../Assets/Images/1-2-370x250.jpg';
import Vegatable from '../../../../Assets/Images/1-3-370x250.jpg';

const Offers = () => {
    return (
        <div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 '>
            
        {itemData.map((item) => (
      <Offer item={item}></Offer>
))}
    </div>
    );
};

const itemData = [
  
    {
      img: `${bell}`,
      title1: 'Bell Pepper',
      title2:'Orange',
      offer:'-10%'
    },
    {
      img: `${fruit}`,
      title1: 'Fruit Juice',
      title2:'Package',
      offer:'-20%'
    },
    {
      img: `${Vegatable}`,
      title1: 'Full Fresh',
      title2:'Vegatable',
      offer:'-30%'
      
    },

  ];


export default Offers;