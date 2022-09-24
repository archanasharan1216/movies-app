import React, { ComponentPropsWithoutRef } from "react";

interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonClass?: string;
}
const Button: React.FunctionComponent<IButtonProps> = ({
  type,
  name,
  onClick,
  buttonClass,
}) => {
  return (
    <button type={type ?? "button"} onClick={onClick} className={buttonClass}>
      {name}
    </button>
  );
};

export default Button;
