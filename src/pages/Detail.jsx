import React, {useEffect} from 'react';
import { useparams, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import DetailCard from '../component/DetailCard';


const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {getVideo} = useSelector(state => state.getVideo)


  useEffect(()=>{
    dispatch(detailaction(id))
  },[dispatch])

  console.log(getVideo, "getVideo");
  
  return (
    <div>
      <DetailCard/>
    </div>
  )
}

export default Detail
