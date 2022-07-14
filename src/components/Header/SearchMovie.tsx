import React from 'react';
import { useRef, useState } from 'react';
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
        display: inline-flex;
    }
`;

const TextInputDiv = styled.div `
    

    display: flex;
    flex-direction: column;
    width: fit-content;
    width: 90%;
    margin-right: 2%;
    display: inline;
    label {
        text-align: left;
        font-size: xxx-large;
        font-family: system-ui;
        color: #FFFFFF;
        font-weight: 200;
    }
    input {
        width: 98%;
        height: 3.25rem;
        margin-top: 30px;
        background-color: #424242;
        border-color: black;
        border-radius: 5px;
        font-size: larger;
        padding-left: 20px;
    } 




    
`;

const SearchMovie: React.FunctionComponent = () =>{
    const textInputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredText = textInputRef.current!.value;
    
        if (enteredText.trim().length === 0) {

          return;
        }
    
        
      };

    const[inputValue, setInput] = useState<string>();
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInput(event.target.value);
    }
   
    return(
        <SearchControl>
            <form onSubmit={submitHandler}>
         
                <TextInputDiv>
                    <TextInput 
                        id='search'
                        placeholder= 'What do you want to watch ?'
                        label='FIND YOUR MOVIE'
                        onChange={onChangeHandler}
                        value={inputValue}/>
                   
                </TextInputDiv>
                <button > SEARCH </button>
                
            </form>
        </SearchControl>
        
    );

}

export default SearchMovie;
