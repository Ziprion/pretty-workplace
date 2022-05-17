import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: ${({ theme }) => theme.offset(0.5)};
  align-items: center;
  justify-content: center;
  width: ${({ width = 'auto' }) => width};
  min-width: ${({ width = '80px' }) => width};
  height: ${({ height = '34px' }) => height};
  padding: ${({ theme }) => `${theme.offset(0.75)} ${theme.offset(2)}`};
  color: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.primary1 : theme.colors.additional2)};
  font-size: ${({ theme, textSize = 'default' }) => theme.fontSize[textSize]};
  line-height: ${({ theme, textSize = 'default' }) => theme.lineHeight[textSize]};
  text-transform: capitalize;
  background: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.additional2 : theme.colors.primary1)};
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: 0.1s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    color: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.primary2 : theme.colors.additional2)};
    background: ${({ theme, isSecondary }) => (isSecondary ? theme.colors.additional2 : theme.colors.primary2)};
    border: 1px solid ${({ theme }) => theme.colors.primary2};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.disabled2};
    background: ${({ theme }) => theme.colors.disabled1};
    border: 1px solid ${({ theme }) => theme.colors.disabled1};
    cursor: not-allowed;
  }
`;
