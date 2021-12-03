import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme, isInvalid, width }) => css`
    width: ${width || 'max-content'};
    min-width: 250px;
    padding: ${theme.offset(1)} ${theme.offset(2)};
    border: 1px solid  ${isInvalid ? `${theme.colors.danger}` : `${theme.colors.secondary2}`};
    border-radius: ${theme.borderRadius.small};
    color: ${theme.colors.additional1};
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
    background: ${theme.colors.secondary2};
    user-select: auto;
    box-shadow: 0px 0px 2px 0px ${theme.colors.secondary1};

    &:focus {
      border: 1px solid ${theme.colors.secondary1};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.disabled1};
      border: 1px solid ${theme.colors.disabled1};
      opacity: 0.4;
    }

    &::placeholder {
      color: ${theme.colors.secondary1};
    }
  `}
`;
