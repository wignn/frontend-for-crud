import React, { useEffect, useState } from "react";
import { getAllGenre } from "@/lib/action";

interface Genre {
  id: string;
  name: string;
}

interface GenreSelectorProps {
  selectedGenre: string;
  onSelect: (genre: string) => void;
}
const GenreSelector:React.FC <GenreSelectorProps> =({ selectedGenre, onSelect }) =>{
  const [genres, setGenres] = useState<Genre[]>([]); 

  const fetchGenres = async () => {
    try {
      const response = await getAllGenre()
      setGenres(response.data); 
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="mt-4 flex space-x-4">
      <button 
        onClick={() => onSelect("")} 
        className={`bg-gray-800 text-gray-200 px-4 py-2 rounded-md ${selectedGenre === "" ? "font-bold" : ""}`}
      >
        Home
      </button>
      {genres.map((genre) => ( 
        <button 
          key={genre.id} 
          onClick={() => onSelect(genre.name)} 
          className={`bg-gray-800 text-gray-200 px-4 py-2 rounded-md ${selectedGenre === genre.name ? "font-bold" : ""}`} // Pastikan menggunakan genre.name
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenreSelector;