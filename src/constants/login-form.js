import * as Yup from 'yup';

import { API_EFFECTS } from '@api-effects';

import { ROUTES } from './routes';

const EMPTY_FIELD = ''; // todo move to common form constants
export const SIGNIN_KEY = 'signin';
export const SIGNUP_KEY = 'signup';

export const FIELD_NAME = {
  EMAIL: 'email',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PASSWORD: 'password',
  CONFIRM: 'confirm',
};

const FIELD_LABEL = {
  EMAIL: 'email',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PASSWORD: 'password',
  CONFIRM: 'confirm',
};

const FIELD_PLACEHOLDER = {
  EMAIL: 'Enter your email',
  FIRST_NAME: 'Enter your firstName',
  LAST_NAME: 'Enter your lastName',
  PASSWORD: 'Enter your password',
  CONFIRM: 'Enter your confirm',
};

// todo move to common form constants
const FIELD_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
};

export const INITIAL_VALUES = {
  [SIGNIN_KEY]: {
    [FIELD_NAME.EMAIL]: EMPTY_FIELD,
    [FIELD_NAME.PASSWORD]: EMPTY_FIELD,
  },
  [SIGNUP_KEY]: {
    [FIELD_NAME.EMAIL]: EMPTY_FIELD,
    [FIELD_NAME.FIRST_NAME]: EMPTY_FIELD,
    [FIELD_NAME.LAST_NAME]: EMPTY_FIELD,
    [FIELD_NAME.PASSWORD]: EMPTY_FIELD,
    [FIELD_NAME.CONFIRM]: EMPTY_FIELD,
  },
};

export const FIELDS = {
  [SIGNIN_KEY]: [
    {
      name: FIELD_NAME.EMAIL,
      type: FIELD_TYPE.EMAIL,
      label: FIELD_LABEL.EMAIL,
      placeholder: FIELD_PLACEHOLDER.EMAIL,
    },
    {
      name: FIELD_NAME.PASSWORD,
      type: FIELD_TYPE.PASSWORD,
      label: FIELD_LABEL.PASSWORD,
      placeholder: FIELD_PLACEHOLDER.PASSWORD,
    },
  ],
  [SIGNUP_KEY]: [
    {
      name: FIELD_NAME.EMAIL,
      type: FIELD_TYPE.EMAIL,
      label: FIELD_LABEL.EMAIL,
      placeholder: FIELD_PLACEHOLDER.EMAIL,
    },
    {
      name: FIELD_NAME.FIRST_NAME,
      type: FIELD_TYPE.TEXT,
      label: FIELD_LABEL.FIRST_NAME,
      placeholder: FIELD_PLACEHOLDER.FIRST_NAME,
    },
    {
      name: FIELD_NAME.LAST_NAME,
      type: FIELD_TYPE.TEXT,
      label: FIELD_LABEL.LAST_NAME,
      placeholder: FIELD_PLACEHOLDER.LAST_NAME,
    },
    {
      name: FIELD_NAME.PASSWORD,
      type: FIELD_TYPE.PASSWORD,
      label: FIELD_LABEL.PASSWORD,
      placeholder: FIELD_PLACEHOLDER.PASSWORD,
    },
    {
      name: FIELD_NAME.CONFIRM,
      type: FIELD_TYPE.PASSWORD,
      label: FIELD_LABEL.CONFIRM,
      placeholder: FIELD_PLACEHOLDER.CONFIRM,
    },
  ],
};

export const VALIDATION_SCHEMA = {
  [SIGNIN_KEY]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup
      .string()
      .email()
      .required('Required')
      .trim(),
    [FIELD_NAME.PASSWORD]: Yup
      .string()
      .required('Required')
      .trim(),
  }),
  [SIGNUP_KEY]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup
      .string()
      .email()
      .required('Required')
      .trim(),
    [FIELD_NAME.FIRST_NAME]: Yup
      .string()
      .max(20, 'Must be 20 characters at least')
      .required('Required')
      .trim(),
    [FIELD_NAME.LAST_NAME]: Yup
      .string()
      .max(20, 'Must be 20 characters at least')
      .required('Required')
      .trim(),
    [FIELD_NAME.PASSWORD]: Yup
      .string()
      .min(8, 'Must be 8 characters at least')
      .required('Required')
      .trim(),
    [FIELD_NAME.CONFIRM]: Yup
      .string()
      .min(8, 'Must be 8 characters at least')
      .required('Required')
      .trim(),
  }),
};

export const LOGIN_FORM_ADDITIONAL = {
  [SIGNUP_KEY]: {
    mainTitle: 'Create your account to continue',
    title: 'Do you have account? ',
    linkText: 'Login',
    linkTo: ROUTES.SIGNIN,
    apiEffect: API_EFFECTS.AUTH.SIGNUP,
  },
  [SIGNIN_KEY]: {
    mainTitle: 'Login to your account to continue',
    title: 'Do you have not account? ',
    linkText: 'Create',
    linkTo: ROUTES.SIGNUP,
    apiEffect: API_EFFECTS.AUTH.SIGNIN,
  },
};
