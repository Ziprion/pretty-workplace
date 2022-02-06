import styled, { css } from 'styled-components';

import { Button } from '@components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin: ${({ theme }) => `${theme.offset(1)} 0`};
  text-transform: capitalize;
`;

export const Feedback = styled.div`
  ${({ theme }) => css`
    height: ${theme.lineHeight.small};
    color: ${theme.colors.danger};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
  `}
`;

export const FormItem = styled.div`
  width: 100%;
  text-align: center;
`;

export const FormButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${({ theme }) => theme.offset(1)};
`;

export const FormButton = styled(Button)`
  ${({ theme }) => css`
    width: 80px;
    margin-left: ${theme.offset(2)}; 
    text-transform: capitalize;
  `}
`;
