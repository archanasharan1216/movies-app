import React from "react";
import ReactDOM from "react-dom";

import CloseMark from "./CloseMark";
import { BackdropWrapper, ModalControl, ModalWrapper } from "./Modal.styles";

interface IBackdropProps {
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}

interface IModalProps extends IBackdropProps {
  children: JSX.Element;
}

const Backdrop: React.FunctionComponent<IBackdropProps> = ({ onClose }) => {
  return <BackdropWrapper onClick={onClose}></BackdropWrapper>;
};

const ModalOverlay: React.FC<IModalProps> = ({ onClose, children }) => {
  return (
    <ModalWrapper>
      <CloseMark onClose={onClose} />
      <div>{children}</div>
    </ModalWrapper>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FunctionComponent<IModalProps> = ({ onClose, children }) => {
  return (
    <ModalControl>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portalElement
      )}
    </ModalControl>
  );
};

export default Modal;
