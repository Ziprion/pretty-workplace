import * as Yup from 'yup';

const EMPTY_FIELD = '';
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
    { name: FIELD_NAME.EMAIL, type: FIELD_TYPE.EMAIL, label: FIELD_LABEL.EMAIL },
    { name: FIELD_NAME.PASSWORD, type: FIELD_TYPE.PASSWORD, label: FIELD_LABEL.PASSWORD },
  ],
  [SIGNUP_KEY]: [
    { name: FIELD_NAME.EMAIL, type: FIELD_TYPE.EMAIL, label: FIELD_LABEL.EMAIL },
    { name: FIELD_NAME.FIRST_NAME, type: FIELD_TYPE.TEXT, label: FIELD_LABEL.FIRST_NAME },
    { name: FIELD_NAME.LAST_NAME, type: FIELD_TYPE.TEXT, label: FIELD_LABEL.LAST_NAME },
    { name: FIELD_NAME.PASSWORD, type: FIELD_TYPE.PASSWORD, label: FIELD_LABEL.PASSWORD },
    { name: FIELD_NAME.CONFIRM, type: FIELD_TYPE.PASSWORD, label: FIELD_LABEL.CONFIRM },
  ],
};

export const VALIDATION_SCHEMA = {
  [SIGNIN_KEY]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup.string().email().required('Required'),
    [FIELD_NAME.PASSWORD]: Yup.string().required('Required'),
  }),
  [SIGNUP_KEY]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup.string()
      .min(3, 'Must be 3 characters at least')
      .max(15, 'Must be 15 characters at least')
      .email()
      .required('Required'),
    [FIELD_NAME.FIRST_NAME]: Yup.string()
      .min(3, 'Must be 3 characters at least')
      .max(15, 'Must be 15 characters at least')
      .required('Required'),
    [FIELD_NAME.LAST_NAME]: Yup.string()
      .min(3, 'Must be 3 characters at least')
      .max(15, 'Must be 15 characters at least')
      .required('Required'),
    [FIELD_NAME.PASSWORD]: Yup.string().min(8, 'Must be 8 characters at least').required('Required'),
    [FIELD_NAME.CONFIRM]: Yup.string().min(8, 'Must be 8 characters at least').required('Required'),
  }),
};
