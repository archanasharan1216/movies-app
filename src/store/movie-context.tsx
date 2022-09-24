import React, { ReactNode, useCallback, useState } from "react";

const MovieContext = React.createContext({
  showMovieDetails: false,
  movieTitle: "",
  setMovieTitle: (title: string) => {},
  showDetails: (title: string) => {},
  removeDetails: () => {},
});

interface IMovieContext {
  children: ReactNode;
}
const modalHandler = (
  value: boolean,
  setFunction: React.Dispatch<React.SetStateAction<typeof value>>
): void => {
  setFunction(value);
};

export const MovieContextProvider: React.FunctionComponent<IMovieContext> = ({
  children,
}) => {
  const [showMovieDetails, setMovieDetails] = useState<boolean>(false);
  const [movieTitle, setMovieTitle] = useState<string>("");

  const movieTitleHandler = useCallback((title: string) => {
    setMovieTitle(title);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        showMovieDetails,
        movieTitle,
        setMovieTitle: movieTitleHandler,
        showDetails: () => {
          modalHandler(true, setMovieDetails);
        },
        removeDetails: () => {
          modalHandler(false, setMovieDetails);
        },
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
