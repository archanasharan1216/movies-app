import Card from "../UI/Card";
import { useContext } from 'react';
import MovieContext from "../../store/movie-context";
import { movies } from "../Movies/Movies.data";
import styled from "styled-components";

const HeaderCardWrapper = styled.span `
   display: flex;
   justify-content: space-evenly;
`;
const MovieDetailsWrapper = styled.div `
     width: 50%;
     
     .movieTitle {
          text-align: left;
          font-size: xxx-large;
          font-family: system-ui;
          color: #FFFFFF;
          font-weight: 200;
     }
     .movieDescription {
          text-align: left;
          font-size: x-large;
          font-family: system-ui;
          color: #FFFFFF;
          font-weight: 200;
          margin-top: 7%;
     }
     .movieType {
          color: #FFFFFF;
          margin-top: 1%;
          font-weight: 100;
     }
     .movieYear {
          margin: 5% 0;
          color: #F65261;
          font-weight: 100;
          font-size: x-large;
          display: flex;
          align-content: flex-start;
     }
     .movieDuration {
          margin-left: 3%;
     }
     .movieRating {
          height: 50px;
          width: 50px;
          color: #FFFFFF;
          font-size: xx-large;
          border: solid;
          border-color: white;
          border-radius: 50%;
          padding: 10px;
          padding-right: 15px;
          margin-left: 5%;
          
     }
`;

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