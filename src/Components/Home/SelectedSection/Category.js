import React from 'react';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Items from './Items';

const Category = ({category, setItems}) => {
    const {name, image, id, items} = category;
    // console.log(items);
    return (
        <div>
               <div>
          
          <button onClick={()=> setItems(items)}>  <img src={image} alt="" /></button>
         <h2 onClick={()=> setItems(items)} className='font-serif text-center mt-3  font-medium hover:text-lime'>{name}</h2>

          
       </div>
        </div>
    );
};

export default Category;