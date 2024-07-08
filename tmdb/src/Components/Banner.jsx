import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Banner() {

    const [movieObj, setmovieObj] = useState({});

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c6b78ed205890e81b37365fd4acc063f')
        .then(function(response){
            console.log(response);
            let movies = response.data.results;
            console.log(movies);
            let random = movies[Math.floor(Math.random()*11)];
            console.log(random);
            setmovieObj(random);
        })
    },[])
    
    
    
    if(movieObj.backdrop_path === undefined){
        return <>...Loading </>
    }
  return (
    <div className='flex items-end h-[50vh] bg-cover bg-center bg-no-repeat'
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`}}>
        <div className='text-white py-2 bg-gray-600/35 w-screen text-2xl text-center'>
        {movieObj.title}
        </div>
    </div>
  )
}

export default Banner 