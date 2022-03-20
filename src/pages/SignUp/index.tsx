import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';

import { FormInput } from '../../ui/FormInput';
import { SubmitButton } from '../../ui/SubmitButton';
import { ContentCard } from '../../ui/ContentCard';
import { FaqButton } from '../../ui/FaqButton';

import {
  FormContainer,
  AccountNavigation,
  InputsWrapper,
  TermsOfService,
} from './styles';
import emailIcon from '../../assets/icons/mail.svg';
import lockIcon from '../../assets/icons/lock.svg';
import userIcon from '../../assets/icons/user.svg';

type SignUpFormData = {
  email: string;
  password: string;
};

const signUpFormSchema = yup.object().shape({
  username: yup.string().required('Username required'),
  email: yup.string().required('E-Mail required').email('Invalid E-Mail'),
  password: yup
    .string()
    .required('Password required')
    .min(4, 'at least 4 characters'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must match'),
  terms_of_service: yup.boolean().oneOf([true], 'Required'),
});

export const SignUp = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver<yup.AnyObjectSchema>(signUpFormSchema),
  });
  const emailData = useSelector((state: RootState) => state.email);

  const handleSignUp: SubmitHandler<SignUpFormData> = async values => {
    toast.warning('Registration is currently not possible! :(');
    console.log(values);
  };

  return (
    <ContentCard>
      <h1 data-testid="test-register">Register</h1>

      <FormContainer onSubmit={handleSubmit(handleSignUp as SubmitHandler<{}>)}>
        <InputsWrapper>
          <FormInput
            type="text"
            icon={userIcon}
            iconAlt="User Icon"
            placeholder="Username"
            error={formState.errors.username?.message}
            {...register('username')}
          />

          <FormInput
            type="email"
            icon={emailIcon}
            iconAlt="Letter Icon"
            placeholder="E-Mail Address"
            defaultValue={emailData}
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

          <FormInput
            type="password"
            icon={lockIcon}
            iconAlt="Lock Icon"
            placeholder="Password confirmation"
            error={formState.errors.password_confirmation?.message}
            {...register('password_confirmation')}
          />

          <TermsOfService>
            <input
              type="checkbox"
              id="terms_of_service"
              {...register('terms_of_service')}
            />
            <label htmlFor="terms_of_service">
              I agree to the terms of service
              {formState.errors.terms_of_service?.message && (
                <h6>{formState.errors.terms_of_service?.message}</h6>
              )}
            </label>
          </TermsOfService>
        </InputsWrapper>

        <SubmitButton text="SignUp" />
      </FormContainer>

      <AccountNavigation>
        <a href="/">Already have an account? SignIn</a>
        <a href="/password-recovery">
          Don't remember your password? Recover my Password
        </a>
      </AccountNavigation>

      <FaqButton />
    </ContentCard>
  );
};
