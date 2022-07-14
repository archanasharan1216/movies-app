import ModalContent from "../UI/ModalContent";
import styled from 'styled-components';
import { useState, useEffect } from "react";

const Button = styled.button `
    background-color: #424242;
    
    color: #f65261;
    border-style: none;
    border-radius: 3px;
    `;


const AddMovie: React.FunctionComponent = () => {
    const[addMovie, setAddMovie] = useState<boolean>(false);
    const addMovieHandler = () => {
        setAddMovie(true);
    }
    const closeModalHandler = () => {
        setAddMovie(false);
    }
    
    return( 
        <>
        <Button onClick={addMovieHandler}>
            + ADD MOVIE
       </Button>
      {addMovie && 
       <ModalContent modalTitle = 'ADD MOVIE' showModal={addMovie} closeModalHandler={closeModalHandler}/>}
        
         
        </>
        
    )
}

export default AddMovie;