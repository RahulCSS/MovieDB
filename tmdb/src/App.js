import './App.css';
import './index.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import WatchList from './Components/WatchList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState, useEffect} from'react';
import { MovieContext } from './Components/MovieContext';

function App() {

  const [watchList,setwatchList] = useState([]);
  const [pageNo,setpageNo] = useState(1);
    

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

  const handleAddtoWatchList =(movieObj)=>{
      const newWatchList =[...watchList,movieObj];
      localStorage.setItem('watchList', JSON.stringify(newWatchList));
      setwatchList(newWatchList);
      console.log(newWatchList);
  }

  const handleRemovefromWatchList =(movieObj)=>{
      const newWatchList = watchList.filter((movie)=>{
          return movie.id!==movieObj.id;
      })
      localStorage.setItem('watchList', JSON.stringify(newWatchList));
      setwatchList(newWatchList);
      console.log(watchList);
  }

  useEffect(()=>{
    let localStorageWatchList = JSON.parse(localStorage.getItem('watchList'));
    if(localStorageWatchList === null){
      return
    } 
    setwatchList(localStorageWatchList);
  },[]);
  
  return (
    <BrowserRouter>
      <NavBar/>
      <MovieContext.Provider value={{watchList,setwatchList,handleAddtoWatchList,handleRemovefromWatchList,
                                    pageNo,handlePrev,handleNext}}>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
      </Routes>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;
