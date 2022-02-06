import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

import { Button, Input } from '@components';
import { FIELD_NAME } from '@constants';

import {
  Additional,
  Feedback,
  Form,
  FormItem,
  Label,
  Link,
  Space,
} from './parts';

const errorsMessage = {
  400: 'Bad request',
  401: 'Not user',
  408: 'Password must be equal',
  409: 'username is invalid',
};

export const LoginForm = ({
  error,
  clearError,
  onSubmit,
  validationSchema,
  initialValues,
  fields,
  additional,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit,
  });

  const {
    title, linkTo, linkText,
  } = additional;

  const handleSwitch = () => {
    formik.resetForm();
    clearError();
  };

  const handleChange = (e) => {
    formik.handleChange(e);
    clearError();
  };

  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => inputRef?.current?.focus());
  }, []);
  console.log('asd');
  return (
    <Form onSubmit={formik.handleSubmit}>
      {fields.map(({
        name, type, label, placeholder,
      }) => (
        <FormItem key={name}>
          <Label htmlFor={name}>{label}</Label>
          <Input
            ref={name === FIELD_NAME.EMAIL ? inputRef : null}
            id={name}
            name={name}
            type={type}
            onChange={handleChange}
            value={formik.values[name]}
            isInvalid={formik.errors[name] && formik.touched[name]}
            disabled={formik.isSubmitting}
            placeholder={placeholder}
            width="100%"
          />
          <Feedback>{formik.touched[name] ? formik.errors[name] : ''}</Feedback>
        </FormItem>
      ))}
      <Feedback>{errorsMessage[error?.status]}</Feedback>
      <Space />
      <Button
        type="submit"
        disabled={formik.isSubmitting}
        width="100%"
      >
        Submit
      </Button>
      <Additional>
        {title}
        <Link to={linkTo} onClick={handleSwitch}>{linkText}</Link>
      </Additional>
    </Form>
  );
};
