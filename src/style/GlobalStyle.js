import { createGlobalStyle } from 'styled-components';

import Robotottf from '../../assets/fonts/roboto.ttf';
import Robotowoff from '../../assets/fonts/roboto.woff';
import Robotowoff2 from '../../assets/fonts/roboto.woff2';
import RobotoBoldttf from '../../assets/fonts/roboto-bold.ttf';
import RobotoBoldwoff from '../../assets/fonts/roboto-bold.woff';
import RobotoBoldwoff2 from '../../assets/fonts/roboto-bold.woff2';
import RobotoThinttf from '../../assets/fonts/roboto-thin.ttf';
import RobotoThinwoff from '../../assets/fonts/roboto-thin.woff';
import RobotoThinwoff2 from '../../assets/fonts/roboto-thin.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    src:
      url(${Robotottf}) format('ttf'),
      url(${Robotowoff}) format('woff'),
      url(${Robotowoff2}) format('woff2');
  }

  @font-face {
    font-family: 'RobotoThin';
    font-style: normal;
    src:
      url(${RobotoThinttf}) format('ttf'),
      url(${RobotoThinwoff}) format('woff'),
      url(${RobotoThinwoff2}) format('woff2');
  }

  @font-face {
    font-family: 'RobotoBold';
    font-style: normal;
    src:
      url(${RobotoBoldttf}) format('ttf'),
      url(${RobotoBoldwoff}) format('woff'),
      url(${RobotoBoldwoff2}) format('woff2');
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

  body {
    z-index: ${({ theme }) => theme.zIndex.default};
    width: 100vw;
    min-width: 375px;
    max-width: 100vw;
    height: 100vh;
    min-height: 750px;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.additional1};
    font-size: ${({ theme }) => theme.fontSize.default};
    font-family: 'Roboto', sans-serif;
    line-height: ${({ theme }) => theme.lineHeight.default};
    letter-spacing: 0.2px;
    background: ${({ theme }) => theme.colors.additional3};
  }

  main {
    height: 100%;
  }
`;
