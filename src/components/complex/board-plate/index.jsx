import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { ItemModal } from '@components';

import {
  AddItemButton,
  AddItemPlate,
  Body,
  Link,
  Title,
  Wrapper,
} from './parts';

export const BoardPlate = ({
  id: boardId,
  title: boardTitle,
  items = [],
  deleteBoard,
  addItem,
  boardOrder,
  moveBoard,
}) => {
  const ref = useRef(null);
  const [ , drop ] = useDrop(
    () => ({
      accept: 'board',
      drop: (item) => moveBoard(item.boardOrder, boardOrder),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        position: monitor.getClientOffset(),
      }),
    }),
    [ boardOrder ],
  );

  const [ , drag ] = useDrag({
    type: 'board',
    item: { id: boardId, boardOrder },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  const [ isShowModal, setShowModal ] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [ error, setError ] = useState(null);
  const clearError = () => setError(() => null);

  return (
    <>
      <Wrapper
        ref={drag(drop(ref))}
      >
        <Title>
          {boardTitle}
          <button
            type="button"
            onClick={() => deleteBoard({ boardId })}
          >
            delete
          </button>
        </Title>
        <Body>
          {items.map(({
            id, title, url,
          }) => (
            <Link
              key={id}
              href={url}
              alt={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          ))}
          <AddItemPlate onClick={openModal}>
            <AddItemButton onClick={openModal}>+ Add new item</AddItemButton>
          </AddItemPlate>
        </Body>
      </Wrapper>
      <ItemModal
        error={error}
        clearError={clearError}
        isShow={isShowModal}
        onOk={addItem}
        onCancel={closeModal}
      />
    </>
  );
};
