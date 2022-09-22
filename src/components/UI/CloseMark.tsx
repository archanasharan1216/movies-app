import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CloseButton = styled.div`
  float: right;
  color: white;

  svg {
    height: 2em;
  }
`;
interface ICloseIconProps {
  onClose?: React.MouseEventHandler<HTMLDivElement>;
};
const CloseMark: React.FunctionComponent<ICloseIconProps> = ({onClose}) => {
  return (
    <CloseButton onClick={onClose}>
      <FontAwesomeIcon icon={faXmark} />
    </CloseButton>
  );
};

export default CloseMark;
