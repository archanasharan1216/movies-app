import styled from "styled-components";
import CloseMark from "../UI/CloseMark";
import Modal from "../UI/Modal";

const Button = styled.button `
    border-style: none;
    border-radius: 3px;
   
        background-color: #F65261;
        color: #FFFFFF;
        border-style: none;
        border-radius: 3px;
        float: right;
        height: 40px;
        width: 110px;
        margin: 40px;

   
    `;
const ModalDiv = styled.div `
    .modalTitle {
        text-align: left;
        font-size: xx-large;
        font-family: system-ui;
        color: #FFFFFF;
        font-weight: 200;
    }
    p {
        color: #FFFFFF;
        font-family: system-ui;
        font-size: large;
        font-weight: 200;
    }

`;


type Props = {
    closeModalHandler: ()=>void;
}
const DeleteMovie: React.FunctionComponent<Props> = (props) => {
   
    const modalActions = (
            <>
                <ModalDiv>
                    <span className='modalTitle'>DELETE MOVIE</span>
                    <p>Are you sure you want to delete this movie?</p>
                </ModalDiv>
                
                <Button className='confirmButton'> CONFIRM </Button>
            </>
    );
    return(
       <>
            <Modal onClose={props.closeModalHandler}>
                {modalActions}
            </Modal>
       </>
    )
}

export default DeleteMovie;