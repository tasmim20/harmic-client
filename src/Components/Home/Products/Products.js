import React from 'react';
import Product from './Product';

const Products = () => {
    return (
        <div>
<h2 className='text-lime text-center text-xl mb-2'>See our latest</h2>
            <h2 className='text-3xl text-center font-bold -mb-10'>ARRIVAL PRODUCTS</h2>
<div className='grid  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-32 gap-y-20 '>
            
            {Array.from(Array(4)).map((_, index) => (
       <Product></Product>
      
    ))}
        </div>
</div>
    );
};

export default Products;