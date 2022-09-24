import React, { useCallback, useState } from "react";

import Button from "../../UI/Button";
import ModalContent from "../../UI/ModalContent";
import { ButtonDiv } from "./AddMovie.styles";

const AddMovie: React.FunctionComponent = () => {
  const [addMovie, setAddMovie] = useState<boolean>(false);
  const addMovieHandler = useCallback(() => {
    setAddMovie(true);
  }, []);
  const closeModalHandler = useCallback(() => {
    setAddMovie(false);
  }, []);

  return (
    <>
      <ButtonDiv>
        <Button
          name="+ ADD MOVIE"
          type="button"
          buttonClass="buttonClass"
          onClick={addMovieHandler}
        ></Button>
      </ButtonDiv>

      {addMovie && (
        <ModalContent
          modalTitle="ADD MOVIE"
          showModal={addMovie}
          closeModalHandler={closeModalHandler}
        />
      )}
    </>
  );
};

export default AddMovie;
