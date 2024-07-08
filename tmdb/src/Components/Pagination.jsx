import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagination() {
  return (
    <div>
        <div className='flex gap-10 justify-center p-4 m-2 bg-gray-400 text-2xl font-bold'>
        <FontAwesomeIcon className='cursor-pointer' icon={faArrowLeft} />
        <span>1</span>
        <FontAwesomeIcon className='cursor-pointer' icon={faArrowRight} />
        </div>
    </div>
  )
}

export default Pagination