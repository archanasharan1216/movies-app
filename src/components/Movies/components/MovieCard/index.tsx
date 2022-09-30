import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext, useEffect, useState } from "react";

import MovieContext from "../../../../store/movie-context";
import CloseMark from "../../../UI/CloseMark";
import DeleteMovie from "../DeleteMovie";
import EditMovie from "../EditMovie";
import { CardControl } from "./MovieCard.styles";

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

  const modalHandler = useCallback(
    (
      modalState: boolean,
      setFunction: React.Dispatch<React.SetStateAction<typeof modalState>>,
      event?:
        | React.MouseEvent<SVGSVGElement, MouseEvent>
        | React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
      event?.stopPropagation();
      setFunction(modalState);
    },
    []
  );

  useEffect(() => {
    if (editMovie || deleteMovie) {
      setModifyMovie(false);
    }
  }, [editMovie, deleteMovie]);
  const movieDetailsHandler = useCallback(() => {
    ctx.setMovieTitle(title);
    ctx.showDetails(title);
    ctx.movieTitle = title;
  }, [ctx.movieTitle]);

  return (
    <>
      <CardControl className="cardControl">
        <div className="movieImage" onClick={movieDetailsHandler}>
          <img src={image} />
          {showMovieDetails && (
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="kebabMenu"
              onClick={(event) => modalHandler(true, setModifyMovie, event)}
            />
          )}
          {modifyMovie && (
            <div className="modifyModal">
              <span
                className="closeButton"
                onClick={(event) => modalHandler(false, setModifyMovie, event)}
              >
                <CloseMark />
              </span>
              <span
                className="spaceAbove"
                onClick={(event) => modalHandler(true, setEditMovie, event)}
              >
                Edit
              </span>

              <span
                className="spaceAbove"
                onClick={(event) => modalHandler(true, setDeleteMovie, event)}
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
