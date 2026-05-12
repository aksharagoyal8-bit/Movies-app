import { useState,useEffect } from "react";
export default function WatchList({moviestosee, removewatchlist,setwatchlist}){
    const baseurl="https://image.tmdb.org/t/p/original/";
    const [search,setSearch]=useState(" Search...");

    const genreid={
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Science Fiction",
  10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
};
    const [genres,setgenre]=useState(["All Genres"]);
    const [selectedg,setselectedg]=useState("All Genres");
    useEffect(()=>{
    const genrelist=moviestosee.map((movieObj)=>{
      return genreid[movieObj.genre_ids[0]];
    })
    const uniqueg=new Set(genrelist);
    setgenre(["All Genres",...uniqueg]);
    },[moviestosee]);
    
    const sortAscend=()=>{
        const sortedmov=[...moviestosee].sort((movA,movB)=>{
            return movA.vote_average-movB.vote_average
        });
         setwatchlist(sortedmov);
};

const sortDes = () => {
    const sortedmov = [...moviestosee].sort((movA, movB) => movB.vote_average - movA.vote_average);
    setwatchlist(sortedmov);
};
const sortPopAscend = () => {
    const sortedmov = [...moviestosee].sort((movA, movB) => movA.popularity - movB.popularity);
    setwatchlist(sortedmov);
};

const sortPopDes = () => {
    const sortedmov = [...moviestosee].sort((movA, movB) => movB.popularity - movA.popularity);
    setwatchlist(sortedmov);
};




    return(
        <div className="flex flex-col items-center justify-center">
        <div className="flex w-[90%] justify-evenly">

            { genres.map((genre,index)=>{
                  return(
                    <div key={index} onClick={()=>(setselectedg(genre))} className={`h-[4rem]
                     w-[12rem] text-xl  flex items-center justify-center rounded-2xl  
                     cursor-pointer ${genre=== selectedg ? 'bg-blue-400' : 'bg-slate-200'}`}>
                     {genre}   </div>
                  )
                })
            }
        </div>
           <input  type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className="h-[4rem] p-4 bg-slate-200 w-[24rem] my-8"/>
            <table className=" rounded-xl overflow-hidden  w-[90%]">
                <thead className="bg-slate-300 rounded-lg h-12">
                    <tr className="text-left border-b-2">
                        <th className="!p-8">Name</th>
                        <th><i onClick={sortAscend} className="fa-solid fa-arrow-up"></i>Rating<i onClick={sortDes} className="fa-solid fa-arrow-down"></i></th>
                        <th><i onClick={sortPopAscend} className="fa-solid fa-arrow-up"></i>Popularity<i onClick={sortPopDes} className="fa-solid fa-arrow-down"></i></th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >{moviestosee.filter((movieOb)=>{
                    if(selectedg==="All Genres"){
                        return true;
                    }
                    return selectedg ===genreid[movieOb.genre_ids[0]]
                }).filter((movieObj)=>{
                    if(search===" Search..."){
                        return true;
                    }
                    return movieObj.title.toLowerCase().includes(search);
                })
                .map((movie,index)=>(
                  <tr key={index} className="border-b-2 hover:bg-slate-100">
                        <td> <div className="flex items-center gap-10"> <img className="h-32 w-36 rounded-lg" src={baseurl+movie.poster_path} /> 
                        {movie.title}</div>  </td>
                        <td>{movie.vote_average} </td>
                        <td>{movie.popularity}</td>
                        <td>{genreid[movie.genre_ids[0]]}</td>
                        <td onClick={()=> removewatchlist(movie)} className="text-rose-600 cursor-pointer"><i className="fa-solid fa-trash-can"></i></td>
                    </tr>
                ))}
                    
                </tbody>
            </table>
        </div>

    )
}