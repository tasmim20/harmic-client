import React from 'react';
import ArrivalProducts from '../ArrivalProducts/ArrivalProducts';
import Processes from '../Processes/Processes';
import Products from '../Products/Products';
import Carosel from './Carosel';
import Offers from './Offers/Offers';
import Section from './Section/Section';

const Home = () => {
    return (
        <div className=''>
            <Carosel></Carosel>
            <div className='  max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
            <Processes></Processes>
            
            <Products></Products>
            </div>
           <div className='max-w-8xl  p-6 mx-auto space-y-6 sm:space-y-12  '> <Offers></Offers> </div>
          
            <Section></Section>
            <div className=' max-w-7xl  p-6 mx-auto space-y-6 sm:space-y-12'>
            <ArrivalProducts></ArrivalProducts>
            </div>
            

        </div>
    );
};

export default Home;