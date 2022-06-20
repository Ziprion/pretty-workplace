import * as Yup from 'yup';

import { FORM_FIELD_TYPE } from '@constants';

export const BOARD_FORM_NAME = {
  TITLE: 'title',
};

const BOARD_FORM_LABEL = {
  TITLE: 'boardTitleLabel',
};

const BOARD_FORM_PLACEHOLDER = {
  TITLE: 'boardTitlePlaceholder',
};

export const BOARD_FORM_FIELDS = [
  {
    name: BOARD_FORM_NAME.TITLE,
    type: FORM_FIELD_TYPE.TEXT,
    label: BOARD_FORM_LABEL.TITLE,
    placeholder: BOARD_FORM_PLACEHOLDER.TITLE,
  },
];

export const BOARD_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  [BOARD_FORM_NAME.TITLE]: Yup.string().required('Required').trim(),
});
