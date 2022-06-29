import * as Yup from 'yup';

import { API_EFFECTS } from '@api-effects';

import { ROUTES } from '../routes';

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
  EMAIL: 'emailLabel',
  FIRST_NAME: 'firstNameLabel',
  LAST_NAME: 'lastNameLabel',
  PASSWORD: 'passwordLabel',
  CONFIRM: 'confirmPasswordLabel',
};

const FIELD_PLACEHOLDER = {
  EMAIL: 'emailPlaceholder',
  FIRST_NAME: 'firstNamePlaceholder',
  LAST_NAME: 'lastNamePlaceholder',
  PASSWORD: 'passwordPlaceholder',
  CONFIRM: 'confirmPasswordPlaceholder',
};

export const INITIAL_VALUES = {
  [SIGNIN]: {
    [FIELD_NAME.EMAIL]: '',
    [FIELD_NAME.PASSWORD]: '',
  },
  [SIGNUP]: {
    [FIELD_NAME.EMAIL]: '',
    [FIELD_NAME.FIRST_NAME]: '',
    [FIELD_NAME.LAST_NAME]: '',
    [FIELD_NAME.PASSWORD]: '',
    [FIELD_NAME.CONFIRM]: '',
  },
};

export const FIELDS = {
  [SIGNIN]: [
    {
      name: FIELD_NAME.EMAIL,
      type: 'text',
      label: FIELD_LABEL.EMAIL,
      placeholder: FIELD_PLACEHOLDER.EMAIL,
    },
    {
      name: FIELD_NAME.PASSWORD,
      type: 'password',
      label: FIELD_LABEL.PASSWORD,
      placeholder: FIELD_PLACEHOLDER.PASSWORD,
    },
  ],
  [SIGNUP]: [
    {
      name: FIELD_NAME.EMAIL,
      type: 'text',
      label: FIELD_LABEL.EMAIL,
      placeholder: FIELD_PLACEHOLDER.EMAIL,
    },
    {
      name: FIELD_NAME.FIRST_NAME,
      type: 'text',
      label: FIELD_LABEL.FIRST_NAME,
      placeholder: FIELD_PLACEHOLDER.FIRST_NAME,
    },
    {
      name: FIELD_NAME.LAST_NAME,
      type: 'text',
      label: FIELD_LABEL.LAST_NAME,
      placeholder: FIELD_PLACEHOLDER.LAST_NAME,
    },
    {
      name: FIELD_NAME.PASSWORD,
      type: 'password',
      label: FIELD_LABEL.PASSWORD,
      placeholder: FIELD_PLACEHOLDER.PASSWORD,
    },
    {
      name: FIELD_NAME.CONFIRM,
      type: 'password',
      label: FIELD_LABEL.CONFIRM,
      placeholder: FIELD_PLACEHOLDER.CONFIRM,
    },
  ],
};

export const VALIDATION_SCHEMA = {
  [SIGNIN]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup.string().email('emailFormError').required('requiredFormError').trim(),
    [FIELD_NAME.PASSWORD]: Yup.string().required('requiredFormError').trim(),
  }),
  [SIGNUP]: Yup.object().shape({
    [FIELD_NAME.EMAIL]: Yup.string().email('emailFormError').required('requiredFormError').trim(),
    [FIELD_NAME.FIRST_NAME]: Yup.string().max(20, 'signupMaxLengthFormError').required('requiredFormError').trim(),
    [FIELD_NAME.LAST_NAME]: Yup.string().max(20, 'signupMaxLengthFormError').required('requiredFormError').trim(),
    [FIELD_NAME.PASSWORD]: Yup.string().min(8, 'signupMinLengthFormError').required('requiredFormError').trim(),
    [FIELD_NAME.CONFIRM]: Yup.string().min(8, 'signupMinLengthFormError').required('requiredFormError').trim(),
  }),
};

export const LOGIN_FORM_ADDITIONAL = {
  [SIGNUP]: {
    welcomeMessage: 'signupWelcomeText',
    additionalMessage: 'signupAdditionalText',
    linkText: 'signupLinkText',
    submitText: 'signupSubmitText',
    linkTo: ROUTES.SIGNIN,
    apiEffect: API_EFFECTS.AUTH.SIGNUP,
  },
  [SIGNIN]: {
    welcomeMessage: 'signinWelcomeText',
    additionalMessage: 'signinAdditionalText',
    linkText: 'signinLinkText',
    submitText: 'signinSubmitText',
    linkTo: ROUTES.SIGNUP,
    apiEffect: API_EFFECTS.AUTH.SIGNIN,
  },
};
