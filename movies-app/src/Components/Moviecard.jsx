import { useState } from "react";

export default function Moviecard(props){
    
     return(
        <div className="hover:scale-115 duration-300  cursor-pointer   relative m-4 rounded-[1rem] overflow-hidden ">
            <img className=" w-[13rem] h-[20rem] object-cover" src={props.poster}/>
            <p className="absolute bottom-2 left-[50%] translate-x-[-50%] text-white ">{props.title}</p>
            <div className="absolute top-2 right-2 h-8 w-8 bg-black flex items-center justify-center rounded-lg">
               {props.fav?<div onClick={() => {props.removewatchlist(props.mymovie)}}>❌</div>:<div onClick={() =>{props.addtowatch(props.mymovie)}}>😍</div>}
            </div>
          </div>

     );
};