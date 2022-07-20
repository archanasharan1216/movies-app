import {useState, useCallback} from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import TextInput from './TextInput';
import Button from './Button';

const FormDiv = styled.div `
    display: flex;
    flex-direction: row;
    width: fit-content;
    width: 90%;
    margin-right: 2%;
    display: inline;
    label {
        text-align: left;
        font-family: system-ui;
        color: #f65261;
        font-weight: 300;
        font-size: large;
    }
    input {
        width: 100%;
        height: 3.25rem;
        margin-top: 10px;
        background-color: #424242;
        border: none;
        border-radius: 3px;
        font-size: larger;
        padding-left: 20px;
    } 
    .modalTitle {
        font-size: xxx-large;
        margin: 3%;
        font-weight: 100;
        font-family: system-ui;
        color: white;
    }

    .textInput{
        display: flex;
        flex-direction: column;
        margin-top: 25px;
    }
    .rowWrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        padding-left: 30px;
    }
    .firstColumn {
        width: 60%;
    }
    .secondColumn {
        margin-left: 5%;
        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.7);
            
        }

    }

    .textArea {
        width: 95%;
        margin-top: 25px;
    }
    textarea {
        width: 93%;
        background-color: #424242;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: larger;
        border: none;
       
    }
    .submitSection {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        width: 92%;
        .buttonClass {
            background-color: #424242;  
            color: #f65261;
            border-style: none;
            border-radius: 3px;
        }
        Button {
            height: 38px;
            width: 10%;
            margin-left: 2%;
        }
        .resetButton {
            border-style: ridge;
            border-color: #f65261;

        }
        .submitButton {
            background-color: #f65261;
            color: #FFFFFF;
        }
    }
    }
    .calendarInput {
        width: 222px;
    }
   
`;

const GenreControl = styled.div `
   
    select {
        background: #424242;
        color: white;
        border: none;
        font-family: system-ui;
        height: 3.25rem;
        margin-top: 10px;
        border-radius: 2px;
        padding-left: 20px;
        width: 100%;
    }

    
    
`;

type Props = {
    modalTitle: string;
    showModal: boolean;
    closeModalHandler: () => void;
}

const ModalContent:React.FunctionComponent<Props> = (props) => {
   
    const[title, setTitle] = useState<string>();
    const[movieUrl, setUrl] = useState<string>();
    const[rating, setRating] = useState<string>();
    const[runtime, setRuntime] = useState<string>();
    
    const titleHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    },[]);
    const urlHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    },[]);
    const ratingHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
    },[]);
    const runtimeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setRuntime(event.target.value);
    },[]);



    const modalActions = (
        <FormDiv>       
           <div className='modalTitle'>
                {props.modalTitle}
           </div>
            <div className='rowWrapper'>
                <div className='textInput firstColumn'>
                    <TextInput
                        id='modalTitle' 
                        type='text' 
                        label='TITLE'
                        onChange={titleHandler} 
                        placeholder='Title'
                        value={title} />
                </div>
                <div className='textInput secondColumn'>
                    <label> RELEASE DATE </label>
                    <input type='date' data-role="calendarpicker" className='calendarInput'/>
                    
                </div>
            </div>

            <div className='rowWrapper'>
                <div className='textInput firstColumn'>
                    <TextInput
                        id='modalUrl' 
                        type='text' 
                        label='MOVIE URL'
                        onChange={urlHandler} 
                        placeholder='https://'
                        value={movieUrl} />
                </div>
                <div className='textInput secondColumn'>
                    <TextInput
                            id='modalRating' 
                            type='number' 
                            label='RATING'
                            onChange={ratingHandler} 
                            placeholder='7.8'
                            value={rating} />
                </div>
            
            </div>
            <div className='rowWrapper'>
                <GenreControl className='textInput firstColumn'>
                    <label htmlFor='genre'> GENRE </label>
                    <select name='genre' id="genre">
                        <option value="" disabled selected>Select Genre</option>
                        <option value="Action and Adventure">Action and Adventure</option>
                        <option value="Drama, Biography, Music">Drama, Biography, Music</option>
                        <option value="Oscar Winning Movie">Oscar Winning Movie</option>
                    </select>
                </GenreControl>
                <div className='textInput secondColumn'>
                    <TextInput
                            id='modalRuntime' 
                            type='text' 
                            label='RUNTIME'
                            onChange={runtimeHandler} 
                            placeholder='minutes'
                            value={runtime} />
                </div>

            </div>
            <div className='rowWrapper'>
                <div className='textArea'>
                    <label htmlFor='modalTextArea' className='label'>OVERVIEW</label>
                    <textarea id='modalTextArea' name='modalTextArea' rows={10} cols={50} placeholder='Movie Description'>
                       
                    </textarea>
                </div>
                
            </div>
            <div className='submitSection'>
                <Button buttonClass='resetButton buttonClass' name='RESET' type='button'> </Button>
                <Button buttonClass='submitButton buttonClass' name='SUBMIT' type='button'> </Button>
            </div>
        </FormDiv>

    );

    return(   
        <Modal onClose={props.closeModalHandler}>
            {modalActions}
        </Modal>
    )
}

export default ModalContent;