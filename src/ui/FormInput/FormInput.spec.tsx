import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormInput } from '.';

describe('Form input component', () => {
  it('renders correctly', () => {
    render(<FormInput name="test" icon="" iconAlt="" error="" type="text" />);

    expect(screen.getByTestId('test-form-input')).toBeTruthy();
  });

  it('should render password button when the type is password', () => {
    render(
      <FormInput name="test" icon="" iconAlt="" error="" type="password" />,
    );

    expect(screen.getByTestId('test-password-button')).toBeTruthy();
  });

  it('should render error', () => {
    render(
      <FormInput
        name="test"
        icon=""
        iconAlt=""
        error="test-error"
        type="text"
      />,
    );

    expect(screen.getByText('test-error')).toBeTruthy();
  });
});
