import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Trending from './Trending';
import Pagination from './Pagination';

function Home() {
  return (
    <>
    <Banner/>
    <Trending/>
    <Pagination/>
    </>
  )
}

export default Home;