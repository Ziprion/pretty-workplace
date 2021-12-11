import React from 'react';
import {
  Wrapper, Title, Body, Link, AddButton,
} from './parts';

export const BoardPlate = ({ title: boardTitle, items }) => (
  <Wrapper>
    <Title>{boardTitle}</Title>
    <Body>
      {items.map(({ id, title, url }) => (
        <Link key={id} href={url} alt={title}>
          {title}
        </Link>
      ))}
    </Body>
    <AddButton>add</AddButton>
  </Wrapper>
);
