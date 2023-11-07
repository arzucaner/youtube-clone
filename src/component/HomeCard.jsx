import React from 'react';
import images from '../assets/images/images';
import moment from 'moment/moment';

const HomeCard = ({video}) => {
  return (
    <div className='w-[280px] m-3 cursor-pointer'>
      <img src={images.img} alt="" />
      <div ClassName='font-bold mt-1'> {(video?.snippet?.title).substring(0,50)}...</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>{video?.snippet?.channelTitle}</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>
        <span>300K views</span>
        <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</span>
      </div>
    </div>
  )
}

export default HomeCard;
