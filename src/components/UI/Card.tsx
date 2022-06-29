import React from 'react';
import styled from 'styled-components';
import image from '../../assets/images/avengers.jpg';

const CardControl = styled.div`
//background-image: url(${image});
width: 25%;
//display:flex;
margin: 3%;
img {
    width: 100%;
}
`;

const Card:React.FC<{id:string, title:string, type:string, year:number, image:string}> = (props) => {
    
    return(
        <CardControl>
            <img src={props.image}/> 
        </CardControl>
    );
};

export default Card;