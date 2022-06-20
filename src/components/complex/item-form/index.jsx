import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { Form, Input } from '@components';
import {
  FORM_EMPTY_FIELD, ITEM_FORM_FIELDS, ITEM_FORM_NAME, ITEM_FORM_VALIDATION_SCHEMA,
} from '@constants';
import { l } from '@utils';

export const ItemForm = ({
  requestError,
  clearRequestError,
  onOk,
  onCancel,
  isLoading,
  initialTitle = FORM_EMPTY_FIELD,
  initialUrl = FORM_EMPTY_FIELD,
  onOkText = 'okModalButtonText',
  onCancelText = 'cancelModalButtonText',
}) => {
  const {
    resetForm, touched, errors, values, isSubmitting, handleSubmit, handleChange,
  } = useFormik({
    initialValues: {
      [ITEM_FORM_NAME.TITLE]: initialTitle,
      [ITEM_FORM_NAME.URL]: initialUrl,
    },
    validationSchema: ITEM_FORM_VALIDATION_SCHEMA,
    validateOnBlur: false,
    onSubmit: onOk,
  });

  const isDisabled = isSubmitting || isLoading;
  const isSameTitle = initialTitle === values[ITEM_FORM_NAME.TITLE] && initialUrl === values[ITEM_FORM_NAME.URL];

  const onChange = (e) => {
    handleChange(e);
    clearRequestError();
  };

  useEffect(() => {
    clearRequestError();
    resetForm();
  }, []);

  return (
    <Form.Wrapper onSubmit={handleSubmit}>
      {ITEM_FORM_FIELDS.map(({
        name, type, label, placeholder,
      }, index) => (
        <Form.Item key={name}>
          <Form.Label htmlFor={name}>{l(label)}</Form.Label>
          <Input
            autoFocus={index === 0}
            disabled={isDisabled}
            id={name}
            isInvalid={errors[name] && touched[name]}
            name={name}
            placeholder={l(placeholder)}
            type={type}
            value={values[name]}
            width="100%"
            onChange={onChange}
          />
          <Form.Feedback>{touched[name] && errors[name]}</Form.Feedback>
        </Form.Item>
      ))}
      <Form.Feedback>{requestError?.status}</Form.Feedback>
      <Form.ButtonGroup>
        <Form.Button
          disabled={isDisabled}
          type="button"
          isSecondary
          onClick={onCancel}
        >
          {l(onCancelText)}
        </Form.Button>
        <Form.Button disabled={isDisabled || isSameTitle} type="submit">
          {l(onOkText)}
        </Form.Button>
      </Form.ButtonGroup>
    </Form.Wrapper>
  );
};
