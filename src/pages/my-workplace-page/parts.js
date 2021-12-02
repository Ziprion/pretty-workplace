import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: 1fr;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
`;

export const MainWrapper = styled.div`
  grid-area: main;
`;

export const FooterWrapper = styled.div`
  grid-area: footer;
`;
