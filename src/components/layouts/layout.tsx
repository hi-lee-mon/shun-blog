import { Router } from 'next/router';
import { MoveHeaderPositionButton } from '../moveHeaderPositionButton';
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
      <Main router={router}>
        {children}
        <MoveHeaderPositionButton />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
