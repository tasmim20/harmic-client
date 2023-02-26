import React from 'react';
import ArrivalProduct from './ArrivalProduct';

const ArrivalProducts = () => {
    return (
<div>
<h2 className='text-lime text-center text-xl mb-2'>See our latest</h2>
            <h2 className='text-3xl text-center font-bold -mb-10'>ARRIVAL PRODUCTS</h2>
<div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 '>
            
            {Array.from(Array(6)).map((_, index) => (
        <ArrivalProduct></ArrivalProduct>
      
    ))}
        </div>
</div>
    );
};

export default ArrivalProducts;