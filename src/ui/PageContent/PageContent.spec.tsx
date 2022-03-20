import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageContent } from '.';

describe('Page content component', () => {
  it('renders correctly', () => {
    render(
      <PageContent>
        <h1>Testing</h1>
      </PageContent>,
    );

    expect(screen.getAllByTestId('page-content')).toBeTruthy();
  });
});
