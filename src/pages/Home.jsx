import React from 'react';
import HomeCard from './../component/HomeCard';
import Filter from './../component/Filter';

const Home = () => {
  return (
    <div class='m-3'>
      <Filter />
      <div className='flex flex-wrap m-2'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
}

export default Home;