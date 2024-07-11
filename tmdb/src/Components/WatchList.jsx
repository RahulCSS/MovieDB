import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { MovieContext } from './MovieContext';

const genreId ={
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    };
function WatchList() {
    const {watchList,setwatchList,handleRemovefromWatchList} = useContext(MovieContext)
    const [genreList,setgenreList] = useState(["All Genres"]);
    const [search,setsearch] = useState("");
    const [currGenre, setCurrGenre] = useState("All Genres");

    function handleIncrease(){
       const sorted = watchList.sort((movieA,movieB) => movieA.vote_average-movieB.vote_average);
        setwatchList([...sorted])
    }
    function handleDecrease(){
       const sorted = watchList.sort((movieA,movieB) => movieB.vote_average-movieA.vote_average);
        setwatchList([...sorted])
    }
    function handleSearch(e){
        setsearch(e.target.value);
        //* console.log(e.target.value);
    }

    const handleFilter = (genre) => {
        setCurrGenre(genre);
    };

    useEffect(()=>{
       let temp = watchList.map((movieObj)=> genreId[movieObj.genre_ids[0]])
       temp = new Set(temp);
       //*console.log(temp);
       setgenreList(["All Genre",...temp]);
    },[watchList])

    const genre = (genre_id) => {
        return genreId[genre_id];
    };

    const Genre = () => (
        <div className="flex justify-center m-4">
          {genreList.map((genre) => {
            const isActive = currGenre === genre;
            const baseStyles =
              "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 hover:cursor-pointer";
            const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
            return (
              <div
                onClick={() => handleFilter(genre)}
                className={`${baseStyles} ${bgColor}`}
              >
                {genre}
              </div>
            );
          })}
        </div>
    );

    const filteredMovies = () => {
        return watchList
          .filter((movie) => {
            if (currGenre === "All Genres") {
              return true;
            } else {
              return genreId[movie.genre_ids[0]] === currGenre;
            }
          })
          .filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase());
          });
    };

    return (
    <>
        <Genre/>
        <div className="flex justify-center my-10">
            <input onChange={handleSearch} value={search}
                placeholder="Search Movie"
                className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
                type="text"/>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th>
                            <div className="flex gap-2 ">
                            <FontAwesomeIcon className="cursor-pointer" onClick={handleIncrease} icon={faArrowUp} />
                            Ratings
                            <FontAwesomeIcon className="cursor-pointer" onClick={handleDecrease} icon={faArrowDown} />
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <div>Popularity</div>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <div>Genre</div>
                            </div>
                        </th>
                        <th>
                            <div className="flex">
                                <div>Delete</div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                
                {filteredMovies()
                .map((movie)=> (
                            <tr className="hover:bg-gray-50" key={movie.id}>
                                <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                                    <img
                                        className="h-[6rem] w-[10rem] object-fit object-cover rounded-r-lg"
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        alt=""
                                    />
                                    <div className="font-medium text-gray-700 text-sm">
                                        {movie.title}
                                    </div>
                                </td>
                                <td className="pl-6 py-4">{movie.vote_average}</td>
                                <td className="pl-6 py-4">{movie.popularity}</td>
                                <td>{genreId[movie.genre_ids[0]]}</td>
                                <td onClick={()=>handleRemovefromWatchList(movie)} className="text-red-500 "><FontAwesomeIcon className="cursor-pointer" icon={faTrash} /></td>
                            </tr>
                ))}
            </tbody>
        </table>
    </div>
</>
  )
}

export default WatchList;