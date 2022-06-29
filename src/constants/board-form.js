import * as Yup from 'yup';

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
    type: 'text',
    label: BOARD_FORM_LABEL.TITLE,
    placeholder: BOARD_FORM_PLACEHOLDER.TITLE,
  },
];

export const BOARD_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  [BOARD_FORM_NAME.TITLE]: Yup.string().required('Required').trim(),
});
