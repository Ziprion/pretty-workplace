import React, { useEffect, useState } from 'react';

import { API_EFFECTS, useApiEffect } from '@api-effects';
import { MyWorkplace } from '@components';

export const MyWorkplaceConnector = ({
  id,
  onAddBoard,
  onDeleteBoard,
  ...workplaceData
}) => {
  const [ isShowAddBoardModal, setShowAddBoardModal ] = useState(false);
  const openAddBoardModal = () => setShowAddBoardModal(true);
  const closeAddBoardModal = () => setShowAddBoardModal(false);

  const [ error, setError ] = useState(null);
  const clearError = () => setError(() => null);

  const {
    run: addBoard,
    data: addedBoard,
    loading: addingLoading,
    error: addingError,
  } = useApiEffect(API_EFFECTS.BOARDS.ADD);

  const {
    run: deleteBoard,
    data: deletedBoardId,
    loading: deletingBoard,
    error: deletingError,
  } = useApiEffect(API_EFFECTS.BOARDS.DELETE);

  useEffect(() => {
    if (addedBoard) {
      onAddBoard(addedBoard);
      closeAddBoardModal();
    }
  }, [ addedBoard ]);

  useEffect(() => addingError && setError(() => addingError), [ addingError ]);
  useEffect(() => deletingError && setError(() => deletingError), [ deletingError ]);
  useEffect(() => deletedBoardId && onDeleteBoard(deletedBoardId), [ deletedBoardId ]);

  const extendedAddBoard = (data) => addBoard({
    workplaceId: id,
    boardOrder: workplaceData?.boards?.length,
    ...data,
  });

  const extendedDeleteBoard = (data) => deleteBoard({
    workplaceId: id,
    ...data,
  });

  return (
    <MyWorkplace
      addBoard={extendedAddBoard}
      deleteBoard={extendedDeleteBoard}
      error={error}
      clearError={clearError}
      isShowAddBoardModal={isShowAddBoardModal}
      openAddBoardModal={openAddBoardModal}
      closeAddBoardModal={closeAddBoardModal}
      isLoading={addingLoading || deletingBoard}
      {...workplaceData}
    />
  );
};
