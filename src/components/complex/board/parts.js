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
  ${({ isNew }) => isNew && css`
    animation: ${fadeIn} 1.5s ease 1
  `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => `${theme.offset(1)} ${theme.offset(2)}`};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: 'RobotoBold', sans-serif;
  line-height: ${({ theme }) => theme.lineHeight.large};
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: ${({ isExpanded, itemCount }) => (isExpanded ? `${itemCount * 46}px` : 0)};
  overflow-y: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'visible')};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
  transition: max-height 0.2s linear;
`;
