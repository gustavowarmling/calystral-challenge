import React from 'react';
import { render, screen } from '@testing-library/react';
import { SubmitButton } from '.';

describe('Submit Button component', () => {
  it('renders correctly', () => {
    render(<SubmitButton text="Submit button test" />);

    expect(screen.getByText('Submit button test')).toBeTruthy();
  });
});
