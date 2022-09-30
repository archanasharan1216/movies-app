import styled from "styled-components";

export const CardControl = styled.div`
  width: 25%;
  margin: 3%;
  height: 80%;
  margin-top: 0;
  img {
    width: 100%;
    height: 100%;
  }
  .movieType {
    display: flex;
    flex-direction: column;
  }
  .movieDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    color: #ffffff;
  }
  .movieTitle {
    font-family: system-ui;
    font-size: larger;
  }
  .movieGenre {
    font-family: system-ui;
    margin-top: 10px;
  }
  .movieYear {
    border-radius: 2px;
    border-style: ridge;
    height: 25px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .movieImage {
    position: relative;
    height: 100%;
  }
  .kebabMenu {
    position: absolute;
    top: 3%;
    left: 90%;
    height: 5%;
    cursor: pointer;
  }
  .modifyModal {
    position: absolute;
    top: 3%;
    left: 20%;
    height: 7%;
    width: 65%;
    height: 30%;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 10%;
    font-family: system-ui;
    justify-content: flex-start;
    svg {
      height: 1.2em;
      margin-top: 5px;
    }
    .closeButton {
      margin-right: 5%;
      width: fit-content;
      align-self: flex-end;
    }
    .spaceAbove {
      margin-top: 15px;
    }
  }
`;
