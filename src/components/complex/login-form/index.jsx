import React from 'react';
import { useFormik } from 'formik';

import { Form, Input } from '@components';

export const LoginForm = ({
  clearRequestError,
  requestError,
  onSubmit,
  validationSchema,
  initialValues,
  fields,
  isLoading,
  additional: { title, linkTo, linkText },
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
      <Form.Space />
      <Form.Button
        disabled={isDisabled}
        type="submit"
        width="100%"
      >
        Submit
      </Form.Button>
      <Form.Additional>
        {title}
        <Form.Link to={linkTo} onClick={onLinkClick}>{linkText}</Form.Link>
      </Form.Additional>
    </Form.Wrapper>
  );
};
