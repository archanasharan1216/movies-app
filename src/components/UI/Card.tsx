import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import CloseMark from "./CloseMark";
import EditMovie from "../Movies/EditMovie";
import DeleteMovie from "../Movies/DeleteMovie";
import MovieContext from "../../store/movie-context";
import { CardControl } from "./Card.styles";

interface ICard {
  id: string;
  title: string;
  type: string;
  year: number;
  image: string;
  showMovieDetails: boolean;
  className?: string;
}
const Card: React.FunctionComponent<ICard> = ({
  title,
  type,
  year,
  image,
  showMovieDetails,
}) => {
  const ctx = useContext(MovieContext);
  const [modifyMovie, setModifyMovie] = useState<boolean>(false);
  const [editMovie, setEditMovie] = useState<boolean>(false);
  const [deleteMovie, setDeleteMovie] = useState<boolean>(false);

  const modalHandler = (
    modalState: boolean,
    setFunction: React.Dispatch<React.SetStateAction<typeof modalState>>
  ) => {
    setFunction(modalState);
  };

  useEffect(() => {
    if (editMovie || deleteMovie) {
      setModifyMovie(false);
    }
  }, [editMovie, deleteMovie]);
  const movieDetailsHandler = () => {
    ctx.setMovieTitle(title);
    ctx.showDetails(title);
    ctx.movieTitle = title;
  };

  return (
    <>
      <CardControl className="cardControl">
        <div className="movieImage" onClick={movieDetailsHandler}>
          <img src={image} />
          {showMovieDetails && (
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="kebabMenu"
              onClick={() => modalHandler(true, setModifyMovie)}
            />
          )}
          {modifyMovie && (
            <div className="modifyModal">
              <span
                className="closeButton"
                onClick={() => modalHandler(false, setModifyMovie)}
              >
                <CloseMark />
              </span>
              <span
                className="spaceAbove"
                onClick={() => modalHandler(true, setEditMovie)}
              >
                Edit
              </span>

              <span
                className="spaceAbove"
                onClick={() => modalHandler(true, setDeleteMovie)}
              >
                Delete
              </span>
            </div>
          )}
        </div>

        {showMovieDetails && (
          <div className="movieDetails">
            <div className="movieType">
              <span className="movieTitle">{title}</span>
              <span className="movieGenre">{type}</span>
            </div>
            <span className="movieYear">{year}</span>
          </div>
        )}
      </CardControl>
      {deleteMovie && (
        <DeleteMovie
          closeModalHandler={() => modalHandler(false, setDeleteMovie)}
        />
      )}
      {editMovie && (
        <EditMovie
          editMovie={editMovie}
          closeModalHandler={() => modalHandler(false, setEditMovie)}
        />
      )}
    </>
  );
};

export default Card;
