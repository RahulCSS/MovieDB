import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NavBar() {

    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c6b78ed205890e81b37365fd4acc063f')
    .then(function(response){
        console.log(response);
        let movies = response.data.results;
        console.log(movies);
        let random = movies[Math.floor(Math.random()*11)];
        console.log(random);
    })
    
  return (
    <div className='flex font-bold text-2xl text-blue-600 mx-2 py-2 gap-2'>
        <FontAwesomeIcon className='h-8 mx-2'icon={faFilm} />
        <Link to='/' >Movies</Link>
        <Link to='/watchList' >WatchList</Link>
    </div>
  )
}

export default NavBar;