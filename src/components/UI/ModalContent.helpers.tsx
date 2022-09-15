interface IModalData {
  title: string;
  movieUrl: string;
  rating: string;
  runtime: string;
  releaseDate: string;
  genre: string;
  overview: string;
}

const isDate = (date: string | number | Date): boolean =>
  new Date(date).toString() !== "Invalid Date" &&
  !isNaN(Number(new Date(date)));

const isValidUrl = (movieUrl: string): Boolean => {
  try {
    return Boolean(new URL(movieUrl));
  } catch (e) {
    return false;
  }
};

export const validateForm = (data: IModalData) => {
  const titleHasError = !(data.title && data.title.length > 0);

  const movieUrlHasError = !isValidUrl(data.movieUrl);
  const ratingHasError = !(
    0 <= Number(data.rating || 0) && Number(data.rating || 0) <= 100
  );
  const runtimeHasError = !(
    0 < Number(data.runtime || 0) && Number(data.runtime || 0) <= 360
  );
  const releaseDateHasError = !isDate(data.releaseDate);
  const genreHasError = data.genre.length === 0;
  const overviewHasError = data.overview.length === 0;

  const titleErrorMessage = "Please add a title.";
  const movieUrlErrorMessage = "Please add a valid url";
  const ratingErrorMessage = "Please add a rating from 0 to 100";
  const runtimeErrorMessage = "Please add a valid runtime in minutes";
  const releaseDateErrorMessage = "Please select a release date";
  const genreErrorMessage = "Please select a genre";
  const overviewErrorMessage = "Please add the movie overview";
  return {
    hasError:
      titleHasError ||
      movieUrlHasError ||
      ratingHasError ||
      runtimeHasError ||
      releaseDateHasError ||
      genreHasError ||
      overviewHasError,
    titleHasError: [titleHasError, titleErrorMessage],
    movieUrlHasError: [movieUrlHasError, movieUrlErrorMessage],
    ratingHasError: [ratingHasError, ratingErrorMessage],
    runtimeHasError: [runtimeHasError, runtimeErrorMessage],
    releaseDateHasError: [releaseDateHasError, releaseDateErrorMessage],
    genreHasError: [genreHasError, genreErrorMessage],
    overviewHasError: [overviewHasError, overviewErrorMessage],
  };
};
