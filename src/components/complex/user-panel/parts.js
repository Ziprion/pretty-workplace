import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.offset(1)};
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;
