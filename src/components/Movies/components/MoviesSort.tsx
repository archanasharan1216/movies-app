import React from "react";

import { MoviesSortControl } from "../Movies.styles";

interface IMovieSort {
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sortOptions: string[];
}

const MoviesSort: React.FC<IMovieSort> = ({ handleSort, sortOptions }) => {
  return (
    <MoviesSortControl>
      <label htmlFor="movies">SORT BY</label>
      <select id="movies" onChange={(e) => handleSort(e)}>
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </MoviesSortControl>
  );
};

export default MoviesSort;
