import React from 'react';
import AvailableMovies from './AvailableMovies';
import styled from 'styled-components';
import MovieTab from './MovieTab';
import MoviesSort from './MoviesSort';

const MoviesControl = styled.div `
    background-color: #232323;
    min-height: 25rem;
    margin: 20px;
    margin-top: 10px;
    padding-top: 2px;
    margin-bottom:0;
`;

type Props = {
    isEverythingOk: boolean;
}
const MoviesList:React.FC<{}> = () => {
    
    return(
        
            <MoviesControl>
           
           <MovieTab />
          
      </MoviesControl>
             
          
          
          
        
        
    )
};

export default MoviesList;