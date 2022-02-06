import * as Yup from 'yup';

const EMPTY_FIELD = '';

export const BOARD_FORM_FIELD_NAME = {
  BOARD_TITLE: 'boardTitle',
};

const BOARD_FORM_FIELD_LABEL = {
  BOARD_TITLE: 'boardTitle',
};

const BOARD_FORM_FIELD_PLACEHOLDER = {
  BOARD_TITLE: 'Enter board title',
};

const BOARD_FORM_FIELD_TYPE = {
  TEXT: 'text',
};

export const BOARD_FORM_INITIAL_VALUES = {
  [BOARD_FORM_FIELD_NAME.BOARD_TITLE]: EMPTY_FIELD,
};

export const BOARD_FORM_FIELDS = [
  {
    name: BOARD_FORM_FIELD_NAME.BOARD_TITLE,
    type: BOARD_FORM_FIELD_TYPE.TEXT,
    label: BOARD_FORM_FIELD_LABEL.BOARD_TITLE,
    placeholder: BOARD_FORM_FIELD_PLACEHOLDER.BOARD_TITLE,
  },
];

export const BOARD_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  [BOARD_FORM_FIELD_NAME.BOARD_TITLE]: Yup.string().required('Required').trim(),
});
