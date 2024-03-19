import React from 'react';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-6xl font-bold]'>Resorts</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      </div>

      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-6xl font-bold]'>Cruise</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src="https://images.unsplash.com/photo-1580166463495-ab4d21922c22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      </div>

      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ext-black text-65xl font-bold]'>Scuba Diving</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      </div>
      
    </div>
  );
};

export default Activities;
