import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.offset(2)} ${theme.offset(5)}`};
`;
