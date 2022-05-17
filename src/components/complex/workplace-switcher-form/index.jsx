import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import {
  ArrowDownIcon, Form, Option, Select, SelectIcon,
} from '@components';

export const WorkplaceSwitcherForm = ({
  requestError,
  clearRequestError,
  onOk,
  onCancel,
  isLoading,
  workplaces,
  activeWorkplaceId,
}) => {
  const name = 'workplaceId';

  const {
    handleChange, resetForm, handleSubmit, isSubmitting, errors, touched, values,
  } = useFormik({
    initialValues: {
      [name]: activeWorkplaceId,
    },
    onSubmit: onOk,
  });

  const isDisabled = isSubmitting || isLoading;
  const isSameId = activeWorkplaceId === Number(values[name]);

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
      <Form.Item>
        <Form.Label htmlFor={name}>select workplace</Form.Label>
        <Select
          disabled={isDisabled}
          id={name}
          name={name}
          value={values[name]}
          autoFocus
          onChange={onChange}
        >
          {workplaces.map(({ id, title }) => (
            <Option key={id} label={title} value={id} />
          ))}
        </Select>
        <SelectIcon isDisabled={isDisabled}>
          <ArrowDownIcon />
        </SelectIcon>
        <Form.Feedback>{touched[name] && errors[name]}</Form.Feedback>
      </Form.Item>
      <Form.Feedback>{requestError?.status}</Form.Feedback>
      <Form.ButtonGroup>
        <Form.Button
          disabled={isDisabled}
          type="button"
          isSecondary
          onClick={onCancel}
        >
          cancel
        </Form.Button>
        <Form.Button disabled={isDisabled || isSameId} type="submit">
          change
        </Form.Button>
      </Form.ButtonGroup>
    </Form.Wrapper>
  );
};
