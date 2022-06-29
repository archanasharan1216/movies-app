import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button `
    background-color: #424242;
    
    color: #f65261;
    border-style: none;
    border-radius: 3px;
    `;

const AddMovie:React.FC = () => {
    return(
        <AddButton>
            + ADD MOVIE
        </AddButton>
    )
}

export default AddMovie;