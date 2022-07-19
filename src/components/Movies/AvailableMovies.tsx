import MovieItem from './MovieItem';
import movies from './MoviesData';


const AvailableMovies: React.FunctionComponent = () => {
    
    return(
        
            <MovieItem items={movies}/>
    
    );
};

export default AvailableMovies;