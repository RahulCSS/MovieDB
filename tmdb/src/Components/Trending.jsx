import React from 'react'
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { useState, useEffect } from'react';
import axios from 'axios';

function Trending() {

    const [movies, setmovies] = useState([]);
    const [pageNo,setpageNo] = useState(1);
    const [watchList,setwatchList] = useState([]);

    const handleAddtoWatchList =(id)=>{
        const newWatchList =[...watchList];
        newWatchList.push(id);
        localStorage.setItem('watchList', JSON.stringify(newWatchList));
        setwatchList(newWatchList);
        console.log(newWatchList);
    }

    const handleRemovefromWatchList =(id)=>{
        const newWatchList = watchList.filter((movieId)=>{
            return id!==movieId;
        })
        localStorage.setItem('watchList', JSON.stringify(newWatchList));
        setwatchList(newWatchList);
        console.log(watchList);
    }

    const handleNext = function(){
       if(pageNo >=1){
        setpageNo(pageNo + 1);
       }
    }
    const handlePrev = function(){
        if(pageNo >1){
            setpageNo(pageNo - 1);
        }
    }

    useEffect(()=>{
        let localStorageWatchList = JSON.parse(localStorage.getItem('watchList'));
        setwatchList(localStorageWatchList);
    },[]);

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=c6b78ed205890e81b37365fd4acc063f&page=${pageNo}`)
        .then(function(response){
            setmovies(response.data.results);
        })
    },[pageNo]);

    if(movies.length == 0){
        return<>...Loading</>
    }

  return (
    <>
        <div className='m-2 font-bold text-2xl text-center'>Trending Movies</div>
        <div className='flex flex-wrap justify-around gap-3 m-2'>
            {
                movies.map((movieObj)=>{
                    return <MovieCard key={movieObj.id} 
                                    id={movieObj.id}
                                    title={movieObj.title} 
                                    poster_path={movieObj.poster_path}
                                    vote_average={movieObj.vote_average}
                                    watchList={watchList}
                                    handleAddtoWatchList={handleAddtoWatchList}
                                    handleRemovefromWatchList={handleRemovefromWatchList}/>
                })
            }
        </div>
            <Pagination pageNo={pageNo}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
            />
    </>
  )
}

export default Trending