import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#202023',
        color: '#DEDEDE',
      },
    }),
  },
  fonts: {
    body: "'Noto Sans JP'",
  },
});
