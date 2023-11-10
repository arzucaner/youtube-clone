import React from 'react';
import images from '../assets/images/images';

const SearchCard = () => {
    return (
        <div className='flex space-x-2 justify-center m-2'>
            <img src={images.img} alt="" />
            <div className='w-2/3 space-y-2'>
                <div>
                    <div className='font-bold text-lg'>It is a long established fact that a reader will be distracted by the readable content of
                        a page when looking at its layout.
                        <div>
                            <span>4,5 Views *</span>
                            <span>5 hours ago</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div className="text-gray-700">BOOKS</div>
                        </div>
                        <div>
                            It is a long established fact that a reader will be distracted by the readable content of
                            a page when looking at its layout.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCard;
