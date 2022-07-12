import React, { useCallback } from 'react';
import ReactImageFallback from 'react-image-fallback';

import { ItemMenuConnector } from '@connectors';

import {
  Icon, Link, Menu, Text, Wrapper,
} from './parts';

export const Item = ({
  id, title, url, boardId, pathToIcon, placeholder, dragRef, isDragging, ...rest
}) => {
  const onCopyCallback = useCallback(async () => {
    await navigator.clipboard.writeText(url);
  }, [ url ]);

  return (
    <Wrapper ref={dragRef} isDragging={isDragging} {...rest}>
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
          onCopyCallback={onCopyCallback}
        />
      </Menu>
      {placeholder}
    </Wrapper>
  );
};
