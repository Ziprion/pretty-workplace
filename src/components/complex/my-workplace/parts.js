import styled, { css } from 'styled-components';

import { Button } from '@components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${theme.offset(3)};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    padding: ${theme.offset(1)} ${theme.offset(3)};
    align-self: flex-start;
  `}
`;

export const Boards = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 ${theme.offset(2)};
    display: flex;
  `}
`;

export const AddBoardButton = styled(Button)`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    background: ${theme.colors.additional3};
    padding: 0;
    border: 2px dashed ${theme.colors.secondary1};
    color: ${theme.colors.secondary1};
    
    :hover,
    :focus {
      color: ${theme.colors.primary2};
      background: ${theme.colors.additional3};
      border: 2px dashed ${theme.colors.primary2};
    }
  `}
`;

export const AddBoardPlate = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.offset(1)} ${theme.offset(2)};
    height: ${theme.boardPlate.addButtonHeight};
    width: ${theme.boardPlate.addButtonWidth};
  `}
`;

export const BoardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
