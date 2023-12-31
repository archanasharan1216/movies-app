import { useCallback, useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import { genresData } from "./ModalContent.data";
import { validateForm } from "./ModalContent.helpers";
import { Form, GenreControl, InputErrorMessage } from "./ModalContent.styles";
import TextInput from "./TextInput";

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
): void => {
  if (event.target.value.length === 0) {
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
  const [genre, setGenre] = useState<string[]>([]);
  const [overview, setOverview] = useState<string>("");
  const [isGenreExpanded, setIsGenreExpanded] = useState<boolean>(false);
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
    (e: React.FormEvent): void => {
      e.preventDefault();
      setIsSubmitted(true);

      if (validateForm(data).hasError === null) {
        console.log("form value", data);
        closeModalHandler();
      }
    },
    [title, movieUrl, rating, runtime, genre, overview]
  );

  const handleFormReset = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault();
      setIsSubmitted(false);
      setTitle("");
      setGenre([]);
      setRating("");
      setReleaseDate("");
      setRuntime("");
      setUrl("");
      setOverview("");
    },
    [title, movieUrl, rating, runtime, genre, overview]
  );

  const showCheckboxes = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      const checkboxes = document.getElementById("checkboxes");
      if (!isGenreExpanded && checkboxes != null) {
        checkboxes.style.display = "block";
        setIsGenreExpanded(true);
      } else if (checkboxes != null) {
        checkboxes.style.display = "none";
        setIsGenreExpanded(false);
      }
    },
    []
  );

  const setCheckboxes = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.checked) {
        setGenre((genre) => [...genre, e.target.id]);
      } else {
        setGenre((genre) =>
          genre.filter((genre) => {
            return genre !== e.target.id;
          })
        );
      }
    },
    []
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
            labelClass={""}
            inputClass={""}
          />
          {validateForm(data).titleHasError[0] !== null && isSubmitted && (
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
          {validateForm(data).releaseDateHasError[0] !== null &&
            isSubmitted && (
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
            labelClass={""}
            inputClass={""}
          />
          {validateForm(data).movieUrlHasError[0] !== null && isSubmitted && (
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
            labelClass={""}
            inputClass={""}
          />
          {validateForm(data).ratingHasError[0] !== null && isSubmitted && (
            <InputErrorMessage>
              {validateForm(data).ratingHasError[1]}
            </InputErrorMessage>
          )}
        </div>
      </div>
      <div className="rowWrapper">
        <GenreControl className="textInput firstColumn">
          <label htmlFor="genre"> GENRE </label>
          <div className="multiselect">
            <div className="selectBox" onClick={showCheckboxes}>
              <select disabled>
                <option>Select genre</option>
              </select>
              <div className={isGenreExpanded ? "arrowUp" : "arrowDown"}></div>
            </div>
            <div id="checkboxes">
              {genresData.map((item) => (
                <label key={item} className="labelCheckBox">
                  <input
                    type="checkbox"
                    onChange={setCheckboxes}
                    className="checkBox"
                    id={item}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </GenreControl>
        {validateForm(data).genreHasError[0] !== null && isSubmitted && (
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
            labelClass={""}
            inputClass={""}
          />
          {validateForm(data).runtimeHasError[0] !== null && isSubmitted && (
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
          {validateForm(data).overviewHasError[0] !== null && isSubmitted && (
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
