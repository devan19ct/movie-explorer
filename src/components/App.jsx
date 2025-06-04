import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import HeroBanner from './HeroMovie';



export default function APP(){
  const API_KEY = '07a172069dec265e59987eba17a06ad2'
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

      async function fetchMovies() {
      const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            // console.log("Fetched movies:", data.results);
          }
          catch (error) 
            {
              console.error("Error fetching movies:", error);
            }
  }
  fetchMovies();
}, [searchQuery]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedMovie]);

  // console.log("Your API Key:", API_KEY);

  return(
    <div className='bg-black min-h-screen text-white'>

      {(selectedMovie || movies.length > 0) && (
        <HeroBanner movie={selectedMovie || movies[0]} />
      )}


      <SearchBar onSearchChange={setSearchQuery} /> <br />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8">
        {movies.map(movie => (
          <div className="hover:scale-105 transition-transform" key={movie.id} onClick={() => setSelectedMovie(movie)}>
            <img className="rounded-md w-full shadow-md" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h2 className="text-center mt-2 text-sm sm:text-base px-1 break-words h-[60px] overflow-hidden" >{movie.title}</h2> <br />
          </div>
       ))}
        </div>
    </div>
  )
}
