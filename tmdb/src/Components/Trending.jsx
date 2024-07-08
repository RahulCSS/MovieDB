import React from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { useState, useEffect } from'react';
import axios from 'axios';

function Trending() {

    const [movies, setmovies] = useState([]);
    useEffect(() =>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c6b78ed205890e81b37365fd4acc063f')
        .then(function(response){
            setmovies(response.data.results);
        })
    },[]);

    if(movies.length == 0){
        return<>...Loading</>
    }

  return (
    <>
        <div className='m-2 font-bold text-2xl text-center'>Trending Movies</div>
        <div className='flex flex-wrap justify-around gap-3 m-2'>
            {
                movies.map((movieObj)=>{
                    return <MovieCard key={movieObj.id} title={movieObj.title} poster_path={movieObj.poster_path}/>
                })
            }
        </div>
            <Pagination/>
    </>
  )
}

export default Trending