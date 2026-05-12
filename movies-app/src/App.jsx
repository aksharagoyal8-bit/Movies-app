import {useState} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Pagination from './Components/Pagination';
import WatchList from './Components/WatchList';


function App() {
   const[watchlist,setwatchlist]=useState(JSON.parse(localStorage.getItem("yourwatchlist"))||[]);
  const addtowatch=(id)=>{
    const newwatchlist=[...watchlist,id];
    setwatchlist(newwatchlist);
  }
  const removewatchlist=(movid)=>{
    const filterwatchlist=watchlist.filter((movieji)=>movieji.id!==movid.id);
    setwatchlist(filterwatchlist);
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={
        <div>
      
      <Banner/>
      <Movies watchlist={watchlist} 
      addtowatch={addtowatch}
      removewatchlist={removewatchlist}/>
      
       
        </div>
      }/>
      <Route path="/watchlist" element={
        <WatchList moviestosee={watchlist}
        removewatchlist={removewatchlist}
        setwatchlist={setwatchlist}/> 
      }/>
    </Routes>
      
    </BrowserRouter>
  )
} 

export default App
