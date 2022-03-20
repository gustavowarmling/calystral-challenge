import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByAltText("Synergy of Serra's logo")).toBeTruthy();
  });
});
