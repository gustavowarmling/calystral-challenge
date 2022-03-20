import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from '../../ui/FormInput';
import { SubmitButton } from '../../ui/SubmitButton';
import { ContentCard } from '../../ui/ContentCard';

import { FormContainer, AccountNavigation, InputsWrapper } from './styles';

import emailIcon from '../../assets/icons/mail.svg';
import { FaqButton } from '../../ui/FaqButton';

type passwordRecoveryData = {
  email: string;
  password: string;
};

const passwordRecoverySchema = yup.object().shape({
  email: yup.string().required('E-Mail required').email('Invalid E-Mail'),
  password: yup.string().required('Password required'),
});

export const PasswordRecovery = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver<yup.AnyObjectSchema>(passwordRecoverySchema),
  });

  const handlePasswordRecovery: SubmitHandler<passwordRecoveryData> =
    async values => {
      console.log(values);
    };

  return (
    <ContentCard>
      <h1>Password Recovery</h1>

      <FormContainer
        onSubmit={handleSubmit(handlePasswordRecovery as SubmitHandler<{}>)}
      >
        <InputsWrapper>
          <FormInput
            type="email"
            icon={emailIcon}
            iconAlt="Letter Icon"
            placeholder="E-Mail Address"
            error={formState.errors.email?.message}
            {...register('email')}
          />
        </InputsWrapper>

        <SubmitButton text="Send recovery email" />
      </FormContainer>

      <AccountNavigation>
        <a href="/">Already have an account? SignIn</a>
        <a href="/register">Don't have an account yet? Signup</a>
      </AccountNavigation>

      <FaqButton />
    </ContentCard>
  );
};
