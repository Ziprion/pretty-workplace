import React from 'react';
import { BoardPlate } from '@components';
import { Wrapper, Title, Boards } from './parts';

export const MyWorkplace = ({ title, boards }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Boards>
      {boards.map((board) => <BoardPlate key={board.id} {...board} />)}
    </Boards>
  </Wrapper>
);
