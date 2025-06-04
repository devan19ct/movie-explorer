import React, { useState, useEffect } from 'react';

export default function HeroBanner({ movie }) {
    const [trailerKey, setTrailerKey] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    if (!movie) return null;

    useEffect(() => {
    // Reset trailer when movie changes
    setTrailerKey(null);
    setIsPlaying(false);

    async function fetchTrailer() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=07a172069dec265e59987eba17a06ad2`);
      const data = await res.json();

      // Find YouTube trailer
      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) setTrailerKey(trailer.key);
    }

    fetchTrailer();
  }, [movie]);

   return (
    <div
      className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center text-white flex items-end p-6"
      style={{
        backgroundImage: !isPlaying
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "none",
      }}
    >
      {!isPlaying && (
        <>
          <div className="bg-gradient-to-t from-black to-transparent absolute inset-0"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm md:text-base line-clamp-3">{movie.overview}</p>
            {trailerKey && (
              <button aria-label="Watch trailer"
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium"
                onClick={() => setIsPlaying(true)}
              >
                Watch Now
              </button>
            )}

            {!trailerKey && <button disabled aria-label="Watch trailer"
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium"
                onClick={() => setIsPlaying(true)}
              >
                Trailer Not Available
              </button>}

          </div>
        </>
      )}

      {isPlaying && trailerKey && (
        <div className="w-full h-full aspect-video">
  <iframe
    className="w-full h-full"
    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
    title="Movie Trailer"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 z-20 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}