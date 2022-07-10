import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0.5;
  }

  to {
    background: #005ba1;
    transform: scale(1);
    opacity: 0.75;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  margin: ${({ theme }) => theme.offset(1)};
  background: ${({ theme }) => theme.colors.additional2};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow:
    0 2px 4px 0 #64748b1a,
    0 1px 1px 0 #64748b0f;
  ${({ isFade }) => isFade && css`
    animation: ${fadeIn} 1.5s ease 1
  `}
  ${({ isDragging }) => isDragging && css`
    opacity: 0.4;
  `}
`;

export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.offset(2)};
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => `${theme.offset(1)} ${theme.offset(2)}`};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;

export const ToggleIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.2s ease;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  flex-grow: 1;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: 'RobotoBold', sans-serif;
  line-height: ${({ theme }) => theme.lineHeight.large};
  text-overflow: ellipsis;
`;

export const ActionBar = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;
