export default function HeroBanner({ movie }) {
    if (!movie) return null;

  return (
    <div
      className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center text-white flex items-end p-6"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="bg-gradient-to-t from-black to-transparent absolute inset-0"></div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm md:text-base line-clamp-3">{movie.overview}</p>
        <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
}