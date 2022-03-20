import React, { ReactChild } from 'react';

import { Content } from './styles';

type ContentCardProps = {
  children: ReactChild[];
};

export const ContentCard = ({ children }: ContentCardProps) => {
  return <Content data-testid="content-card">{children}</Content>;
};
