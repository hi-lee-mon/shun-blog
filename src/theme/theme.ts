import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: () => ({
    body: {
      bg: '#202023',
      color: '#DEDEDE',
    },
  }),
};

const fonts = {
  body: "'Noto Sans JP'",
};

export const theme = extendTheme({ styles, fonts });
