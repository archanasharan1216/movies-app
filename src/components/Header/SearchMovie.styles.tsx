import styled from "styled-components";

export const SearchControl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
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
    background-color: #f65261;
  }
  form {
    width: 70%;
    display: inline-flex;
  }
`;

export const TextInputDiv = styled.div`
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
    color: #ffffff;
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
