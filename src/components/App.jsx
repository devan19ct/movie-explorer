import React, { useState, useEffect } from 'react';



export default function APP(){
  const API_KEY = '07a172069dec265e59987eba17a06ad2'
  const [movies, setMovies] = useState([]);
  useEffect(() => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=07a172069dec265e59987eba17a06ad2")
  .then(Response => Response.json())
  .then(data => {
    setMovies(data.results);
    console.log("Fetched movies:", data.results);
  })
  .catch(error => console.error("Error fetching movies:", error));
  }, []);

  console.log("Your API Key:", API_KEY);

  return(
    <>
    <h1 className="text-3xl font-bold underline flex justify-center p-8">
        Movie Explorer!
      </h1>
        <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </div>
       ))}
        </div>
    </>
  )
}
