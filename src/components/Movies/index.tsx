import { useCallback, useState } from 'react';
import { Tab, TabList } from 'react-tabs';
import { MoviesContainer, PanelControl, TabControl, TabsDiv } from './Movies.styles';
import Movie from '../../models/movie';
import MoviesSort from './MoviesSort';
import MoviesList from './MoviesList';
import { capitalize, sortByDateAsc, sortByTitleAsc } from './Movies.helpers';
import { sortOptions, tabs } from './Movies.data';
import { movies } from './Movies.data';
import 'react-tabs/style/react-tabs.css';

const MoviesDisplay:React.FC = () => {
  const [sortingFunction, setSortingFunction] = useState<undefined | ((a: Movie, b: Movie) => number)>();
  
  const selectedMovies = useCallback((tab: string) => movies.filter((movie) => (tab === 'ALL' ? true : movie.type.includes(capitalize(tab)))), [])

  const handleSort = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    if (option === sortOptions[1]) {
      setSortingFunction(() => sortByTitleAsc)
    } else {
      setSortingFunction(() => sortByDateAsc)
    }
  }, [])

    return(
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
              <PanelControl>
                <MoviesList items={selectedMovies(tab)} sortingFunction={sortingFunction}  />
              </PanelControl>
              ))}

          </TabsDiv>
        </TabControl>
      </MoviesContainer>   
    )
}

export default MoviesDisplay;
  