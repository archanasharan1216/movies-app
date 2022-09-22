class Movie {
  id: string;
  title: string;
  type: string;
  year: number;
  image: string;
  rating: number;
  duration: number;
  overview: string;
  constructor(
    movieTitle: string,
    movieType: string,
    movieYear: number,
    movieImage: string,
    movieRating: number,
    movieDuration: number,
    movieOverview: string
  ) {
    this.id = `${Math.floor(Math.random() * 100)}`;
    this.title = movieTitle;
    this.type = movieType;
    this.year = movieYear;
    this.image = movieImage;
    this.rating = movieRating;
    this.duration = movieDuration;
    this.overview = movieOverview;
  }
}

export default Movie;
