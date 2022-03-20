import React from 'react';

import { ContentCard } from '../../ui/ContentCard';

import { AccountNavigation } from './styles';

export const FAQ = () => {
  return (
    <ContentCard>
      <h1>FAQ</h1>

      <AccountNavigation>
        <a href="/">Go back</a>
      </AccountNavigation>
    </ContentCard>
  );
};
