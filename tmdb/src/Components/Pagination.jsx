import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
function Pagination(props) {
    const {pageNo,handleNext,handlePrev} = props;
   
  return (
    <div>
        <div className='flex gap-10 justify-center p-4 m-2 bg-gray-400 text-2xl font-bold'>
        <FontAwesomeIcon className='cursor-pointer' onClick={handlePrev}icon={faArrowLeft} />
        <span>{pageNo}</span>
        <FontAwesomeIcon className='cursor-pointer' onClick={handleNext} icon={faArrowRight} />
        </div>
    </div>
  )
}

export default Pagination