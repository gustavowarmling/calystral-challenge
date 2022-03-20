import React from 'react';
import { render, screen } from '@testing-library/react';
import { FAQ } from '../../pages/FAQ';

describe('FAQ page', () => {
  it('renders correctly', () => {
    render(<FAQ />);

    expect(screen.getByText('FAQ')).toBeTruthy();
    expect(screen.getByText('Go back')).toBeTruthy();
  });
});
