export default function SearchBar({ onSearchChange }){
    return(
        <div className="w-full max-w-md mx-auto p-4">
            <input
                type="text"
                placeholder="Search movies..."
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    )
}