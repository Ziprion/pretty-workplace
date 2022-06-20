import * as Yup from 'yup';

import { FORM_FIELD_TYPE } from '@constants';

export const ITEM_FORM_NAME = {
  TITLE: 'title',
  URL: 'url',
};

const ITEM_FORM_LABEL = {
  TITLE: 'itemTitleLabel',
  URL: 'urlTitleLabel',
};

const ITEM_FORM_PLACEHOLDER = {
  TITLE: 'itemTitlePlaceholder',
  URL: 'urlTitlePlaceholder',
};

export const ITEM_FORM_FIELDS = [
  {
    name: ITEM_FORM_NAME.TITLE,
    type: FORM_FIELD_TYPE.TEXT,
    label: ITEM_FORM_LABEL.TITLE,
    placeholder: ITEM_FORM_PLACEHOLDER.TITLE,
  },
  {
    name: ITEM_FORM_NAME.URL,
    type: FORM_FIELD_TYPE.TEXT,
    label: ITEM_FORM_LABEL.URL,
    placeholder: ITEM_FORM_PLACEHOLDER.URL,
  },
];

export const ITEM_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  [ITEM_FORM_NAME.TITLE]: Yup.string().required('Required').trim(),
  [ITEM_FORM_NAME.URL]: Yup.string().url().required('Required').trim(),
});
