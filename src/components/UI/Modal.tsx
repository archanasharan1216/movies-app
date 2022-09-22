import ReactDOM from "react-dom";
import styled from "styled-components";
import CloseMark from "./CloseMark";

const ModalControl = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal {
    position: fixed;
    top: 15vh;
    left: 18%;
    width: 60%;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 15vh;
  left: 13%;
  width: 70%;
  background-color: #232323;
  padding: 1rem;
  //border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  color: red;
`;

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

interface IBackdropProps {
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}

interface IModalProps extends IBackdropProps {
  children: JSX.Element;
}

const Backdrop: React.FunctionComponent<IBackdropProps> = ({onClose}) => {
  return <BackdropWrapper onClick={onClose}></BackdropWrapper>;
};

const ModalOverlay: React.FC<IModalProps> = ({onClose, children}) => {
  return (
    <ModalWrapper>
      <CloseMark onClose={onClose}/>
      <div>{children}</div>
    </ModalWrapper>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FunctionComponent<IModalProps> = ({onClose, children}) => {
  return (
    <ModalControl>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portalElement
      )}
    </ModalControl>
  );
};

export default Modal;
