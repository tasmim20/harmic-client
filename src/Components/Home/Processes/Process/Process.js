import React from 'react';
import earphones from '../../../../Assets/Images/earphones.png'

const Process = ({item}) => {
    // console.log(item)
    return (
        <div>
            
            <div className="card-body border-2 border-lime">
 <div className='flex'>
    <div className='mr-5'>
    <img src={item.img} />
    </div>
    <div>
    <h2 className="card-title">{item.title}</h2>
    <span className='text-sm'>{item.process}</span>
    </div>
 </div>
   </div>
</div>
        
    );
};

export default Process;