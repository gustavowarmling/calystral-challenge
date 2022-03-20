import React from 'react';

import { ContentCard } from '../../ui/ContentCard';
import { FormInput } from '../../ui/FormInput';
import { SubmitButton } from '../../ui/SubmitButton';

import { FormContainer, AccountNavigation, InputsWrapper } from './styles';

import emailIcon from '../../assets/icons/mail.svg';
import lockIcon from '../../assets/icons/lock.svg';
import { FaqButton } from '../../ui/FaqButton';

export const SignIn = () => {
  return (
    <ContentCard>
      <h1>Login</h1>

      <FormContainer>
        <InputsWrapper>
          <FormInput
            type="email"
            name="email"
            icon={emailIcon}
            iconAlt="Letter Icon"
            placeholder="E-Mail Address"
          />

          <FormInput
            type="password"
            name="password"
            icon={lockIcon}
            iconAlt="Lock Icon"
            placeholder="Password"
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
