import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const CloseButton = styled.div`
  float: right;
  color: white;
  svg {
    height: 2em;
  }
`;
interface ICloseIconProps {
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}
const CloseMark: React.FunctionComponent<ICloseIconProps> = ({ onClose }) => {
  return (
    <CloseButton onClick={onClose}>
      <FontAwesomeIcon icon={faXmark} />
    </CloseButton>
  );
};

export default CloseMark;
