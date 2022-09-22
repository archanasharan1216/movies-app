import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchMovie from "./SearchMovie";
import AddMovie from "./AddMovie";
import MovieContext from "../../store/movie-context";
import MovieDetails from "./MovieDetails";
import {
  SearchHeader,
  MovieHeader,
  BackgroundFilter,
  HeaderTop,
} from "./HeaderForm.styles";

const HeaderForm: React.FunctionComponent = () => {
  const ctx = useContext(MovieContext);
  const searchIconHandler = () => {
    ctx.removeDetails();
  };
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
