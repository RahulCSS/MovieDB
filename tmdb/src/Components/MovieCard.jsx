import React from 'react'

function MovieCard(props) {
    const {title, poster_path} = props;
  return (
    <div className='flex items-end h-56 w-36 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat' 
                    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`}}>
        <div className='text-white py-0.5 bg-gray-600/35 w-screen text-center'>
        {title}
        </div>
    </div>
  )
}

export default MovieCard;