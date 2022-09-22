import styled from "styled-components";
import image from "../../assets/images/bgrnd-img.png";

export const HeaderControl = styled.div`
  padding-top: 5px;
  margin: 20px;
  margin-bottom: 10px;
  height: 50%;
  background-image: url(${image});
  p {
    color: #f65261;
    width: 90%;
    margin: 2%;
    font-size: x-large;
    margin-left: 8%;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  h3 {
    width: 90%;
    margin: 2%;
  }
  button {
    margin: 2%;
    height: 38px;
    width: 10%;
  }
`;

export const BackgroundFilter = styled.div`
  height: 100%;
  backdrop-filter: blur(7px);
`;
