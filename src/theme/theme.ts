import { extendTheme } from '@chakra-ui/react';

export const colors = {
  blcak: '#202023',
  white: '#DEDEDE',
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

const fonts = {
  body: "'Noto Sans JP'",
};

export const theme = extendTheme({ styles, fonts });
