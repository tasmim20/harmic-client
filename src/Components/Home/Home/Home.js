import React from 'react';
import ArrivalProducts from '../ArrivalProducts/ArrivalProducts';
import Processes from '../Processes/Processes';
import Products from '../Products/Products';
import Carosel from './Carosel';
import Offers from './Offers/Offers';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Processes></Processes>
            <Offers></Offers>
            <Products></Products>
            <ArrivalProducts></ArrivalProducts>

        </div>
    );
};

export default Home;