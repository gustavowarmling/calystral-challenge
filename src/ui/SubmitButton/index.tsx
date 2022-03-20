import React, { HTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

interface SubmitButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const SubmitButton = ({ text, ...rest }: SubmitButtonProps) => {
  return (
    <ButtonWrapper type="submit" {...rest}>
      <h5>{text}</h5>
    </ButtonWrapper>
  );
};
