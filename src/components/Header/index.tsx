import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext } from "react";

import MovieContext from "../../store/movie-context";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import SearchMovie from "./components/SearchMovie";
import {
  BackgroundFilter,
  HeaderTop,
  MovieHeader,
  SearchHeader,
} from "./HeaderForm.styles";

const HeaderForm: React.FunctionComponent = () => {
  const ctx = useContext(MovieContext);
  const searchIconHandler = useCallback(() => {
    ctx.removeDetails();
  }, []);

  return (
    <>
      {!ctx.showMovieDetails && (
        <SearchHeader>
          <BackgroundFilter>
            <HeaderTop>
              <p>
                <strong>netflix</strong>roulette
              </p>
              <AddMovie />
            </HeaderTop>
            <SearchMovie />
          </BackgroundFilter>
        </SearchHeader>
      )}

      {ctx.showMovieDetails && (
        <MovieHeader>
          <HeaderTop>
            <p>
              <strong>netflix</strong>roulette
            </p>
            <FontAwesomeIcon icon={faSearch} onClick={searchIconHandler} />
          </HeaderTop>
          <MovieDetails />
        </MovieHeader>
      )}
    </>
  );
};

export default HeaderForm;
