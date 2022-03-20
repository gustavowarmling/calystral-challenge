import React from 'react';
import { render, screen } from '@testing-library/react';
import { FaqButton } from '.';

describe('FAQ Button component', () => {
  it('renders correctly', () => {
    render(<FaqButton />);

    expect(screen.getByText('?')).toBeTruthy();
  });
});
