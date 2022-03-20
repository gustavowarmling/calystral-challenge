import React, { ReactChild } from 'react';

import { PageContainer } from './styles';

type PagesWrapperProps = {
  children: ReactChild[];
};

export const PagesWrapper = ({ children }: PagesWrapperProps) => {
  return <PageContainer data-testid="pages-wrapper">{children}</PageContainer>;
};
