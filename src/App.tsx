import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import storeConfig from './state/store';
import { GlobalStyle } from './styles/global';

const store = storeConfig();

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </Provider>
  );
}

export default App;
