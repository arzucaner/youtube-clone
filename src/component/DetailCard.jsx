import React from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';

const DetailCard = ({ video }) => {
  return (
    <div>
      <ReactPlayer url={`https://youtube.com/watch?v=${video?.id}`} />
      <div className='font-bold text-2xl mt-1'>{video?.snippet?.title}</div>
      <div className='space-x-2 text-gray-800 mt-1'></div>
      <div>
        <span>
          {video?.statistics?.viewCount} Views
        </span>
        <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}
        </span>
      </div>
    </div>
  )
}

export default DetailCard;
