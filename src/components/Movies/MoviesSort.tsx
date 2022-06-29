import React from 'react';
import styled from 'styled-components';

const MoviesSortControl = styled.span `
float:right;
//margin-left: 5%;
// min-width: 20%;
//     label {
//         color: white;
//         margin: 7%;
//     }
select {
    background: transparent;
    color: white;
    border: none;
    margin-left: 25px;
    font-weight: bold;
    font-family: system-ui;
}

label {
    font-family: system-ui;
}
    
`;


const MoviesSort:React.FC = () => {
    return(
        <MoviesSortControl>
            <label htmlFor="movies">SORT BY</label>
            <select name="movies" id="movies">
            <option value="Release Date">RELEASE DATE</option>
            <option value="A-Z">A-Z</option>
            </select>
        </MoviesSortControl>
    )
}

export default MoviesSort;