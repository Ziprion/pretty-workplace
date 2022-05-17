import styled from 'styled-components';

export const Input = styled.input`
  width: ${({ width = 'max-content' }) => width};
  min-width: 250px;
  padding: ${({ theme }) => `${theme.offset(1)} ${theme.offset(2)}`};
  color: ${({ theme }) => theme.colors.additional1};
  background: ${({ theme }) => theme.colors.additional2};
  border: 1px solid  ${({ isInvalid, theme }) => (isInvalid ? `${theme.colors.danger}` : `${theme.colors.secondary1}`)};
  border-radius: ${({ theme }) => theme.borderRadius};
  user-select: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary2};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.secondary2};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled1};
    border: 1px solid ${({ theme }) => theme.colors.disabled1};
    cursor: not-allowed;

    &::placeholder {
      color: ${({ theme }) => theme.colors.disabled2};
      opacity: 1;
    }
  }
`;
