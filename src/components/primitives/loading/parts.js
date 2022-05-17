import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Spinner = styled.div`
  width: ${({ theme, size = 'medium' }) => theme.spinner[size].width};
  height: ${({ theme, size = 'medium' }) => theme.spinner[size].height};
  border: ${({ theme, size = 'medium' }) => `${theme.spinner[size].borderSize} solid ${theme.colors.secondary1}`};
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s infinite;
`;
