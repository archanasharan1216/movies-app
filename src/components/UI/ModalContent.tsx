import { useState, useCallback } from "react";
import Modal from "./Modal";
import TextInput from "./TextInput";
import Button from "./Button";
import { Form, GenreControl, InputErrorMessage } from "./ModalContent.styles";
import { validateForm } from "./ModalContent.helpers";

interface IModalContent {
  modalTitle: string;
  showModal: boolean;
  closeModalHandler: () => void;
}

const inputHandler = (
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  setFunction: React.Dispatch<React.SetStateAction<typeof event.target.value>>
) => {
  if (!event.target.value) {
    return;
  }
  setFunction(event.target.value);
};

const ModalContent: React.FunctionComponent<IModalContent> = ({
  modalTitle,
  closeModalHandler,
}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [movieUrl, setUrl] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [runtime, setRuntime] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [overview, setOverview] = useState<string>("");

  const data = {
    title,
    movieUrl,
    rating,
    runtime,
    releaseDate,
    genre,
    overview,
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitted(true);

      if (validateForm(data).hasError) {
        return;
      } else {
        const formValue = {
          title,
          movieUrl,
          rating,
          runtime,
        };
        console.log("form value", formValue);
        closeModalHandler();
      }
    },
    [title, movieUrl, rating, runtime, genre, overview]
  );

  const handleFormReset = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("form reset", handleFormReset);
      setIsSubmitted(false);
      setTitle("");
      setGenre("");
      setRating("");
      setReleaseDate("");
      setRuntime("");
      setUrl("");
      setOverview("");
    },
    [title, movieUrl, rating, runtime, genre, overview]
  );

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
          {validateForm(data).titleHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).titleHasError[1]}
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
          {validateForm(data).releaseDateHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).releaseDateHasError[1]}
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
          {validateForm(data).movieUrlHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).movieUrlHasError[1]}
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
          {validateForm(data).ratingHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).ratingHasError[1]}
            </InputErrorMessage>
          )}
        </div>
      </div>
      <div className="rowWrapper">
        <GenreControl className="textInput firstColumn">
          <label htmlFor="genre"> GENRE </label>
          <select
            name="genre"
            id="genre"
            defaultValue=""
            onChange={(e) => inputHandler(e, setGenre)}
          >
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
        {validateForm(data).genreHasError[0] && isSubmitted && (
          <InputErrorMessage>
            {validateForm(data).genreHasError[1]}
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
          {validateForm(data).runtimeHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).runtimeHasError[1]}
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
            onChange={(e) => inputHandler(e, setOverview)}
          />
          {validateForm(data).overviewHasError[0] && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).overviewHasError[1]}
            </InputErrorMessage>
          )}
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
