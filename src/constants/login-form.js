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

const FIELD_PLACEHOLDER = {
  EMAIL: 'Enter your email',
  FIRST_NAME: 'Enter your firstName',
  LAST_NAME: 'Enter your lastName',
  PASSWORD: 'Enter your password',
  CONFIRM: 'Enter your confirm',
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
