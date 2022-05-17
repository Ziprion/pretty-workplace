import * as Yup from 'yup';

import { FORM_FIELD_TYPE } from '@constants';

export const WORKPLACE_FORM_FIELD_NAME = {
  TITLE: 'title',
};

const WORKPLACE_FORM_FIELD_LABEL = {
  TITLE: 'workplace title',
};

const WORKPLACE_FORM_FIELD_PLACEHOLDER = {
  TITLE: 'Enter workplace title',
};

export const WORKPLACE_FORM_FIELDS = [
  {
    name: WORKPLACE_FORM_FIELD_NAME.TITLE,
    type: FORM_FIELD_TYPE.TEXT,
    label: WORKPLACE_FORM_FIELD_LABEL.TITLE,
    placeholder: WORKPLACE_FORM_FIELD_PLACEHOLDER.TITLE,
  },
];

export const WORKPLACE_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  [WORKPLACE_FORM_FIELD_NAME.TITLE]: Yup.string().max(20, 'Must be 20 characters at least').required('Required').trim(),
});