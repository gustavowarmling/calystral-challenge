import React from 'react';
import { render, screen } from '@testing-library/react';
import { PagesWrapper } from '.';

describe('Pages wrapper component', () => {
  it('renders correctly', () => {
    render(
      <PagesWrapper>
        <h1>Testing</h1>
        <h1>Testing</h1>
      </PagesWrapper>,
    );

    expect(screen.getAllByTestId('pages-wrapper')).toBeTruthy();
  });
});
