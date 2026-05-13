import { useState,useEffect } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
import Pagination from "./Pagination";

const baseurl="https://image.tmdb.org/t/p/original/";

export default function Movies({watchlist,addtowatch,removewatchlist}){
  const [mov,setmov]=useState(null);
  const [page,npg]=useState(1);
 

  const handlenext =()=>{
   npg(page+1);
  }
  const handlebefore =()=>{
    if(page>1){
  npg(page-1);}
  }
  useEffect(()=>{
    localStorage.setItem("yourwatchlist",JSON.stringify(watchlist));
  },[watchlist]);
  useEffect(()=>{
   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`).then((res)=>{
    setmov(res.data.results);
   })
  },[page])
  if(!mov){
    return <h1>...loading</h1>
  }
    return(
      <>
      <h2 className="text-center m-12 text-4xl">Trending Movies</h2>
       <div className="flex flex-wrap justify-evenly" > 
           
           {mov.map((movi)=>{
            return(
              <Moviecard key={movi.id} mymovie={movi}  fav={watchlist.some((movik)=>{ return movik.id ===movi.id})} 
              addtowatch={addtowatch} title={movi.title} poster={baseurl+movi.backdrop_path}
              removewatchlist={removewatchlist}/>
            )
           })}
                  
         
        </div>
        <Pagination page={page} handlenext={handlenext} handlebefore={handlebefore} />
        </>
       
    );
};