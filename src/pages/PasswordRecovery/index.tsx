import React from 'react';

import { FormInput } from '../../ui/FormInput';
import { SubmitButton } from '../../ui/SubmitButton';

import {
  PageContainer,
  Content,
  FormContainer,
  AccountNavigation,
  InputsWrapper,
} from './styles';

import emailIcon from '../../assets/icons/mail.svg';

export const PasswordRecovery = () => {
  return (
    <PageContainer>
      <Content>
        <h1>Password Recovery</h1>

        <FormContainer>
          <InputsWrapper>
            <FormInput
              type="email"
              name="email"
              icon={emailIcon}
              iconAlt="Letter Icon"
              placeholder="E-Mail Address"
            />
          </InputsWrapper>

          <SubmitButton text="Send recovery email" />
        </FormContainer>

        <AccountNavigation>
          <a href="/">Already have an account? SignIn</a>
        </AccountNavigation>
      </Content>
    </PageContainer>
  );
};
