import React from 'react';
import { render, screen } from '@testing-library/react';
import { SignUp } from '../../pages/SignUp';
import { Provider } from 'react-redux';

import storeConfig from '../../state/store';

const store = storeConfig();

describe('SignUp page', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );

    expect(screen.getByTestId('test-register')).toBeTruthy();
  });
});
