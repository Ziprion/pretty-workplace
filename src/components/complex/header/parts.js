import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.offset(1)} ${theme.offset(3)};
    background: ${theme.colors.additional2};
    box-shadow:
      0px 4px 6px 0px #64748B1F,
      0px 2px 4px 0px #1F29370F;
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.offset(1)};
  text-transform: capitalize;
`;
