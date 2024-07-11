import React from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { useState, useEffect } from'react';
import axios from 'axios';
import { useContext } from 'react';
import { MovieContext } from './MovieContext';

function Trending() {
    const {pageNo} = useContext(MovieContext);
    const [movies, setmovies] = useState([]);
    
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c6b78ed205890e81b37365fd4acc063f&page=${pageNo}`)
        .then(function(response){
            setmovies(response.data.results);
        })
    },[pageNo]);

    if(movies.length === 0){
        return<>...Loading</>
    }

    return (
        <>
            <div className='m-2 font-bold text-2xl text-center'>Trending Movies</div>
            <div className='flex flex-wrap justify-around gap-3 m-2'>
                {
                    movies.map((movieObj)=>{
                        return <MovieCard
                                    key = {movieObj.id}
                                    movieObj = {movieObj}
                                    title = {movieObj.title}
                                    poster_path = {movieObj.poster_path}
                                    vote_average = {movieObj.vote_average}/>
                    })
                }
            </div>
                <Pagination/>
        </>
    )
}

export default Trending