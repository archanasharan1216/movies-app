import React from 'react';
import { useRef } from 'react';
import TextInput from '../UI/TextInput';
import styled from 'styled-components';

const SearchControl = styled.div `
    display: flex;
    justify-content:center;
    flex-direction: row ;
    margin: 5%;
    margin-top: 0;
    div {
        display: flex;
    }
    form {
        width: 100%;
    }
    button {
        height: 3.5rem;
        align-self: flex-end;
        width: 15%;
        border-radius: 5px;
        color: white;
        background-color: #F65261;

    }
    form {
        width: 70%;
    }
`;


const SearchMovie = () =>{
    const textInputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredText = textInputRef.current!.value;
    
        if (enteredText.trim().length === 0) {

          return;
        }
    
        
      };

   
    return(
        <SearchControl>
            <form onSubmit={submitHandler}>
         
                <div>
                    <TextInput 
                        ref={textInputRef} 
                        placeholder= 'What do you want to watch ?'
                        label='FIND YOUR MOVIE'/>
                    <button > SEARCH </button>
                </div>
            </form>
        </SearchControl>
        
    );

}

export default SearchMovie;
