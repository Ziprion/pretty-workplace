import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  height: 100%;
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Main = styled.label`
  grid-area: main;
`;
