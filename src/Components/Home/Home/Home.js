import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ArrivalProducts from '../ArrivalProducts/ArrivalProducts';
import Processes from '../Processes/Processes';
import Products from '../Products/Products';
import Categories from '../SelectedSection/Categories';
import Items from '../SelectedSection/Items';
import Carosel from './Carosel';
import Offers from './Offers/Offers';
import Section from './Section/Section';

const Home = () => {

   
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([])

    console.log(categories);

    useEffect(() =>
    {
        axios.get('https://harmic-server-two.vercel.app/categories')
        .then(res => {
            setCategories(res.data.result)
            setItems(res.data.result[0].items)
        })                                
    } ,[])


    return (
        <div className=''>
            <Carosel></Carosel>
            <div className='  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
            <Processes></Processes>

            
            
          
            </div>
            <div className='max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
                <Categories setItems={setItems} categories={categories}></Categories>
            </div>
            <div className='max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
               <Items items={items}></Items>
            </div>
         

           
           <div className='max-w-8xl  p-6 mx-auto space-y-6 sm:space-y-12  '> <Offers></Offers> </div>

           <div className='  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
          
            
          <Products></Products>
          </div>
          
            <Section></Section>
            <div className=' max-w-7xl  p-6 mx-auto space-y-6 sm:space-y-12'>
            <ArrivalProducts></ArrivalProducts>
            </div>
            

        </div>
    );
};

export default Home;