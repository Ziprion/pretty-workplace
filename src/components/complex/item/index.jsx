import React from 'react';
import ReactImageFallback from 'react-image-fallback';

import { ItemMenuConnector } from '@connectors';
import { getUrlIcon, l } from '@utils';

import {
  EmptyWrapper,
  Icon, Link, Menu, Wrapper,
} from './parts';

export const Item = ({
  id, title, url, boardId, isEmpty,
}) => (
  isEmpty
    ? <EmptyWrapper>{l('emptyBoard')}</EmptyWrapper>
    : (
      <Wrapper>
        <Link
          alt={title}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon>
            <ReactImageFallback
              alt={title}
              fallbackImage="/images/icons/fallback-icon.png"
              src={getUrlIcon(url)}
            />
          </Icon>
          {title}
        </Link>
        <Menu>
          <ItemMenuConnector
            boardId={boardId}
            id={id}
            title={title}
            url={url}
          />
        </Menu>
      </Wrapper>
    )
);
