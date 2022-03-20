import React from 'react';
import { render, screen } from '@testing-library/react';
import { SignIn } from '../../pages/SignIn';
import { Provider } from 'react-redux';

import storeConfig from '../../state/store';

const store = storeConfig();

describe('SignIn page', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );

    expect(screen.getByTestId('test-login')).toBeTruthy();
  });
});
