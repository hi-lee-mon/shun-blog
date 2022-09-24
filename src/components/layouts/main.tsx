import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';

type Props = {
  children: any;
  router: Router;
};

// TODO: routerより、パスを表示する
const Main = ({ children }: Props) => {
  return (
    <Box as='main' m='0 200px'>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>Shun Blog</title>
      </Head>
      <Box px={50}>{children}</Box>
    </Box>
  );
};

export default Main;
