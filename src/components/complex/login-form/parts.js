import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

export const Space = styled.div`
  height: ${({ theme }) => theme.offset(2)};
`;

export const Additional = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.offset(4)};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
  `}
`;

export const Link = styled(RouterLink)`
  ${({ theme }) => css`
    color: ${theme.colors.primary1};
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.primary2};
    }
  `}
`;
