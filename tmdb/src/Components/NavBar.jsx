import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function NavBar() {

  return (
    <div className='flex font-bold text-2xl text-blue-600 mx-2 py-2 gap-2'>
        <FontAwesomeIcon className='h-8 mx-2'icon={faFilm} />
        <Link to='/' >Movies</Link>
        <Link to='/watchList' >WatchList</Link>
    </div>
  )
}

export default NavBar;