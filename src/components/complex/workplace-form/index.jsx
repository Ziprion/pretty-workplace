import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { Form, Input } from '@components';
import { WORKPLACE_FORM_FIELD_NAME, WORKPLACE_FORM_FIELDS, WORKPLACE_FORM_VALIDATION_SCHEMA } from '@constants';
import { l } from '@utils';

export const WorkplaceForm = ({
  requestError,
  clearRequestError,
  onOk,
  onCancel,
  isLoading,
  initialTitle = '',
  onOkText = 'okModalButtonText',
  onCancelText = 'cancelModalButtonText',
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
          <Form.Feedback>{l(touched[name] && errors[name])}</Form.Feedback>
        </Form.Item>
      ))}
      <Form.Feedback>{l(requestError?.message)}</Form.Feedback>
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
