import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import { Header } from './ui/Header';
import { PagesWrapper } from './ui/PagesWrapper';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PasswordRecovery } from './pages/PasswordRecovery';

const Routes = () => {
  return (
    <PagesWrapper>
      <Header />

      <BrowserRouter>
        <Route component={SignIn} exact path="/" />
        <Route component={SignUp} exact path="/register" />
        <Route component={PasswordRecovery} exact path="/password-recovery" />
      </BrowserRouter>
    </PagesWrapper>
  );
};

export default Routes;
