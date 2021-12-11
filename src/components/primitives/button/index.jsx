import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, width }) => css`
    width: ${width || 'max-content'};
    padding: ${theme.offset(1)} ${theme.offset(2)};
    text-align: center;
    background: ${theme.colors.primary1};
    border: 1px solid ${theme.colors.primary1};
    border-radius: ${theme.borderRadius.small};
    color: ${theme.colors.additional2};
    cursor: pointer;
    font-size: ${theme.fontSize.default};
    line-height: ${theme.lineHeight.medium};

    &:hover,
    &:focus {
      background: ${theme.colors.primary2};
      border: 1px solid ${theme.colors.primary2};
    }

    &:disabled {
      background: ${theme.colors.disabled1};
      border: 1px solid ${theme.colors.disabled1};
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`;
