import React, { useCallback, useMemo, useState } from "react";

import movies from "../../Movies/Movies.data";
import Button from "../../UI/Button";
import TextInput from "../../UI/TextInput";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { SearchControl, TextInputDiv } from "./SearchMovie.styles";

const SearchMovie: React.FunctionComponent = () => {
  useDocumentTitle("Movies App");
  const [inputValue, setInput] = useState<string>("");
  const movieNames: string[] = useMemo(
    () => movies.map((movie) => movie.title),
    []
  );

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    },
    []
  );

  const submitHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (inputValue?.trim()?.length === 0) {
        return;
      }
      if (movieNames.includes(inputValue)) {
        console.log("Movie Found - ", inputValue);
      } else {
        console.log("Not Found - ", inputValue);
      }
    },
    [inputValue]
  );

  return (
    <SearchControl>
      <form onSubmit={submitHandler}>
        <TextInputDiv>
          <TextInput
            id="search"
            placeholder="What do you want to watch ?"
            label="FIND YOUR MOVIE"
            onChange={onChangeHandler}
            value={inputValue}
            labelClass={""}
            inputClass={""}
          />
        </TextInputDiv>
        <Button type="submit" buttonClass="buttonClass" name="SEARCH"></Button>
      </form>
    </SearchControl>
  );
};

export default SearchMovie;
