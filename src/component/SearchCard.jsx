import React from 'react';
import images from '../assets/images/images';
import moment from 'moment';

const SearchCard = ({ search }) => {
    return (
        <div onClick={() => window.location = `/videos/${search?.id?.videoID}`} className='flex space-x-2 justify-center mx-5 my-10 cursor-pointer'>
            <img className='h-44 w-72' src={search?.snippet?.thumbnails?.high?.url} alt="" />
            <div className='w-2/3 space-y-2'>
                <div>
                    <div className='font-bold text-lg'>{search?.snippet?.title}</div>
                    <div className='text-sm text-gray-700'>
                        <span>4,5 Views *</span>
                        <span>5 hours ago</span>
                        <span>{moment(search?.snippet?.publishAt).startOf('day').fromNow()}</span>
                    </div>
                    <div className='flex items-center space-x-2 text-sm'>
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div className="text-gray-700">BOOKS</div>
                    </div>
                    <div className='text-sm text-gray=700'>
                        {search?.snippet?.description ? search?.snippet?.description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SearchCard;
