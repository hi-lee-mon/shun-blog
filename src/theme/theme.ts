import { extendTheme } from '@chakra-ui/react';

export const colors = {
  blcak: '#202023',
  white: '#DCDCDC',
  gray: '#2e3039',
  blue: '#56a4ec',
};

const styles = {
  global: () => ({
    body: {
      bg: colors.blcak,
      color: colors.white,
    },
  }),
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '1620',
  '2xl': '96em',
};

const fonts = {
  body: "'Noto Sans JP'",
};

export const theme = extendTheme({ styles, fonts, breakpoints });
