import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useState, useCallback } from 'react'; 
import CloseMark from './CloseMark';
import EditMovie from '../Movies/EditMovie';
import DeleteMovie from '../Movies/DeleteMovie';
import React from 'react';

const CardControl = styled.div`
width: 25%;
margin: 3%;
img {
    width: 100%;
}
.movieType {
    display: flex;
    flex-direction: column;
}
.movieDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    color: #FFFFFF;
}
.movieTitle {
    font-family: system-ui;
    font-size: larger;
}
.movieGenre {
    font-family: system-ui;
    margin-top: 10px;
}
.movieYear {
    border-radius: 2px;
    border-style: ridge;
    height: 25px;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.movieImage {
    position: relative;
}
.kebabMenu {
    position: absolute;
    top: 3%;
    left:90%;
    height: 5%;
}
 .modifyModal {
    position: absolute;
    top: 3%;
    left: 20%;
    height: 7%;
    width: 65%;
    height: 30%;
    background-color: #232323;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 10%;
    font-family: system-ui;
    justify-content: flex-start;
    svg {
        height: 1.2em;
        margin-top: 5px;
        
    }
   .closeButton {
       margin-right: 5%;
       width: fit-content;
    align-self: flex-end;
   }
   .spaceAbove {
       margin-top: 15px;
   }
 }
`;


const Card:React.FunctionComponent<{id:string, title:string, type:string, year:number, image:string}> = (props) => {
    
    const[modifyMovie, setModifyMovie] = useState<boolean>(false);
    const[editMovie, setEditMovie] = useState<boolean>(false);
    const[deleteMovie, setDeleteMovie] = useState<boolean>(false);
    
    const modifyMovieHandler = useCallback(() => {
        setModifyMovie(true);
    }, []) ;
    const closeModifyModal = useCallback( () => {
        setModifyMovie(false);
    },[]);
    const editMovieHandler = useCallback(() => {
        setEditMovie(true);
    },[]);
    const closeEditModal = useCallback(() => {
        setEditMovie(false);
    },[]);
    const deleteMovieHandler = useCallback(() => {
        setDeleteMovie(true);
    },[]);
    const closeDeleteModal = useCallback(() => {
        setDeleteMovie(false);
    },[]);
    
    return(
        <CardControl>
            <div className='movieImage'>
                <img src={props.image}/> 
                <FontAwesomeIcon icon={faEllipsisVertical} className='kebabMenu' onClick={modifyMovieHandler}/>
                {modifyMovie && 
                <div className='modifyModal'>
                    <span className='closeButton' onClick={closeModifyModal}><CloseMark /></span>
                    <span className='spaceAbove' onClick={editMovieHandler}>Edit</span>
                    {editMovie && <EditMovie editMovie={editMovie} closeModalHandler={closeEditModal}/>}
                    <span className='spaceAbove' onClick={deleteMovieHandler}>Delete</span>
                    {deleteMovie && <DeleteMovie closeModalHandler={closeDeleteModal} />}
                </div> }
            </div>
           
            <div className='movieDetails'>
            <div className='movieType'>
                <span className='movieTitle'>{props.title}</span>
                <span className='movieGenre'>{props.type}</span>
            </div>
            <span className='movieYear'>
                {props.year}    
            </span>
            </div>
            

        </CardControl>
    );
};

export default Card;