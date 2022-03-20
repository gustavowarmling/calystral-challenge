import React, { ReactChild } from 'react';

import { Page } from './styles';

type PageContentProps = {
  children: ReactChild;
};

export const PageContent = ({ children }: PageContentProps) => {
  return <Page>{children}</Page>;
};
