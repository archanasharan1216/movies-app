import React from 'react';
//import classes from './TextInput.module.css';
import styled from 'styled-components';

const InputControl = styled.div `
    display: flex;
    flex-direction: column;
    width: fit-content;
    width: 90%;
    margin-right: 2%;
    label {
        text-align: left;
        font-size: xx-large;
        font-family: system-ui;
        color: white;
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


type props = {placeholder: string, label: string}
const TextInput  = React.forwardRef<HTMLInputElement, props>((props, ref) => {
    
    
    return(
        <InputControl>
            <label htmlFor='text'> {props.label}</label>
            <input type='text' placeholder={props.placeholder} >       
            </input>
        </InputControl>
    );
});

export default TextInput;