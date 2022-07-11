import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    src:
      url('/fonts/roboto.woff2') format('woff2'),
      url('/fonts/roboto.woff') format('woff'),
      url('/fonts/roboto.ttf') format('ttf');
  }

  @font-face {
    font-family: 'RobotoThin';
    font-style: normal;
    src:
      url('/fonts/roboto-thin.woff2') format('woff2'),
      url('/fonts/roboto-thin.woff') format('woff'),
      url('/fonts/roboto-thin.ttf') format('ttf');
  }

  @font-face {
    font-family: 'RobotoBold';
    font-style: normal;
    src:
      url('/fonts/roboto-bold.woff2') format('woff2'),
      url('/fonts/roboto-bold.woff') format('woff'),
      url('/fonts/roboto-bold.ttf') format('ttf');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: none;
    list-style-type: none;
    user-select: none;
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  body {
    z-index: ${({ theme }) => theme.zIndex.default};
    width: 100%;
    min-width: 375px;
    max-width: 100%;
    height: 100vh;
    min-height: 750px;
    color: ${({ theme }) => theme.colors.additional1};
    font-size: ${({ theme }) => theme.fontSize.default};
    font-family: 'Roboto', sans-serif;
    line-height: ${({ theme }) => theme.lineHeight.default};
    letter-spacing: 0.2px;
    background: ${({ theme }) => theme.colors.additional3};
  }

  main {
    height: 100%;
    min-height: 100vh;
  }
`;
