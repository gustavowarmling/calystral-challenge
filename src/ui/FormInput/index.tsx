import React, { forwardRef, HTMLAttributes, useState } from 'react';
import {
  ErrorMessage,
  Input,
  InputContainer,
  ShowPasswordButton,
} from './styles';

import eyeIcon from '../../assets/icons/eye.svg';

interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  icon: string;
  iconAlt: string;
  type: 'email' | 'password' | 'text';
  error: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, icon, iconAlt, type, error, ...rest }: FormInputProps, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    function switchPasswordShow() {
      setShowPassword(!showPassword);
    }

    return (
      <>
        <InputContainer>
          <label htmlFor={name}>
            <img src={icon} alt={iconAlt} />
          </label>

          <Input
            type={showPassword ? 'text' : type}
            id={name}
            name={name}
            ref={ref}
            {...rest}
          />

          {type === 'password' && (
            <ShowPasswordButton type="button" onClick={switchPasswordShow}>
              <img src={eyeIcon} alt="Eye Icon" />
            </ShowPasswordButton>
          )}
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);
