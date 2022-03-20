import React, { HTMLAttributes, useState } from 'react';
import { Input, InputContainer, ShowPasswordButton } from './styles';

import eyeIcon from '../../assets/icons/eye.svg';

interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  icon: string;
  iconAlt: string;
  type: 'email' | 'password' | 'text';
}

export const FormInput = ({
  icon,
  iconAlt,
  type,
  name,
  ...rest
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  function switchPasswordShow() {
    setShowPassword(!showPassword);
  }

  return (
    <InputContainer>
      <label htmlFor={name}>
        <img src={icon} alt={iconAlt} />
      </label>

      <Input
        type={showPassword ? 'text' : type}
        id={name}
        name={name}
        {...rest}
      />

      {type === 'password' && (
        <ShowPasswordButton type="button" onClick={switchPasswordShow}>
          <img src={eyeIcon} alt="Eye Icon" />
        </ShowPasswordButton>
      )}
    </InputContainer>
  );
};
