import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

import { Input, Modal } from '@components';
import {
  ITEM_FORM_FIELD_NAME,
  ITEM_FORM_FIELDS,
  ITEM_FORM_INITIAL_VALUES,
  ITEM_FORM_VALIDATION_SCHEMA,
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

export const ItemModal = ({
  error, clearError, isShow, onOk, onCancel,
}) => {
  const formik = useFormik({
    initialValues: ITEM_FORM_INITIAL_VALUES,
    validationSchema: ITEM_FORM_VALIDATION_SCHEMA,
    validateOnBlur: false,
    onSubmit: onOk,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    clearError();
  };

  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => isShow && inputRef?.current?.focus());
  }, [ isShow ]);

  const isDisabled = formik.isSubmitting; // add disabled with connector

  return (
    <Modal
      title="Add item"
      isShow={isShow}
      onCancel={onCancel}
      disabled={isDisabled}
    >
      <Form onSubmit={formik.handleSubmit}>
        {ITEM_FORM_FIELDS.map(({
          name, type, label, placeholder,
        }) => (
          <FormItem key={name}>
            <Label htmlFor={name}>{label}</Label>
            <Input
              ref={name === ITEM_FORM_FIELD_NAME.TITLE ? inputRef : null}
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
