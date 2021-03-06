import React from 'react';
import { useFormik } from 'formik';

import { Form, Input } from '@components';
import { l } from '@utils';

export const LoginForm = ({
  clearRequestError,
  requestError,
  onSubmit,
  validationSchema,
  initialValues,
  fields,
  isLoading,
  additional: {
    additionalMessage, linkTo, linkText, submitText,
  },
}) => {
  const {
    resetForm, handleChange, handleSubmit, errors, values, touched, isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit,
  });

  const isDisabled = isSubmitting || isLoading;

  const onLinkClick = () => {
    resetForm();
    clearRequestError();
  };

  const onChange = (e) => {
    handleChange(e);
    clearRequestError();
  };

  return (
    <Form.Wrapper onSubmit={handleSubmit}>
      {fields.map(({
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
      <Form.Space />
      <Form.Button
        disabled={isDisabled}
        type="submit"
        width="100%"
      >
        {l(submitText)}
      </Form.Button>
      <Form.Additional>
        {`${l(additionalMessage)} `}
        <Form.Link to={linkTo} onClick={onLinkClick}>{l(linkText)}</Form.Link>
      </Form.Additional>
    </Form.Wrapper>
  );
};
