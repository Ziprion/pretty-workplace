import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    padding: ${theme.offset(1)} ${theme.offset(3)};
  `}
`;

export const Boards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 ${theme.offset(2)};
  `}
`;
