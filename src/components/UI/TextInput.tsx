import { ComponentPropsWithoutRef } from "react";

interface ITextInput extends ComponentPropsWithoutRef<"input"> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelClass: string;
  inputClass: string;
}
const TextInput: React.FunctionComponent<ITextInput> = ({
  onChange,
  label,
  labelClass,
  inputClass,
  id,
  type,
  placeholder,
  value,
}) => {
  return (
    <>
      {label != null && (
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
