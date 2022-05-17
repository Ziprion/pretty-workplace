import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { Form, Input } from '@components';
import {
  FORM_EMPTY_FIELD, WORKPLACE_FORM_FIELD_NAME, WORKPLACE_FORM_FIELDS, WORKPLACE_FORM_VALIDATION_SCHEMA,
} from '@constants';

export const WorkplaceForm = ({
  requestError,
  clearRequestError,
  onOk,
  onCancel,
  isLoading,
  initialTitle = FORM_EMPTY_FIELD,
  onOkText = 'ok',
  onCancelText = 'cancel',
}) => {
  const {
    resetForm, handleSubmit, handleChange, errors, touched, values, isSubmitting,
  } = useFormik({
    initialValues: {
      [WORKPLACE_FORM_FIELD_NAME.TITLE]: initialTitle,
    },
    validationSchema: WORKPLACE_FORM_VALIDATION_SCHEMA,
    validateOnBlur: false,
    onSubmit: onOk,
  });

  const isDisabled = isSubmitting || isLoading;
  const isSameTitle = initialTitle === values[WORKPLACE_FORM_FIELD_NAME.TITLE];

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
      {WORKPLACE_FORM_FIELDS.map(({
        name, type, label, placeholder,
      }, index) => (
        <Form.Item key={name}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Input
            autoFocus={index === 0}
            disabled={isDisabled}
            id={name}
            isInvalid={errors[name] && touched[name]}
            name={name}
            placeholder={placeholder}
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
          {onCancelText}
        </Form.Button>
        <Form.Button disabled={isDisabled || isSameTitle} type="submit">
          {onOkText}
        </Form.Button>
      </Form.ButtonGroup>
    </Form.Wrapper>
  );
};
