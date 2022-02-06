import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({
    theme, width, isSecondary,
  }) => css`
    width: ${width || 'max-content'};
    height: max-content;
    padding: ${theme.offset(0.75)} ${theme.offset(2)};
    background: ${isSecondary ? theme.colors.additional2 : theme.colors.primary1};
    border: 1px solid ${theme.colors.primary1};
    border-radius: ${theme.borderRadius};
    color: ${isSecondary ? theme.colors.primary1 : theme.colors.additional2};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${isSecondary ? theme.colors.primary2 : theme.colors.additional2};
      background: ${isSecondary ? theme.colors.additional2 : theme.colors.primary2};
      border: 1px solid ${theme.colors.primary2};
    }

    &:disabled {
      color: ${theme.colors.disabled2};
      background: ${theme.colors.disabled1};
      border: 1px solid ${theme.colors.disabled1};
      cursor: not-allowed;
    }
  `}
`;
