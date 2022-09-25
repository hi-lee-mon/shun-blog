import { Router } from 'next/router';
import Footer from './footer';
import Header from './header';
import Main from './main';

type Props = {
  children: React.ReactNode;
  router: Router;
};

const Layout = ({ children, router }: Props) => {
  return (
    <>
      <Header path={router.asPath} />
      <Main router={router}>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
