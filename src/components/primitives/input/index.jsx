import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({
    theme, isInvalid, width,
  }) => css`
    width: ${width || 'max-content'};
    min-width: 250px;
    padding: ${theme.offset(1)} ${theme.offset(2)};
    border: 1px solid  ${isInvalid ? `${theme.colors.danger}` : `${theme.colors.secondary1}`};
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.additional1};
    background: ${theme.colors.additional2};
    user-select: auto;

    &::placeholder {
      color: ${theme.colors.secondary2};
    }

    &:focus {
      border: 1px solid ${theme.colors.secondary2};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.disabled1};
      border: 1px solid ${theme.colors.disabled1};

      &::placeholder {
        color: ${theme.colors.disabled2};
        opacity: 1;
      }
    }
  `}
`;
