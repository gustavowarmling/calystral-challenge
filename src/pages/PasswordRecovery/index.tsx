import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { FormInput } from '../../ui/FormInput';
import { SubmitButton } from '../../ui/SubmitButton';
import { ContentCard } from '../../ui/ContentCard';
import { FaqButton } from '../../ui/FaqButton';

import { FormContainer, AccountNavigation, InputsWrapper } from './styles';
import emailIcon from '../../assets/icons/mail.svg';

type passwordRecoveryData = {
  email: string;
  password: string;
};

const passwordRecoverySchema = yup.object().shape({
  email: yup.string().required('E-Mail required').email('Invalid E-Mail'),
});

export const PasswordRecovery = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver<yup.AnyObjectSchema>(passwordRecoverySchema),
  });

  const handlePasswordRecovery: SubmitHandler<passwordRecoveryData> =
    async values => {
      toast.success('Recovery e-mail sent!');
      console.log(values);
      reset();
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
