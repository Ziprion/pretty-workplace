import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { ProvideAuth, ProvideTheme } from '@hooks';
import store from '@redux-store';
import { GlobalStyle } from '@style';
import { render } from '@testing-library/react';

const AllProviders = ({ children, initialRoute }) => (
  <MemoryRouter initialEntries={initialRoute}>
    <ProvideTheme>
      <GlobalStyle />
      <Provider store={store}>
        <ProvideAuth>
          {children}
        </ProvideAuth>
      </Provider>
    </ProvideTheme>
  </MemoryRouter>
);

const customRender = (Component, initialRoute) => render(
  <AllProviders initialRoute={initialRoute}>
    {Component}
  </AllProviders>,
);

export const renderSnapshot = (Component, initialRoute) => renderer
  .create(
    <AllProviders initialRoute={initialRoute}>
      {Component}
    </AllProviders>,
  ).toJSON();

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
