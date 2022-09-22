import { ComponentPropsWithoutRef } from "react";

interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelClass?: string;
  inputClass?: string;
}
const TextInput: React.FunctionComponent<IInputProps> = ({
  label,
  id,
  labelClass,
  type,
  onChange,
  placeholder,
  inputClass,
  value,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type ?? "text"}
        onChange={onChange}
        placeholder={placeholder ?? ""}
        className={inputClass}
        value={value}
      />
    </>
  );
};

export default TextInput;
