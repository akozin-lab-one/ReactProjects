import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { Spinner } from "flowbite-react";

const Movies = () => {
  const movies = useSelector(state => state.movies.movies);
  console.log(movies);
  return (
    <div className="container mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 ">
 
          {
            movies.length !== 0 ? movies.map(movie => {return  <MovieCard key={movie.id} movies={movie}/>}) : <Spinner aria-label="Extra large spinner example" className="flex justify-center h-screen bg-blue-600" size="xl" />
 
          }

      </div>
    </div>
  );
};

export default Movies;
