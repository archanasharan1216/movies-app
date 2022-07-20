import ModalContent from "../UI/ModalContent";
import { useCallback, useState } from "react";

type Props = {
    editMovie: boolean;
    closeModalHandler: ()=>void;
}
const EditMovie: React.FunctionComponent<Props> = (props) => {
    const[editMovie, setEditMovie] = useState<boolean>(false);
    const editMovieHandler = useCallback(() => {
        setEditMovie(true);
    },[]);


    return(
        <>
       <ModalContent modalTitle = 'EDIT MOVIE' showModal={props.editMovie} closeModalHandler={props.closeModalHandler}/>
        </>
        
    )
}

export default EditMovie;