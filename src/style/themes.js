const defaultOffset = 8;

const fontSize = {
  default: '16px',
  medium: '14px',
  small: '12.8px',
  extraSmall: '8px',
};

const lineHeight = {
  default: '24px',
  medium: '21px',
  small: '19.2px',
  extraSmall: '14px',
};

const headingFontSize = {
  h1: '40px',
  h2: '32px',
  h3: '28px',
  h4: '24px',
  h5: '20px',
  h6: '16px',
};

const headingLineHeight = {
  h1: '46.88px',
  h2: '37.5px',
  h3: '32.81px',
  h4: '28.13px',
  h5: '23.44px',
  h6: '18.75px',
};

const fontWeight = {
  normal: 400,
  bold: 800,
};

const breakpoints = {
  tablet: '840px',
};

const borderRadius = {
  small: '5px',
  normal: '10px',
  large: '15px',
  extraLarge: '20px',
};

const colors = {
  danger: '#DC3545',
  white: '#fff',
  light: '#f4f6f9',
  semiGray: '#f8f7fc',
  gray: '#ccc',
  dark: '#343A40',
  purple: '#170a4b',
  lightPurple: '#c0beff',
  semiPurple: '#474063',
  disabled1: '#d2d5db',
  disabled2: '#6c7589',
};

const headerHeight = '73px';
const messageFormHeight = '73px';

const defaultTheme = {
  offset: (n) => `${n * defaultOffset}px`,
  fontSize,
  lineHeight,
  headingFontSize,
  headingLineHeight,
  fontWeight,
  breakpoints,
  borderRadius,
  colors,
  headerHeight,
  messageFormHeight,
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...colors,
    primary: colors.purple,
    primary2: colors.lightPurple,
    primary3: colors.semiPurple,
    secondary: colors.white,
    secondary2: colors.light,
    additional: colors.semiGray,
    additional2: colors.gray,
    additional3: colors.dark,
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...colors,
    primary: colors.purple,
    primary2: colors.lightPurple,
    primary3: colors.semiPurple,
    secondary: colors.white,
    secondary2: colors.light,
    additional: colors.semiGray,
    additional2: colors.gray,
    additional3: colors.dark,
  },
};
