import React from "react";

const Loading = () => {
  return (
    <div className='absolute top-[50%] left-[50%] w-[200px] h-[200px] translate-x-[-50%] translate-y-[-50%]'>
      <hr className='absolute w-[100px] h-[100px] border-0 rounded-full bg-[#19A68C] animate-spinSlow animation-delay--1.5s' />
      <hr className='absolute w-[100px] h-[100px] border-0 rounded-full bg-[#F63D3A] animate-spinSlow animation-delay--1s' />
      <hr className='absolute w-[100px] h-[100px] border-0 rounded-full bg-[#FDA543] animate-spinSlow animation-delay--0.5s' />
      <hr className='absolute w-[100px] h-[100px] border-0 rounded-full bg-[#193B48] animate-spinSlow' />
    </div>
  );
};

export default Loading