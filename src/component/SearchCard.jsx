import React from 'react';
import images from '../assets/images/images';

const SearchCard = () {
    return (
        <div className='flex space-x-2'>
            <img src={images.img} alt="" />
            <div>
                <div className='font-bold text-xl'></div>
            </div>
        </div>
    )
}

export default SearchCard;
