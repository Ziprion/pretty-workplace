import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Logo, UserPanel } from '@components';
import { WithUserHOC } from '@hocs';
import { collapseAllBoards } from '@redux-store';

import { Wrapper } from './parts';

export const Header = () => {
  const dispatch = useDispatch();

  const onClickLogo = useCallback(() => {
    dispatch(collapseAllBoards());
  }, []);

  return (
    <Wrapper>
      <Logo onClick={onClickLogo} />
      <WithUserHOC Component={UserPanel} />
    </Wrapper>
  );
};
