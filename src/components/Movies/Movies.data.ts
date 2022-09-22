import Movie from "../../models/movie";
import img1 from "../../assets/images/avengers.jpg";
import img2 from "../../assets/images/bohemian.jpg";
import img3 from "../../assets/images/inception.jpg";
import img4 from "../../assets/images/killbill.jpg";
import img5 from "../../assets/images/reservoirdogs.jpg";

export const movies = [
  new Movie("Avengers", "Action & Adventure, Comedy", 2004, img1),
  new Movie(
    "Bohemian Rhapsody",
    "Drama, Biography, Music, Documentary",
    2003,
    img2
  ),
  new Movie("Inception", "Action and Adventure, Crime", 2003, img3),
  new Movie("Kill Bill", "Oscar Winning Movie, Horror", 1994, img4),
  new Movie("Reservoir Dogs", "Oscar Winning Movie, Crime", 1991, img5),
];

export const tabs = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
export const sortOptions = ["release date", "A-Z"];
