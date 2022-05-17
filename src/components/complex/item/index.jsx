import React from 'react';

import { ItemMenuConnector } from '@connectors';

import { Link, Menu, Wrapper } from './parts';

export const Item = ({
  id, title, url, boardId,
}) => (
  <Wrapper>
    <Link
      alt={title}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
    </Link>
    <Menu>
      <ItemMenuConnector boardId={boardId} id={id} title={title} url={url} />
    </Menu>
  </Wrapper>
);
