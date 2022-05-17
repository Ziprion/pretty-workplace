import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.additional2};
  border-top: ${({ theme }) => `1px solid ${theme.colors.primary3}`};

  :hover {
    background: ${({ theme }) => theme.colors.primary3};
  }
`;

export const Link = styled.a`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.offset(1.5)} ${theme.offset(2)}`};
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.offset(2)};
  display: flex;
  align-items: center;
  height: 100%;
`;
