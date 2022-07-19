import React from 'react';

import { LoginPage } from '@pages';
import { render, renderSnapshot, screen } from '@test-utils';

import '@testing-library/jest-dom';

test('test', () => {
  const tree = renderSnapshot(<LoginPage />);

  expect(tree).toMatchSnapshot();
});

test('test2', () => {
  const tree = renderSnapshot(<LoginPage />, [ '/signup' ]);

  expect(tree).toMatchSnapshot();
});

test('test3', async () => {
  render(<LoginPage />, [ '/signup' ]);

  expect(screen.getByRole('heading')).toHaveTextContent('pretty workplace');
});
