import React from 'react';
import { render, screen } from '@testing-library/react';
import { PasswordRecovery } from '../../pages/PasswordRecovery';

describe('Password recovery page', () => {
  it('renders correctly', () => {
    render(<PasswordRecovery />);

    expect(screen.getByText('Password Recovery')).toBeTruthy();
  });
});
