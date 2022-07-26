import React, { memo, useCallback } from 'react';
import ReactImageFallback from 'react-image-fallback';

import { ItemMenuConnector } from '@connectors';

import {
  Icon, Link, Menu, Text, Wrapper,
} from './parts';

const Body = memo(({ title, url, pathToIcon }) => (
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
));

export const Item = memo(({
  id, title, url, boardId, pathToIcon,
}) => {
  const onCopyCallback = useCallback(async () => {
    await navigator.clipboard.writeText(url);
  }, [ url ]);

  return (
    <Wrapper>
      <Body
        pathToIcon={pathToIcon}
        title={title}
        url={url}
      />
      <Menu>
        <ItemMenuConnector
          boardId={boardId}
          id={id}
          title={title}
          url={url}
          onCopyCallback={onCopyCallback}
        />
      </Menu>
    </Wrapper>
  );
});
