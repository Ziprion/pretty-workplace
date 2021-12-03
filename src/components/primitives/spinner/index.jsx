import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: ${({ theme }) => `6px solid ${theme.colors.secondary1}`};
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s infinite;
`;
