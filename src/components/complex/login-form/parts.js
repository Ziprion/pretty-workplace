import styled, { css } from 'styled-components';
import { Link as DefaultLink } from 'components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
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
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.small};
  `}
`;

export const FormItem = styled.div`
  text-align: center;
`;

export const Additional = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    line-height: ${theme.lineHeight.small};
  `}
`;

export const Link = styled(DefaultLink)`
  &:hover {
    text-decoration: underline;
  }
`;
