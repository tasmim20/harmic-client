import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from './Category';
import Item from './Item';

const Items = ({items}) => {
    
    

  

    return (
        <div className=' grid  lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-x-32 gap-y-20'>
         
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;