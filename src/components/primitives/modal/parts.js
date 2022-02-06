import styled, { css, keyframes } from 'styled-components';

import { Button } from '../button';

const fadeOn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Mask = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${theme.zIndex.modal};
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeOn} 0.3s ease;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 350px;
    border-radius: ${theme.borderRadius};
    background: ${theme.colors.additional2};
    box-shadow:
      0px 10px 15px -3px #64748B1F,
      0px 4px 6px -2px #64748B0D;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    min-height: 40px;
    font-size: ${theme.fontSize.large};
    line-height: ${theme.lineHeight.large};
    padding: ${theme.offset(2)} ${theme.offset(3)} ${theme.offset(1)};
    border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
    color: ${theme.colors.additional1};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.offset(2)} ${theme.offset(2.5)};
  `}
`;

export const CloseButton = styled(Button)`
  ${({ theme }) => css`
    position: absolute;
    top: 5px;
    text-align: center;
    right: 2px;
    height: 30px;
    padding: 0;
    width: 30px;
    font-size: ${theme.fontSize.medium};
    line-height: ${theme.lineHeight.medium};
  `}
`;
