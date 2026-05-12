import axios from "axios";
import { useEffect, useState } from "react";



const baseurl="https://image.tmdb.org/t/p/original/";

export default function Banner(){
    const[trendingmovie,setmovie]=useState(null);

    useEffect(()=>{
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1de800cac43e850f2c391f9f393003d7').then(function(pro){
        
        let ranmov=pro.data.results[Math.floor(Math.random()*20)];
        
        setmovie(ranmov);
    })
    },[]);
   
    if(!trendingmovie){
            return <h1>...loading</h1>
        };
    return(
        
        <div className="relative">
            <img className="w-full h-120" src={baseurl+trendingmovie.backdrop_path}/>
            <p className="absolute bottom-4 text-white translate-x-[-50%] left-[50%] text-4xl">{trendingmovie.title}</p>
        </div>
    )
}