import styled from "styled-components";

export const HeaderCardWrapper = styled.span `
   display: flex;
   justify-content: space-evenly;
`;
export const MovieDetailsWrapper = styled.div `
     width: 50%;
     
     .movieTitle {
          text-align: left;
          font-size: xxx-large;
          font-family: system-ui;
          color: #FFFFFF;
          font-weight: 200;
     }
     .movieDescription {
          text-align: left;
          font-size: x-large;
          font-family: system-ui;
          color: #FFFFFF;
          font-weight: 200;
          margin-top: 7%;
     }
     .movieType {
          color: #FFFFFF;
          margin-top: 1%;
          font-weight: 100;
     }
     .movieYear {
          margin: 5% 0;
          color: #F65261;
          font-weight: 100;
          font-size: x-large;
          display: flex;
          align-content: flex-start;
     }
     .movieDuration {
          margin-left: 3%;
     }
     .movieRating {
          height: 50px;
          width: 50px;
          color: #FFFFFF;
          font-size: xx-large;
          border: solid;
          border-color: white;
          border-radius: 50%;
          padding: 10px;
          padding-right: 15px;
          margin-left: 5%;
          
     }
`;