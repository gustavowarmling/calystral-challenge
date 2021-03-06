import React from 'react';

import { HeaderContainer } from './styles';
import horizontalLogo from '../../assets/images/logo-horizontal.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={horizontalLogo} alt="Synergy of Serra's logo" />
      </a>
    </HeaderContainer>
  );
};
