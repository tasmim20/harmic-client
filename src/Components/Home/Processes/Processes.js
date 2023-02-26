import React from 'react';
import Process from './Process/Process';

const Processes = () => {
    return (
        <div className='grid  lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 my-20'>
            
            {Array.from(Array(3)).map((_, index) => (
            <Process></Process>
  ))}
        </div>
    );
};

export default Processes;