import React, { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    onClick? : (event: React.MouseEvent<HTMLButtonElement>) => void; 
    buttonClass?: string; 
}
const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return (
        <button 
        type={props.type || 'button'}
        onClick={props.onClick} 
        className={props.buttonClass}>
            {props.name}
        </button>
    )
}

export default Button;