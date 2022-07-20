import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const CloseButton =styled.div `
    float: right;
    color: white;
   
    svg {
        height: 2em;
    }
`;
type Props = {
    onClose?: (React.MouseEventHandler<HTMLDivElement>); 
}
const CloseMark: React.FunctionComponent<Props> = (props) => {
    return(
        <CloseButton onClick={props.onClose}>
            <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
    )

}

export default CloseMark;