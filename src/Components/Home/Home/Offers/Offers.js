import React from 'react';
import Offer from './Offer';

const Offers = () => {
    return (
        <div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 '>
            
        {Array.from(Array(3)).map((_, index) => (
      <Offer></Offer>
))}
    </div>
    );
};

export default Offers;