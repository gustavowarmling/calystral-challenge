import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentCard } from '.';

describe('Content card component', () => {
  it('renders correctly', () => {
    render(
      <ContentCard>
        <h1>Testing</h1>
        <h1>Testing</h1>
      </ContentCard>,
    );

    expect(screen.getAllByTestId('content-card')).toBeTruthy();
  });
});
