import { FC, InputHTMLAttributes } from "react";

import { CloseIcon } from "components/Icons";
import "./styles.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear: () => void;
}

const FormInput: FC<FormInputProps> = ({ onClear, ...props }) => {
  return (
    <div className="formInput">
      <input autoComplete="off" className="formInput__input" {...props} />
      {props.value && (
        <CloseIcon data-testid="close-button" className="formInput__icon" onClick={onClear} />
      )}
    </div>
  );
};

export default FormInput;
