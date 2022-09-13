import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import TextInput from "./TextInput";
import Button from "./Button";

const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: fit-content;
    width: 90%;
    margin-right: 2%;
    display: inline;
    label {
        text-align: left;
        font-family: system-ui;
        color: #f65261;
        font-weight: 300;
        font-size: large;
    }
    input {
        width: 100%;
        height: 3.25rem;
        margin-top: 10px;
        background-color: #424242;
        border: none;
        border-radius: 3px;
        font-size: larger;
        padding-left: 20px;
    } 
    .modalTitle {
        font-size: xxx-large;
        margin: 3%;
        font-weight: 100;
        font-family: system-ui;
        color: white;
    }

    .textInput{
        display: flex;
        flex-direction: column;
        margin-top: 25px;
    }
    .rowWrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        padding-left: 30px;
    }
    .firstColumn {
        width: 60%;
    }
    .secondColumn {
        margin-left: 5%;
        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.7);
            
        }

    }

    .textArea {
        width: 95%;
        margin-top: 25px;
    }
    textarea {
        width: 93%;
        background-color: #424242;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: larger;
        border: none;
       
    }
    .submitSection {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        width: 92%;
        .buttonClass {
            background-color: #424242;  
            color: #f65261;
            border-style: none;
            border-radius: 3px;
        }
        Button {
            height: 38px;
            width: 10%;
            margin-left: 2%;
        }
        .resetButton {
            border-style: ridge;
            border-color: #f65261;

        }
        .submitButton {
            background-color: #f65261;
            color: #FFFFFF;
        }
    }
    }
    .calendarInput {
        width: 222px;
    }
   
`;

const GenreControl = styled.div`
  select {
    background: #424242;
    color: white;
    border: none;
    font-family: system-ui;
    height: 3.25rem;
    margin-top: 10px;
    border-radius: 2px;
    padding-left: 20px;
    width: 100%;
  }
`;

const InputErrorMessage = styled.span`
  width: 100%;
