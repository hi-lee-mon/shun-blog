import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { Router } from 'next/router';
import Header from './header';

type Props = {
  children: any;
  router: Router;
  path: string;
};

const Layout = ({ children, router, path }: Props) => {
  return (
    <Box>
      <Header path={path} />
      <Box as='main'>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <title>Shun Blog</title>
        </Head>
        <Container maxW='container.sm' pt={14}>
          {children}
        </Container>
      </Box>
      <Box as='footer'>test</Box>
    </Box>
  );
};

export default Layout;
