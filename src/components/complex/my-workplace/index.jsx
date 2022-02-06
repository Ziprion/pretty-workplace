import React, { useEffect, useState } from 'react';

import { BoardModal } from '@components';
import { BoardConnector } from '@connectors';
import { boardPlate } from '@style';

import {
  AddBoardButton,
  AddBoardPlate,
  BoardColumn,
  Boards,
  Title,
  Wrapper,
} from './parts';

const getCurrentColumnCount = () => Math.trunc(window.innerWidth / boardPlate.minWidth.slice(0, 3)); // move to utils

export const MyWorkplace = ({
  isShowAddBoardModal,
  openAddBoardModal,
  closeAddBoardModal,
  title,
  boards = [],
  addBoard,
  deleteBoard,
  error,
  clearError,
  isLoading,
}) => {
  const [ columnCount, setColumnCount ] = useState(null);
  const [ isShowAddBoardButton, setShowAddBoardButton ] = useState(false);
  const [ workplaceBoards, setWorkplaceBoards ] = useState([]);

  const setCurrentColumnCount = () => setColumnCount(getCurrentColumnCount);

  useEffect(() => {
    setCurrentColumnCount();
    setShowAddBoardButton(true);

    window.removeEventListener('resize', setCurrentColumnCount);
    window.addEventListener('resize', setCurrentColumnCount, false);
  }, []);

  useEffect(() => {
    if (boards.length) {
      setWorkplaceBoards(() => boards);
    }
  }, [ boards ]);

  const moveBoard = (dragOrder, hoverOrder) => {
    if (dragOrder === hoverOrder) return;

    const movedColumn = dragOrder % columnCount;
    const updatedColumn = hoverOrder % columnCount;
    const untouchedBoards = workplaceBoards
      .filter(({ boardOrder }) => boardOrder % columnCount !== movedColumn
        && boardOrder % columnCount !== updatedColumn);

    const movedColumnBoards = workplaceBoards
      .filter(({ boardOrder }) => boardOrder % columnCount === movedColumn);
    const leftMovedColumnBoards = movedColumnBoards
      .filter(({ boardOrder }) => boardOrder < dragOrder);
    const rightMovedColumnBoards = movedColumnBoards
      .filter(({ boardOrder }) => boardOrder > dragOrder)
      .map((board) => ({
        ...board,
        boardOrder: board.boardOrder - columnCount,
      }));
    const newMovedColumnBoards = movedColumn === updatedColumn ? [] : [
      ...leftMovedColumnBoards, ...rightMovedColumnBoards,
    ];

    const updatedColumnBoards = workplaceBoards
      .filter(({ boardOrder }) => boardOrder % columnCount === updatedColumn);
    const leftUpdatedColumnBoards = updatedColumnBoards
      .filter(({ boardOrder }) => boardOrder < hoverOrder);
    const rightUpdatedColumnBoards = updatedColumnBoards
      .filter(({ boardOrder }) => boardOrder >= hoverOrder && boardOrder !== dragOrder)
      .map((board) => ({
        ...board,
        boardOrder: board.boardOrder + columnCount,
      }));

    const currentBoard = workplaceBoards.find((board) => board.boardOrder === dragOrder);
    const newCurrentBoard = {
      ...currentBoard,
      boardOrder: hoverOrder,
    };

    const newUpdatedColumnBoards = [
      ...leftUpdatedColumnBoards, ...rightUpdatedColumnBoards, newCurrentBoard,
    ];

    setWorkplaceBoards(() => [
      ...untouchedBoards, ...newMovedColumnBoards, ...newUpdatedColumnBoards,
    ]);
  };

  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <Boards>
          {[ ...Array(columnCount) ].map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <BoardColumn key={index}>
              {workplaceBoards
                .filter(({ boardOrder }) => boardOrder % columnCount === index)
                .sort((a, b) => a.boardOrder - b.boardOrder)
                .map((board) => (
                  <BoardConnector
                    key={board.id}
                    column={index}
                    moveBoard={moveBoard}
                    deleteBoard={deleteBoard}
                    {...board}
                  />
                ))}
            </BoardColumn>
          ))}
        </Boards>
        {isShowAddBoardButton && (
          <AddBoardPlate>
            <AddBoardButton onClick={openAddBoardModal}>
              + Add new board
            </AddBoardButton>
          </AddBoardPlate>
        )}
      </Wrapper>
      <BoardModal
        error={error}
        clearError={clearError}
        isShow={isShowAddBoardModal}
        onOk={addBoard}
        onCancel={closeAddBoardModal}
        isLoading={isLoading}
      />
    </>
  );
};
