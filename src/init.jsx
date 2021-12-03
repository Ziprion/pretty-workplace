import React from 'react'; /* eslint no-unused-vars: 0 */
import { render } from 'react-dom';
import { ProvideTheme, ProvideAuth } from '@hooks';
import { Provider } from 'react-redux';
import store from '@redux-store';
import { GlobalStyle } from '@style';
import { App } from './App';
import i18n from './i18n';

export default () => {
  render(
    <ProvideTheme>
      <GlobalStyle />
      <Provider store={store}>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </Provider>
    </ProvideTheme>,
    document.getElementById('root'),
  );
};
