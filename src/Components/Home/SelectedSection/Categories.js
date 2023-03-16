import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';
import Items from './Items';


const Categories = ({categories, setItems}) => {

  





    return (
      <div className='flex items-center justify-center'>  
        <div className='grid  lg:grid-cols-4  grid-cols-4   gap-x-10 gap-y-8  '>
      {
         categories.map(category => <Category key={category.item_id} setItems={setItems} category={category}></Category>)
      }

    
     </div></div>
    );
};

export default Categories;