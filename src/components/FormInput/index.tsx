/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';

import { CloseIcon } from 'components/Icons';
import './styles.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear: () => void;
}

function FormInput({ onClear, ...props }: FormInputProps) {
  return (
    <div className="formInput">
      <input autoComplete="off" className="formInput__input" {...props} />
      {props.value && (
        <CloseIcon
          data-testid="close-button"
          className="formInput__icon"
          onClick={onClear}
        />
      )}
    </div>
  );
}

export default FormInput;
