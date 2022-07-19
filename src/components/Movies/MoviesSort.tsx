import React from 'react';
import styled from 'styled-components';

const MoviesSortControl = styled.span `
float:right;
select {
    background: #232323;
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


const MoviesSort:React.FunctionComponent = () => {
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