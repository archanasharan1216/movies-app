import "react-tabs/style/react-tabs.css";

import React, { useCallback, useState } from "react";
import { Tab, TabList } from "react-tabs";

import Movie from "../../models/movie";
import MoviesList from "./components/MoviesList";
import MoviesSort from "./components/MoviesSort";
import movies, { sortOptions, tabs } from "./Movies.data";
import { capitalize, sortByDateAsc, sortByTitleAsc } from "./Movies.helpers";
import {
  MoviesContainer,
  PanelControl,
  TabControl,
  TabsDiv,
} from "./Movies.styles";

const MoviesDisplay: React.FC = () => {
  const [sortingFunction, setSortingFunction] = useState<
    undefined | ((a: Movie, b: Movie) => number)
  >();

  const selectedMovies = useCallback(
    (tab: string) =>
      movies.filter((movie) =>
        tab === "ALL" ? true : movie.type.includes(capitalize(tab))
      ),
    []
  );

  const handleSort = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    if (option === sortOptions[1]) {
      setSortingFunction(() => sortByTitleAsc);
    } else {
      setSortingFunction(() => sortByDateAsc);
    }
  }, []);

  return (
    <MoviesContainer>
      <TabControl>
        <TabsDiv>
          <TabList>
            {tabs.map((tab) => (
              <Tab key={tab}>{tab.toUpperCase()}</Tab>
            ))}
            <MoviesSort handleSort={handleSort} sortOptions={sortOptions} />
          </TabList>

          {tabs.map((tab) => (
            <PanelControl key={tab}>
              <MoviesList
                items={selectedMovies(tab)}
                sortingFunction={sortingFunction}
              />
            </PanelControl>
          ))}
        </TabsDiv>
      </TabControl>
    </MoviesContainer>
  );
};

export default MoviesDisplay;
