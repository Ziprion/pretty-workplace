import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: ${({ isExpanded, itemCount }) => (isExpanded ? `${itemCount * 46}px` : 0)};
  overflow-y: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'visible')};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
  transition: max-height 0.2s linear;
`;

export const EmptyWrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => `${theme.offset(1.5)} ${theme.offset(2)}`};
  text-align: center;
  background: ${({ theme }) => theme.colors.additional2};
  border-top: ${({ theme }) => `1px solid ${theme.colors.primary3}`};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;
