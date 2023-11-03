import React from 'react';
import images from '../assets/images/images'

const HomeCard = () => {
  return (
    <div className='w-[300px] m-3 cursor-pointer'>
      <img src={images.img} alt="" />
      <div Classname='font-bold mt-1'>Title Title Title Title Title Title Title Title Title Title</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>Arzu Caner</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>
        <span>300K views</span>
        <span>3 years ago</span>
      </div>
    </div>
  )
}

export default HomeCard;
