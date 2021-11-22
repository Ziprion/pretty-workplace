import { createGlobalStyle } from 'styled-components';
import RobotoFont from '../../assets/fonts/Roboto.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    src: url(${RobotoFont}) format('ttf');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    z-index: 0;
    width: 100vw;
    height: 100vh;
    color: ${({ theme }) => theme.colors.additional3};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.default};
    font-family: 'Roboto', sans-serif;
    line-height: ${({ theme }) => theme.lineHeight.default};
    letter-spacing: 0.2px;
    background: ${({ theme }) => theme.colors.additional};
  }
`;
