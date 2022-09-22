import styled from "styled-components";
import image from "../../assets/images/bgrnd-img.png";

export const HeaderControl = styled.div `
    padding-top: 5px;
    margin: 20px;
    margin-bottom: 10px;
    background-image: url(${image});
    p {
        color: #F65261;
        width: 90%;
        margin: 2%;
        font-size: x-large;
        margin-left: 8%;
    }
`;
export const SearchHeader = styled(HeaderControl) `
    height: 60%;
`;
export const MovieHeader = styled(HeaderControl) `
    height: 85%;
    background-image: none;
    background-color: #232323
`;
export const HeaderTop = styled.div `
display: flex;
flex-direction: row;
h3{
    width: 90%;
    margin: 2%;
}
button {
    margin: 2%;
    height: 38px;
    width: 10%;
}
 svg {
     color: #F65261;
     height: 2em;
     margin: 2%;
     width: 2em;
     margin-bottom: 0;
}
 }
`;

export const BackgroundFilter = styled.div `
    height: 100%;
    backdrop-filter: blur(7px);
`;
