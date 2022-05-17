import styled, { keyframes } from 'styled-components';

import { GhostButton } from '../ghost-button';

const fadeOn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${fadeOn} 0.3s ease;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 350px;
  background: ${({ theme }) => theme.colors.additional2};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow:
    0 10px 15px -3px #64748b1f,
    0 4px 6px -2px #64748b0d;
`;

export const Title = styled.div`
  min-height: 40px;
  padding: ${({ theme }) => `${theme.offset(2)} ${theme.offset(3)} ${theme.offset(1)}`};
  color: ${({ theme }) => theme.colors.additional1};
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  border-radius: ${({ theme }) => `${theme.borderRadius} ${theme.borderRadius} 0 0`};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `0 ${theme.offset(2)} ${theme.offset(2.5)}`};
`;

export const CloseButton = styled(GhostButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.additional1};
  }
`;
