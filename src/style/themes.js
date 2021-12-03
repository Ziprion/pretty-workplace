const defaultOffset = 8;

const fontSize = {
  large: '20px',
  default: '16px',
  medium: '14px',
  small: '12px',
  xSmall: '10px',
  xxSmall: '8px',
};

const lineHeight = {
  large: '30px',
  default: '24px',
  medium: '21px',
  small: '18px',
  xSmall: '15px',
  xxSmall: '12px',
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
  h1: '60px',
  h2: '48px',
  h3: '42px',
  h4: '36px',
  h5: '30px',
  h6: '24px',
};

const borderRadius = {
  medium: '10px',
  small: '5px',
};

const zIndex = {
  below: 0,
  default: 1,
  above: 2,
  modal: 9,
};

const logo = {
  size: {
    small: '32px',
  },
};

const commonColors = {
  danger: '#dc3545',
  disabled1: '#dde1f6 ',
  disabled2: '#6c7589',
  white: '#ffffff',
};

const colors = {
  white: '#ffffff',
  blue: '#2f49d1',
  darkBlue: '#152da7',
  blueGray: '#f2f6ff',
  dark: '#343a40',
  gray: '#b9b9b9',
};

const defaultTheme = {
  offset: (n) => `${n * defaultOffset}px`,
  fontSize,
  lineHeight,
  headingFontSize,
  headingLineHeight,
  borderRadius,
  zIndex,
  logo,
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...commonColors,
    primary1: colors.blue,
    primary2: colors.darkBlue,
    secondary1: colors.gray,
    secondary2: colors.blueGray,
    additional1: colors.dark,
    additional2: colors.white,
  },
};

export const darkTheme = lightTheme;
