import { useState, useEffect, useCallback } from 'react';
import TextInput from '../UI/TextInput';
import styled from 'styled-components';
import movies from '../Movies/MoviesData';
import Button from '../UI/Button';
import React from 'react';

const SearchControl = styled.div `
    display: flex;
    justify-content:center;
    flex-direction: row ;
    margin: 5%;
    margin-top: 0;
    div {
        display: flex;
    }

    .buttonClass {
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
    const [inputValue, setInput] = useState<string>('');
    const movieNames: Array<string> = [];
   
    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
      },[]);

    const submitHandler = useCallback((event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.trim().length === 0) {
          return;
        } 
      },[]);
      
    movies.forEach((movie) => {      
        movieNames.push (movie.title);
    }

   );

    useEffect(() => {
        const searchValue = setTimeout(() => {
            
            if(movieNames.includes(inputValue)) {
                console.log('Movie Available');
                return;
            }
            else {
                console.log("Not available");
            }
        }, 1000);
        return () => {
            clearTimeout(searchValue);
        }
    }, [inputValue]    
    );
    
   
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
                <Button type='submit' buttonClass='buttonClass' name='SEARCH'>         
                </Button>
                
            </form>
        </SearchControl>
        
    );

}

export default SearchMovie;
