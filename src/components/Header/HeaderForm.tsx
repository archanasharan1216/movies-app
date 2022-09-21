import React from 'react';
import { useState } from 'react';
import SearchMovie from './SearchMovie';
import Movies from '../Movies/MoviesList';
import styled from 'styled-components';
import AddMovie from './AddMovie';
import image from '../../assets/images/bgrnd-img.png';


const HeaderControl = styled.div`
    padding-top: 5px;
    margin: 20px;
    margin-bottom: 10px;
    height: 50%;
    background-image: url(${image});
  
    
    p {
        color: #F65261;
        width: 90%;
        margin: 2%;
        font-size: large;
    }

`;

const HeaderTop = styled.div `
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
`;

const BackgroundFilter = styled.div `
    height: 100%;
    backdrop-filter: blur(7px);
`;

const HeaderForm: React.FC<{}> = () => {

    const[movies, setMovies] = useState<number>(0);
    const addMovies = () => {
        setMovies(movies + 1);
    };

    const removeMovies = () => {
        setMovies(movies - 1);
    };
        return (
            <HeaderControl>
                <BackgroundFilter>
                    <HeaderTop>
                    <p><strong>netflix</strong>roulette</p>
                        {/* <img src='./bgrnd-img.jpg' /> */}
                        <AddMovie />
                    </HeaderTop>
                    
                    <SearchMovie />
                </BackgroundFilter>
                
            </HeaderControl>
          
        );
    }


export default HeaderForm;