`;

interface IModalContent {
  modalTitle: string;
  showModal: boolean;
  closeModalHandler: () => void;
}

const inputHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFunction: React.Dispatch<React.SetStateAction<typeof event.target.value>>
) => {
  if (!event.target.value) {
    return;
  }
  setFunction(event.target.value);
};

const isDate = (date: string | number | Date): boolean =>
  new Date(date).toString() !== "Invalid Date" &&
  !isNaN(Number(new Date(date)));

const ModalContent: React.FunctionComponent<IModalContent> = ({modalTitle, closeModalHandler}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [movieUrl, setUrl] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [runtime, setRuntime] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  // TODO: complete validation
  const [overview, setOverview] = useState<string>("");

  const validateForm = useCallback(() => {
    const titleHasError = !(title && title.length > 0);
    const movieUrlHasError = !(toString.call(movieUrl) === "[object URL]");
    const ratingHasError = !(
      0 <= Number(rating || 0) && Number(rating || 0) <= 100
    );
    const runtimeHasError = !(
      0 < Number(runtime || 0) && Number(runtime || 0) <= 360
    );
    const releaseDateHasError = !isDate(releaseDate);
    const genreHasError = genre.length === 0;
    const overviewHasError = overview.length === 0;
    const titleErrorMessage = "Please add a title.";
    const movieUrlErrorMessage = "Please add a valid url";
    const ratingErrorMessage = "Please add a rating from 0 to 100";
    const runtimeErrorMessage = "Please add a valid runtime in minutes";
    const releaseDateErrorMessage = "Please select a release date";
    const genreErrorMessage = "Please select a genre";
    const overviewErrorMessage = "Please add the movie overview";

    return {
      hasError:
        titleHasError &&
        movieUrlHasError &&
        ratingHasError &&
        runtimeHasError &&
        releaseDateHasError,
      titleHasError: [titleHasError, titleErrorMessage],
      movieUrlHasError: [movieUrlHasError, movieUrlErrorMessage],
      ratingHasError: [ratingHasError, ratingErrorMessage],
      runtimeHasError: [runtimeHasError, runtimeErrorMessage],
      releaseDateHasError: [releaseDateHasError, releaseDateErrorMessage],
      genreHasError: [genreHasError, genreErrorMessage],
      overviewHasError: [overviewHasError, overviewErrorMessage],
    };
  }, [title, movieUrl, rating, runtime, releaseDate]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitted(true);
      if (validateForm().hasError) {
        return;
      }
      const formValue = {
        title,
        movieUrl,
        rating,
        runtime,
      };
      console.log("Form Value", formValue);
      closeModalHandler();
    },
    [title, movieUrl, rating, runtime]
  );

  const handleFormReset = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    setTitle("");
    setGenre("");
    setRating("");
    setReleaseDate("");
    setRuntime("");
    setUrl("");
  }, []);

  const modalActions = (
    <Form onSubmit={handleSubmit} onReset={handleFormReset}>
      <div className="modalTitle">{modalTitle}</div>
      <div className="rowWrapper">
        <div className="textInput firstColumn">
          <TextInput
            id="modalTitle"
            type="text"
            label="TITLE"
            onChange={(e) => inputHandler(e, setTitle)}
            placeholder="Title"
            value={title}
          />
          {validateForm().titleHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm().titleHasError[1]}
            </InputErrorMessage>
          )}
        </div>
        <div className="textInput secondColumn">
          <label> RELEASE DATE </label>
          <input
            type="date"
            data-role="calendarpicker"
            className="calendarInput"
            value={releaseDate}
            onChange={(e) => inputHandler(e, setReleaseDate)}
          />
          {validateForm().releaseDateHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm().releaseDateHasError[1]}
            </InputErrorMessage>
          )}
        </div>
      </div>
      <div className="rowWrapper">
        <div className="textInput firstColumn">
          <TextInput
            id="modalUrl"
            type="text"
            label="MOVIE URL"
            onChange={(e) => inputHandler(e, setUrl)}
            placeholder="https://"
            value={movieUrl}
          />
          {validateForm().movieUrlHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm().movieUrlHasError[1]}
            </InputErrorMessage>
          )}
        </div>
        <div className="textInput secondColumn">
          <TextInput
            id="modalRating"
            type="number"
            label="RATING"
            onChange={(e) => inputHandler(e, setRating)}
            placeholder="7.8"
            value={rating}
          />
          {validateForm().ratingHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm().ratingHasError[1]}
            </InputErrorMessage>
          )}
        </div>
      </div>
      <div className="rowWrapper">
        <GenreControl className="textInput firstColumn">
          <label htmlFor="genre"> GENRE </label>
          <select name="genre" id="genre">
            <option value="" disabled>
              Select Genre
            </option>
            <option value="Action and Adventure">Action and Adventure</option>
            <option value="Drama, Biography, Music">
              Drama, Biography, Music
            </option>
            <option value="Oscar Winning Movie">Oscar Winning Movie</option>
          </select>
        </GenreControl>
        {validateForm().genreHasError[0] && isSubmitted && (
          <InputErrorMessage>
            {validateForm().genreHasError[1]}
          </InputErrorMessage>
        )}
        <div className="textInput secondColumn">
          <TextInput
            id="modalRuntime"
            type="text"
            label="RUNTIME"
            onChange={(e) => inputHandler(e, setRuntime)}
            placeholder="minutes"
            value={runtime}
          />
          {validateForm().runtimeHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm().runtimeHasError[1]}
            </InputErrorMessage>
          )}
        </div>
      </div>
      <div className="rowWrapper">
        <div className="textArea">
          <label htmlFor="modalTextArea" className="label">
            OVERVIEW
          </label>
          <textarea
            id="modalTextArea"
            name="modalTextArea"
            rows={10}
            cols={50}
            placeholder="Movie Description"
          />
        </div>
      </div>
      <div className="submitSection">
        <Button buttonClass="resetButton buttonClass" name="RESET" type="reset">
          {" "}
        </Button>
        <Button
          buttonClass="submitButton buttonClass"
          name="SUBMIT"
          type="submit"
        >
          {" "}
        </Button>
      </div>
    </Form>
  );

  return <Modal onClose={closeModalHandler}>{modalActions}</Modal>;
};

export default ModalContent;
