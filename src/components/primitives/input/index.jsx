import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    padding: ${theme.offset(1)};
    border: 1px solid  ${(props) => (props.isInvalid ? `${theme.colors.danger}` : `${theme.colors.additional2}`)};
    border-radius: ${theme.borderRadius.normal};
    color: ${theme.colors.additional3};

    &:focus {
      border: 1px solid ${theme.colors.additional3};
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
