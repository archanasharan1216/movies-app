import Card from "../UI/Card";
import { useContext } from 'react';
import MovieContext from "../../store/movie-context";
import { movies } from "../Movies/Movies.data";
import { HeaderCardWrapper, MovieDetailsWrapper } from "./MovieDetails.styles";

const MovieDetails: React.FunctionComponent = () => {
     const ctx = useContext(MovieContext)
     const selectedMovie = movies.filter((movie) => {
     return movie.title === ctx.movieTitle;
   });
   
   return(
    
     <HeaderCardWrapper>
          <Card 
          id={selectedMovie[0].id} 
          title={selectedMovie[0].title} 
          type={selectedMovie[0].type} 
          year={selectedMovie[0].year} 
          image={selectedMovie[0].image} 
          showMovieDetails={false}
           />
          <MovieDetailsWrapper className='movieDetails'>
               <div>
                   <span className='movieTitle'> {selectedMovie[0].title}</span>
                   <span className='movieRating'> {selectedMovie[0].rating}</span>
               </div>
               <div className='movieType'>{selectedMovie[0].type}</div>
               <div className='movieYear'>
                   <span>{selectedMovie[0].year}</span> 
                   <span className='movieDuration'>{selectedMovie[0].duration}h</span> 
               </div>
               <div className='movieDescription'>{selectedMovie[0].overview}</div>
          </MovieDetailsWrapper>   
     </HeaderCardWrapper>
    );
}

export default MovieDetails;