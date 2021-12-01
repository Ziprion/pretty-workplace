import * as Yup from 'yup';
import { FIELD_NAME, SIGNUP_KEY, SIGNIN_KEY } from 'constants';

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
