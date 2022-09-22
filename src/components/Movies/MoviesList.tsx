import React from "react";
import Movie from "../../models/movie";
import Card from "../UI/Card";
import { sortByDateAsc } from "./Movies.helpers";

interface IMoviesList {
  items: Movie[];
  sortingFunction: undefined | ((a: Movie, b: Movie) => number);
}

const defaultSort = sortByDateAsc;

const MoviesList: React.FC<IMoviesList> = ({ items, sortingFunction }) => {
  return (
    <React.Fragment>
      {items.sort(sortingFunction ?? defaultSort).map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          year={item.year}
          image={item.image}
          showMovieDetails={true}
        ></Card>
      ))}
    </React.Fragment>
  );
};

export default MoviesList;
