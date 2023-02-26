import React from 'react';
import earphones from '../../../../Assets/Images/earphones.png'

const Process = () => {
    return (
        <div>
            
            <div className="card-body border-2 border-lime">
 <div className='flex'>
    <div className='mr-5'>
    <img src={earphones} />
    </div>
    <div>
    <h2 className="card-title">Online Support</h2>
    <span className='text-sm'>24/7 Online Support Provide</span>
    </div>
 </div>
   </div>
</div>
        
    );
};

export default Process;