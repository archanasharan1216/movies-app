import img1 from "../../assets/images/avengers.jpg";
import img2 from "../../assets/images/bohemian.jpg";
import img3 from "../../assets/images/inception.jpg";
import img4 from "../../assets/images/killbill.jpg";
import img5 from "../../assets/images/reservoirdogs.jpg";
import Movie from "../../models/movie";

export default [
  new Movie(
    "Avengers",
    "Action & Adventure, Comedy",
    2004,
    img1,
    7,
    1,
    "avengers, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
  ),
  new Movie(
    "Bohemian Rhapsody",
    "Drama, Biography, Music, Documentary",
    2003,
    img2,
    8,
    2,
    "bohemian, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
  ),
  new Movie(
    "Inception",
    "Action and Adventure, Crime",
    2003,
    img3,
    6,
    1,
    "inception, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician,"
  ),
  new Movie(
    "Kill Bill",
    "Oscar Winning Movie, Horror",
    1994,
    img4,
    7,
    1,
    " kill bill Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, "
  ),
  new Movie(
    "Reservoir Dogs",
    "Oscar Winning Movie, Crime",
    1991,
    img5,
    9,
    1,
    "oscar movie Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
  ),
];

export const tabs = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];
export const sortOptions = ["release date", "A-Z"];
