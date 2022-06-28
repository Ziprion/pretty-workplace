import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.offset(3)};
`;

export const Boards = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.offset(2)} ${theme.offset(2)}`};
`;

export const BoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ columnWidth }) => `${columnWidth}px`};
`;

export const BoardPlateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
