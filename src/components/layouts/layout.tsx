import { Box } from '@chakra-ui/react';
import { Router } from 'next/router';
import Footer from './footer';
import Header from './header';
import Main from './main';

type Props = {
  children: any;
  router: Router;
  path: string;
};

const Layout = ({ children, router, path }: Props) => {
  return (
    <Box maxW={'1920px'} margin='0 auto'>
      <Header path={path} />
      <Main router={router}>{children}</Main>
      <Footer />
    </Box>
  );
};

export default Layout;
