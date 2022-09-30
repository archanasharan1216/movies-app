import { useContext, useMemo } from "react";

import MovieContext from "../../../store/movie-context";
import Card from "../../Movies/components/MovieCard";
import movies from "../../Movies/Movies.data";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeaderCardWrapper, MovieDetailsWrapper } from "./MovieDetails.styles";

const MovieDetails: React.FunctionComponent = () => {
  const ctx = useContext(MovieContext);
  const selectedMovie = useMemo(
    () => movies.filter((movie) => movie.title === ctx.movieTitle)[0],
    [ctx.movieTitle]
  );
  useDocumentTitle(`Movies App - ${selectedMovie.title}`);

  return (
    <HeaderCardWrapper>
      <Card
        id={selectedMovie.id}
        title={selectedMovie.title}
        type={selectedMovie.type}
        year={selectedMovie.year}
        image={selectedMovie.image}
        showMovieDetails={false}
      />
      <MovieDetailsWrapper className="movieDetails">
        <div>
          <span className="movieTitle"> {selectedMovie.title}</span>
          <span className="movieRating"> {selectedMovie.rating}</span>
        </div>
        <div className="movieType">{selectedMovie.type}</div>
        <div className="movieYear">
          <span>{selectedMovie.year}</span>
          <span className="movieDuration">{selectedMovie.duration}h</span>
        </div>
        <div className="movieDescription">{selectedMovie.overview}</div>
      </MovieDetailsWrapper>
    </HeaderCardWrapper>
  );
};

export default MovieDetails;
