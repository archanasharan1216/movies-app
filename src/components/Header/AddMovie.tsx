import ModalContent from "../UI/ModalContent";
import styled from 'styled-components';
import { useState} from "react";
import Button from "../UI/Button";

const ButtonDiv = styled.div `
    margin: 2%;
    width: 13%;
   .buttonClass {
    background-color: #424242;
    color: #f65261;
    border-style: none;
    border-radius: 3px;
    height: 50px;
    width: 100%;
    font-size: large;
    font-family: system-ui;
   }
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
       
       <ButtonDiv>
            <Button name='+ ADD MOVIE' type='button' buttonClass='buttonClass' onClick={addMovieHandler}>
            </Button>
       </ButtonDiv>

      
      {addMovie && 
       <ModalContent  
       modalTitle = 'ADD MOVIE' 
       showModal={addMovie} 
       closeModalHandler={closeModalHandler}/>}  
        </>
        
    )
}

export default AddMovie;