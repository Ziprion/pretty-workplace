import * as Yup from 'yup';

const EMPTY_FIELD = '';

export const ITEM_FORM_FIELD_NAME = {
  TITLE: 'title',
  URL: 'url',
};

const ITEM_FORM_FIELD_LABEL = {
  TITLE: 'title',
  URL: 'url',
};

const ITEM_FORM_FIELD_PLACEHOLDER = {
  TITLE: 'Enter title',
  URL: 'Enter url',
};

const ITEM_FORM_FIELD_TYPE = { TEXT: 'text' };

export const ITEM_FORM_INITIAL_VALUES = {
  [ITEM_FORM_FIELD_NAME.TITLE]: EMPTY_FIELD,
  [ITEM_FORM_FIELD_NAME.URL]: EMPTY_FIELD,
};

export const ITEM_FORM_FIELDS = [
  {
    name: ITEM_FORM_FIELD_NAME.TITLE,
    type: ITEM_FORM_FIELD_TYPE.TEXT,
    label: ITEM_FORM_FIELD_LABEL.TITLE,
    placeholder: ITEM_FORM_FIELD_PLACEHOLDER.TITLE,
  },
  {
    name: ITEM_FORM_FIELD_NAME.URL,
    type: ITEM_FORM_FIELD_TYPE.TEXT,
    label: ITEM_FORM_FIELD_LABEL.URL,
    placeholder: ITEM_FORM_FIELD_PLACEHOLDER.URL,
  },
];

export const ITEM_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  [ITEM_FORM_FIELD_NAME.TITLE]: Yup.string().required('Required').trim(),
  [ITEM_FORM_FIELD_NAME.URL]: Yup.string().required('Required').trim(),
});
