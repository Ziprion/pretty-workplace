import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { ProvideAuth, ProvideTheme } from '@hooks';
import store from '@redux-store';
import { GlobalStyle } from '@style';

import './i18n';
import { App } from './App';

export default () => {
  render(
    <StrictMode>
      <ProvideTheme>
        <GlobalStyle />
        <Provider store={store}>
          <ProvideAuth>
            <App />
          </ProvideAuth>
        </Provider>
      </ProvideTheme>
    </StrictMode>,
    document.getElementById('root'),
  );
};
