import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import CloseMark from "./CloseMark";
import EditMovie from "../Movies/EditMovie";
import DeleteMovie from "../Movies/DeleteMovie";
import MovieContext from "../../store/movie-context";

const CardControl = styled.div`
  width: 25%;
  margin: 3%;
  height: 80%;
  margin-top: 0;
  img {
    width: 100%;
    height: 100%;
  }
  .movieType {
    display: flex;
    flex-direction: column;
  }
  .movieDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    color: #ffffff;
  }
  .movieTitle {
    font-family: system-ui;
    font-size: larger;
  }
  .movieGenre {
    font-family: system-ui;
    margin-top: 10px;
  }
  .movieYear {
    border-radius: 2px;
    border-style: ridge;
    height: 25px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .movieImage {
    position: relative;
    height: 100%;
  }
  .kebabMenu {
    position: absolute;
    top: 3%;
    left: 90%;
    height: 5%;
  }
  .modifyModal {
    position: absolute;
    top: 3%;
    left: 20%;
    height: 7%;
    width: 65%;
    height: 30%;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 10%;
    font-family: system-ui;
    justify-content: flex-start;
    svg {
      height: 1.2em;
      margin-top: 5px;
    }
    .closeButton {
      margin-right: 5%;
      width: fit-content;
      align-self: flex-end;
    }
    .spaceAbove {
      margin-top: 15px;
    }
  }
`;

const Card: React.FunctionComponent<{
  id: string;
  title: string;
  type: string;
  year: number;
  image: string;
  showMovieDetails: boolean;
  className?: string;
}> = ({ title, type, year, image, showMovieDetails }) => {
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
            {editMovie && (
              <EditMovie
                editMovie={editMovie}
                closeModalHandler={() => modalHandler(false, setEditMovie)}
              />
            )}
            <span
              className="spaceAbove"
              onClick={() => modalHandler(true, setDeleteMovie)}
            >
              Delete
            </span>
            {deleteMovie && (
              <DeleteMovie
                closeModalHandler={() => modalHandler(false, setDeleteMovie)}
              />
            )}
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
  );
};

export default Card;
