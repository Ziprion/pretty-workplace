import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

import { Input, Modal } from '@components';
import {
  BOARD_FORM_FIELD_NAME,
  BOARD_FORM_FIELDS,
  BOARD_FORM_INITIAL_VALUES,
  BOARD_FORM_VALIDATION_SCHEMA,
} from '@constants';

import {
  Feedback,
  Form,
  FormButton,
  FormButtonGroup,
  FormItem,
  Label,
} from './parts';

const errorsMessage = {
  400: 'Bad request',
  401: 'Not user',
  408: 'Password must be equal',
  409: 'username is invalid',
};

export const BoardModal = ({
  error, clearError, isShow, onOk, onCancel, isLoading,
}) => {
  const inputRef = useRef(null);

  const formik = useFormik({
    initialValues: BOARD_FORM_INITIAL_VALUES,
    validationSchema: BOARD_FORM_VALIDATION_SCHEMA,
    validateOnBlur: false,
    onSubmit: onOk,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    clearError();
  };

  useEffect(() => {
    formik.resetForm();
    setTimeout(() => isShow && inputRef?.current?.focus());
  }, [ isShow ]);

  const isDisabled = formik.isSubmitting || isLoading;

  return (
    <Modal
      title="Add new board"
      isShow={isShow}
      disabled={isDisabled}
      onCancel={onCancel}
    >
      <Form onSubmit={formik.handleSubmit}>
        {BOARD_FORM_FIELDS.map(({
          name, type, label, placeholder,
        }) => (
          <FormItem key={name}>
            <Label htmlFor={name}>{label}</Label>
            <Input
              ref={name === BOARD_FORM_FIELD_NAME.BOARD_TITLE ? inputRef : null}
              id={name}
              name={name}
              type={type}
              onChange={handleChange}
              value={formik.values[name]}
              isInvalid={formik.errors[name] && formik.touched[name]}
              disabled={isDisabled}
              placeholder={placeholder}
              width="100%"
            />
            <Feedback>{formik.touched[name] ? formik.errors[name] : ''}</Feedback>
          </FormItem>
        ))}
        <Feedback>{errorsMessage[error?.status]}</Feedback>
        <FormButtonGroup>
          <FormButton
            type="button"
            onClick={onCancel}
            disabled={isDisabled}
            isSecondary
          >
            cancel
          </FormButton>
          <FormButton type="submit" disabled={isDisabled}>add</FormButton>
        </FormButtonGroup>
      </Form>
    </Modal>
  );
};
