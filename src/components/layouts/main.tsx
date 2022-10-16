import { Box } from '@chakra-ui/react';
import { Router } from 'next/router';

type Props = {
  children: React.ReactNode;
  router: Router;
};

// TODO: routerより、パスを表示する
const Main = ({ children }: Props) => {
  return (
    <Box as='main' mx={{ base: 0, lg: 24, xl: 40 }}>
      <Box px={4}>{children}</Box>
    </Box>
  );
};

export default Main;
