import React, { useEffect } from 'react';
import bg from '../../Assets/Images/1-1-1920x373 (1).jpg'


const Shops = () => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('Called after 1 sec!')
        }, 100)
     
        return () => clearTimeout(timeout)
    }, [])
    return (
        <div>
        <div className="hero  bg-base-200 max-h-full" style={{backgroundImage:`url(${bg})`, minHeight:610}}>
            <h2>this is blog</h2>
            
        </div>
        </div>
    );
};

export default Shops;