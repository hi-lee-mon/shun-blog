import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';

type Props = {
  children: React.ReactNode;
  router: Router;
};

// TODO: routerより、パスを表示する
const Main = ({ children }: Props) => {
  return (
    <Box as='main' mx={{ base: 0, lg: 24, xl: 40 }}>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>Shun Blog</title>
      </Head>
      <Box px={4}>{children}</Box>
    </Box>
  );
};

export default Main;
