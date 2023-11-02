import React from 'react';
import icons from '../assets/icons';
import images from '../assets/images/images';

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between h-20 px-3'>
      <div>
        <icons.menu />
        <img className='w-32' src={images.youtube} alt="" />
      </div>
      <div>
        <div>
          <input type="type" placeholder='Search' />
          <div>
            <icons.search />
          </div>
        </div>
        <div>
          <icons.microphone />
        </div>
      </div>
      <div>
        <icons.video />
        <icons.notification />
        <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
      </div>
    </div>
  )
}

export default Navbar
