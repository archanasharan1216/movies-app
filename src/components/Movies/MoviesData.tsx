import Movie from '../../models/movie';
import img1 from '../../assets/images/avengers.jpg';
import img2 from '../../assets/images/bohemian.jpg';
import img3 from '../../assets/images/inception.jpg';
import img4 from '../../assets/images/killbill.jpg';
import img5 from '../../assets/images/reservoirdogs.jpg';



const movies = [
    new Movie('Avengers', 'Action and Adventure', 2004, img1),
    new Movie('Bohemian Rhapsody', 'Drama, Biography, Music', 2003, img2),
    new Movie('Inception', 'Action and Adventure', 2003, img3),
    new Movie('Kill Bill', 'Oscar Winning Movie', 1994, img4),
    new Movie('Reservoir Dogs', 'Oscar Winning Movie', 1991, img5),
   
];

export default movies;