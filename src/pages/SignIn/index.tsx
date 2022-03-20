import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { ContentCard } from '../../ui/ContentCard';
import { FormInput } from '../../ui/FormInput';
import { SubmitButton } from '../../ui/SubmitButton';
import { FaqButton } from '../../ui/FaqButton';

import { FormContainer, AccountNavigation, InputsWrapper } from './styles';

import emailIcon from '../../assets/icons/mail.svg';
import lockIcon from '../../assets/icons/lock.svg';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-Mail required').email('Invalid E-Mail'),
  password: yup.string().required('Password required'),
});

export const SignIn = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver<yup.AnyObjectSchema>(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    toast.error('Incorrect e-mail or password!');
    console.log(values);
  };

  return (
    <ContentCard>
      <h1>Login</h1>

      <FormContainer onSubmit={handleSubmit(handleSignIn as SubmitHandler<{}>)}>
        <InputsWrapper>
          <FormInput
            type="email"
            icon={emailIcon}
            iconAlt="Letter Icon"
            placeholder="E-Mail Address"
            error={formState.errors.email?.message}
            {...register('email')}
          />

          <FormInput
            type="password"
            icon={lockIcon}
            iconAlt="Lock Icon"
            placeholder="Password"
            error={formState.errors.password?.message}
            {...register('password')}
          />
        </InputsWrapper>

        <SubmitButton text="Login" />
      </FormContainer>

      <AccountNavigation>
        <a href="/register">Don't have an account yet? Signup</a>
        <a href="/password-recovery">
          Don't remember your password? Recover my Password
        </a>
      </AccountNavigation>

      <FaqButton />
    </ContentCard>
  );
};
