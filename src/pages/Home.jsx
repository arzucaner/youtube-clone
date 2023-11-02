import React from 'react';
import HomeCard from './../component/HomeCard';
import Filter from './../component/Filter';

const Home = () => {
  return (
    <div class='m-3'>
      <Filter/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
      <HomeCard/>
    </div>
  );
}

export default Home;