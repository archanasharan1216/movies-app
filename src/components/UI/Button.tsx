import React, { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonClass?: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  name,
  onClick,
  buttonClass,
}) => {
  return (
    <button type={type || "button"} onClick={onClick} className={buttonClass}>
      {name}
    </button>
  );
};

export default Button;
