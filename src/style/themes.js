const defaultOffset = 8;

const fontSize = {
  large: '16px',
  default: '14px',
  medium: '12px',
  small: '10px',
};

const lineHeight = {
  large: '24px',
  default: '21px',
  medium: '18px',
  small: '15px',
};

const headingFontSize = {
  h1: '56px',
  h2: '48px',
  h3: '36px',
  h4: '32px',
  h5: '24px',
  h6: '18px',
};

const headingLineHeight = {
  h1: '77px',
  h2: '66px',
  h3: '50px',
  h4: '44px',
  h5: '33px',
  h6: '25px',
};

const borderRadius = '4px';

const zIndex = {
  default: 1,
  above: 2,
  modal: 9,
};

const logo = {
  small:
  {
    width: '24px',
    height: '24px',
  },
};

const avatar = {
  small:
  {
    width: '32px',
    height: '32px',
  },
};

const spinner = {
  small: {
    width: '20px',
    height: '20px',
    borderSize: '3px',
  },
  medium: {
    width: '40px',
    height: '40px',
    borderSize: '6px',
  },
};

const dropdownPosition = {
  right: {
    top: '5px',
    left: 0,
    right: 'auto',
  },
  left: {
    top: '5px',
    left: 'auto',
    right: 0,
  },
};

export const boardPlate = {
  minWidth: '320px',
  addButtonHeight: '110px',
  addButtonWidth: '200px',
};

const commonColors = {
  danger: '#dc3545',
  disabled1: '#e6e7e9',
  disabled2: '#37415142',
};

const colors = {
  white: '#ffffff',
  dark: '#111827',
  blue: '#0078d4',
  darkBlue: '#005ba1',
  gray: '#D1D5DB',
  lightGray: '#f9fafb',
  semiGray: '#6B7280',
  darkGray: '#f3f4f6',
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
  avatar,
  boardPlate,
  spinner,
  dropdownPosition,
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...commonColors,
    primary1: colors.blue, // action buttons
    primary2: colors.darkBlue, // hover actions button
    primary3: colors.darkGray, // hover elements in board or items
    secondary1: colors.gray, // borders
    secondary2: colors.semiGray, // additional text
    additional1: colors.dark, // dark text
    additional2: colors.white, // white text
    additional3: colors.lightGray, // background
  },
};

export const darkTheme = lightTheme;
