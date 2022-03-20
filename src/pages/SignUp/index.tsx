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
import lockIcon from '../../assets/icons/lock.svg';
import userIcon from '../../assets/icons/user.svg';

export const SignUp = () => {
  return (
    <PageContainer>
      <Content>
        <h1>Register</h1>

        <FormContainer>
          <InputsWrapper>
            <FormInput
              type="text"
              name="username"
              icon={userIcon}
              iconAlt="User Icon"
              placeholder="Username"
            />

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

            <FormInput
              type="password"
              name="password repeat"
              icon={lockIcon}
              iconAlt="Lock Icon"
              placeholder="Password repeat"
            />

            <section>
              <input type="checkbox" id="terms-of-service" />
              <label htmlFor="terms-of-service">
                I agree to the terms of service
              </label>
            </section>
          </InputsWrapper>

          <SubmitButton text="SignUp" />
        </FormContainer>

        <AccountNavigation>
          <a href="/">Already have an account? SignIn</a>
          <a href="/password-recovery">
            Don't remember your password? Recover my Password
          </a>
        </AccountNavigation>
      </Content>
    </PageContainer>
  );
};
