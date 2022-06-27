import React from 'react';
import ReactImageFallback from 'react-image-fallback';

import { ItemMenuConnector } from '@connectors';
import { l } from '@utils';

import {
  EmptyWrapper, Icon, Link, Menu, Text, Wrapper,
} from './parts';

export const Item = ({
  id, title, url, boardId, pathToIcon, isEmpty,
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
              fallbackImage="/images/favicons/fallback-icon.ico"
              initialImage={pathToIcon}
              src={pathToIcon}
            />
          </Icon>
          <Text>{title}</Text>
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
