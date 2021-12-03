import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary2};
`;
