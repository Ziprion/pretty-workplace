import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyWrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => `${theme.offset(1.5)} ${theme.offset(2)}`};
  text-align: center;
  background: ${({ theme }) => theme.colors.additional2};
  border-top: ${({ theme }) => `1px solid ${theme.colors.primary3}`};
  border-radius: ${({ theme }) => `0 0 ${theme.borderRadius} ${theme.borderRadius}`};
`;
