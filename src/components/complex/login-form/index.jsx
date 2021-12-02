import { Button, Input } from 'components';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import { ROUTES, FIELD_NAME } from 'constants';
import {
  Additional, Feedback, Form, FormItem, Label, Link,
} from './parts';

const errorsMessage = {
  400: 'Bad request',
  401: 'Not user',
  408: 'Password must be equal',
  409: 'username is invalid',
};

export const LoginForm = ({
  error, clearError, onSubmit, validationSchema, initialValues, fields, isSignup,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit,
  });

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

  return (
    <Form onSubmit={formik.handleSubmit}>
      {fields.map(({ name, type, label }) => (
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
          />
          <Feedback>{formik.touched[name] ? formik.errors[name] : ''}</Feedback>
        </FormItem>
      ))}
      <Feedback>{errorsMessage[error?.status]}</Feedback>
      <Button type="submit" disabled={formik.isSubmitting}>Submit</Button>
      <Additional>
        {isSignup ? (
          <>
            {' '}
            Do you have account?
            {' '}
            <Link to={ROUTES.SIGNIN} onClick={handleSwitch}>Sign In</Link>
          </>
        ) : (
          <>
            {' '}
            Do you have not account?
            {' '}
            <Link to={ROUTES.SIGNUP} onClick={handleSwitch}>Sign Up</Link>
          </>
        )}
      </Additional>
    </Form>
  );
};
