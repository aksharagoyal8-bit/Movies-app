import {Link} from "react-router-dom";


export default function Navbar(){
    return(
        <div className="flex items-center gap-10"> 
            <img className=" h-15 "src="https://www.kindpng.com/picc/m/346-3466425_movie-icon-vector-png-png-download-vector-movie.png"/>
            <Link className=" text-blue-600 text-4xl font-bold " to="/">Movies</Link>
             <Link className=" text-blue-600 text-4xl font-bold " to="/WatchList">WatchList</Link>
            
        </div>
    );
};