import React from 'react'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function MovieCard(props) {
    const {id,title, poster_path,vote_average,watchList,handleAddtoWatchList,handleRemovefromWatchList} = props;
    const percentage = Math.ceil(vote_average*10);
    let pathColor;
    if(percentage>65){
        pathColor = '#15d374';
    }else if(percentage<66 && percentage>32){
        pathColor = '#e7ea38';
    }else if(percentage<33 && percentage>=0){
        pathColor = '#0177d1';
    }
  return (
    <div className='flex flex-col justify-between items-end h-60 w-40 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat hover:scale-[1.10] duration-200' 
                    style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`}}>  
        <div className='flex p-2 gap-20'>
            <div className='h-8 w-8 p-0.5 bg-black rounded-full'>
                        <CircularProgressbar 
                                        value={percentage} 
                                        text={`${percentage}%`} 
                                        styles={buildStyles({
                                            rotation: 0.025,
                                            textSize: '36px',
                                            textColor: '#ffffff',
                                            pathTransitionDuration: 2,
                                            pathColor: `${pathColor}`,
                                            trailColor: '#204529',
                                            backgroundColor: '#081c22',
                                            strokeLinecap: 'round',
                                        })}/>
            </div>
            
            {watchList.includes(id)?
            <div className='text-2xl cursor-pointer decoration-slate-50 cursor-pointer' 
                            onClick={()=>handleRemovefromWatchList(id)}>&#128525;</div>:
            <div className='text-2xl cursor-pointer decoration-slate-50 cursor-pointer' 
                            onClick={()=>handleAddtoWatchList(id)}>&#128522;</div>
            }
        </div>
        <div className='text-white py-0.5 bg-gray-600/35 w-full text-base text-center'>
        {title}
        </div>
    </div>
  )
}

export default MovieCard;