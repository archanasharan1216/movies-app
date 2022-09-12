class Movie {
    id: string;
    title: string;
    type: string;
    year: number;
    image: string;

    constructor(movieTitle: string, movieType: string, movieYear: number, movieImage: string) {
        this.id = `${Math.floor(Math.random() * 100)}`;
        this.title = movieTitle;
        this.type = movieType;
        this.year = movieYear;
        this.image = movieImage;
    }
}

export default Movie;