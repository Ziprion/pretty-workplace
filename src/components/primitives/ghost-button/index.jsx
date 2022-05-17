import styled from 'styled-components';

export const GhostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = '34px' }) => height};
  padding: ${({ theme }) => theme.offset(0.75)};
  color: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.additional1 : theme.colors.primary1)};
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.3;
  transition: 0.1s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary2};
    opacity: 1;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.disabled2};
    cursor: not-allowed;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.disabled2};
      opacity: 0.3;
    }
  }
`;
