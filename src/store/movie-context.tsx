import React, { ReactNode, useState } from 'react';

const MovieContext = React.createContext({
    showMovieDetails:false,
    movieTitle: '',
    setMovieTitle: (title: string) => {},
    showDetails: (title: string) => {},
    removeDetails: () => {}
});

type PropTypes = {
    children: ReactNode
}

export const MovieContextProvider: React.FunctionComponent<PropTypes> = (props) => {
    const [showMovieDetails, setMovieDetails] = useState<boolean>(false);
    const [movieTitle, setMovieTitle] = useState<string>('');
   
    const showDetailsHandler = (movieTitle: string) => {
        setMovieDetails(true);  
        console.log("in show details"); 
    }
    const removeDetailsHandler = () => {
        setMovieDetails(false);
    }

    const movieTitleHandler = (title: string) => {
        setMovieTitle(title);
    }

    return(
        <MovieContext.Provider value={{
            showMovieDetails: showMovieDetails,
            movieTitle: movieTitle,
            setMovieTitle: movieTitleHandler,
            showDetails: showDetailsHandler,
            removeDetails: removeDetailsHandler
        }}>
            {props.children}
        </MovieContext.Provider>
    );
}
export default MovieContext;