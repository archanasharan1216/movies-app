import React from "react";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelClass?: string;
  inputClass?: string;
}
const TextInput: React.FunctionComponent<InputProps> = (props) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.id} className={props.labelClass}>
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        type={props.type ?? "text"}
        onChange={props.onChange}
        placeholder={props.placeholder ?? ""}
        className={props.inputClass}
        value={props.value}
      />
    </>
  );
};

export default TextInput;
