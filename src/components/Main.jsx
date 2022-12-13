import React from "react";
import { useState, useEffect } from "react";
import requests from "../requests";
import axios from "axios";

export default function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]; //Pour prendre au hasard l'index d'un film
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    }); 
  }, []);



  const truncateString = (str, num) =>{
    if(str?.length > num){
      return str.slice(0, num) + '...';
    }
    else {
      return str
    }
  } 

  return (
    <div className="w-full h-[650px] text-white ">
      
      <div className="w-full h-full relative ">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black ">
          
        </div>
    
        <img
          className="w-full h-full  object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={`Cover of the film ${movie?.title}`}
        />
        <div className="absolute top-[50%] flex flex-col gap-2 px-4">
    <div>
    <h1 className="text-3xl font-extrabold tracking-wide">{movie?.original_title}</h1>

    </div>
         <div >
         <button className="text-black bg-white rounded-sm px-6 py-2 capitalize  border transition-all duration-200 hover:text-white hover:bg-transparent mr-2">play</button>
          <button className="rounded-sm px-6 py-2 capitalize  border transition-all duration-200 text-white">watch letter</button>
         </div>
          <div>
            <span className="text-xl font-light">Relase Date: {movie?.release_date}</span>
          </div>
          <div>
          <p className="text-xl max-w-4xl">Overview : {truncateString(movie?.overview, 150)}</p>
          </div>
          </div>
      </div>
    </div>
  );
}
