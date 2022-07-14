import React from 'react';
import styled from 'styled-components';

const FooterControl = styled.div`
    background: #424242;
    
    margin: 20px; 
    margin-top: 0;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    color: #F65261


`;
const Footer: React.FunctionComponent = () => {
    return(
        <FooterControl>
           <strong>netflix</strong>roulette
        </FooterControl>
    );
};

export default Footer;
