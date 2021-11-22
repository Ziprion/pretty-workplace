import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.offset(1)} ${theme.offset(2)};
    text-align: center;
    background: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.additional2};
    border-radius: ${theme.borderRadius.normal};
    color: ${theme.colors.additional3};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.additional2};
    }

    &:disabled {
      color: ${theme.colors.disabled1};
      background: ${theme.colors.disabled2};
      cursor: not-allowed;
    }
  `}
`;
