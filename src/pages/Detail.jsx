import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailCard from '../component/DetailCard';
import detailAction from '../redux/actions/DetailData';


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getVideo } = useSelector(state => state.getVideo)


  useEffect(() => {
    dispatch(detailAction(id))
  }, [dispatch])

  console.log(getVideo, "getVideo");

  return (
    <div>
      {
        getVideo?.items?.map((video,i) => (
          <DetailCard key={i} video={video} />
        ))

      }

    </div>
    )
}
  

export default Detail;
