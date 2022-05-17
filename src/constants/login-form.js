import * as Yup from 'yup';

import { API_EFFECTS } from '@api-effects';

import { ROUTES } from '../routes';
import { FORM_EMPTY_FIELD, FORM_FIELD_TYPE } from './form';

export const SIGNIN = 'signin';
export const SIGNUP = 'signup';

const FIELD_NAME = {
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

export const INITIAL_VALUES = {
  [SIGNIN]: {
    [FIELD_NAME.EMAIL]: FORM_EMPTY_FIELD,
    [FIELD_NAME.PASSWORD]: FORM_EMPTY_FIELD,
  },
  [SIGNUP]: {
    [FIELD_NAME.EMAIL]: FORM_EMPTY_FIELD,
    [FIELD_NAME.FIRST_NAME]: FORM_EMPTY_FIELD,
    [FIELD_NAME.LAST_NAME]: FORM_EMPTY_FIELD,
    [FIELD_NAME.PASSWORD]: FORM_EMPTY_FIELD,
    [FIELD_NAME.CONFIRM]: FORM_EMPTY_FIELD,
  },
};

export const FIELDS = {
  [SIGNIN]: [
    {
      name: FIELD_NAME.EMAIL,
      type: FORM_FIELD_TYPE.EMAIL,
      label: FIELD_LABEL.EMAIL,
      placeholder: FIELD_PLACEHOLDER.EMAIL,
    },
    {
      name: FIELD_NAME.PASSWORD,
      type: FORM_FIELD_TYPE.PASSWORD,
      label: FIELD_LABEL.PASSWORD,
      placeholder: FIELD_PLACEHOLDER.PASSWORD,
    },
  ],
  [SIGNUP]: [
    {
      name: FIELD_NAME.EMAIL,
      type: FORM_FIELD_TYPE.EMAIL,
      label: FIELD_LABEL.EMAIL,
      placeholder: FIELD_PLACEHOLDER.EMAIL,
    },
    {
      name: FIELD_NAME.FIRST_NAME,
      type: FORM_FIELD_TYPE.TEXT,
      label: FIELD_LABEL.FIRST_NAME,
      placeholder: FIELD_PLACEHOLDER.FIRST_NAME,
    },
    {
      name: FIELD_NAME.LAST_NAME,
      type: FORM_FIELD_TYPE.TEXT,
      label: FIELD_LABEL.LAST_NAME,
      placeholder: FIELD_PLACEHOLDER.LAST_NAME,
    },
    {
      name: FIELD_NAME.PASSWORD,
      type: FORM_FIELD_TYPE.PASSWORD,
      label: FIELD_LABEL.PASSWORD,
      placeholder: FIELD_PLACEHOLDER.PASSWORD,
    },
    {
      name: FIELD_NAME.CONFIRM,
      type: FORM_FIELD_TYPE.PASSWORD,
      label: FIELD_LABEL.CONFIRM,
      placeholder: FIELD_PLACEHOLDER.CONFIRM,
    },
  ],
};

export const VALIDATION_SCHEMA = {
  [SIGNIN]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup.string().email().required('Required').trim(),
    [FIELD_NAME.PASSWORD]: Yup.string().required('Required').trim(),
  }),
  [SIGNUP]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup.string().email().required('Required').trim(),
    [FIELD_NAME.FIRST_NAME]: Yup.string().max(20, 'Must be 20 characters at least').required('Required').trim(),
    [FIELD_NAME.LAST_NAME]: Yup.string().max(20, 'Must be 20 characters at least').required('Required').trim(),
    [FIELD_NAME.PASSWORD]: Yup.string().min(8, 'Must be 8 characters at least').required('Required').trim(),
    [FIELD_NAME.CONFIRM]: Yup.string().min(8, 'Must be 8 characters at least').required('Required').trim(),
  }),
};

export const LOGIN_FORM_ADDITIONAL = {
  [SIGNUP]: {
    mainTitle: 'Create your account to continue',
    title: 'Do you have account? ',
    linkText: 'Login',
    linkTo: ROUTES.SIGNIN,
    apiEffect: API_EFFECTS.AUTH.SIGNUP,
  },
  [SIGNIN]: {
    mainTitle: 'Login to your account to continue',
    title: 'Do you have not account? ',
    linkText: 'Create',
    linkTo: ROUTES.SIGNUP,
    apiEffect: API_EFFECTS.AUTH.SIGNIN,
  },
};
