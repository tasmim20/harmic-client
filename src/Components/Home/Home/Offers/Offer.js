import React from 'react';


const Offer = ({item}) => {
    return (
        <div className=''>
            <div className="card  bg-base-100 bg-no-repeat bg-left bg-cover  py-12 rounded-sm  " style={{backgroundImage:`url(${item.img})`}}>

  <div className="card-body  ">
    <p className='text-sm'>{item.offer} Off</p>
    <h2 className=" hover:text-lime text-xl font-bold ">{item.title1} </h2>
    <h2 className=" font-bold text-xl hover:text-lime mb-2">{item.title2}</h2>
   
   
    <div className="card-actions justify-start">
    <button className="btn bg-lime hover:bg-light hover:text-black rounded-none border-none">Shop Now</button>
    </div>
  </div>
 
</div>
 
        </div>
    );
};

export default Offer;