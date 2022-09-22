import ModalContent from "../UI/ModalContent";

interface IEditMovie {
  editMovie: boolean;
  closeModalHandler: () => void;
}
const EditMovie: React.FunctionComponent<IEditMovie> = ({
  editMovie,
  closeModalHandler,
}) => {
  return (
    <>
      <ModalContent
        modalTitle="EDIT MOVIE"
        showModal={editMovie}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
};

export default EditMovie;
