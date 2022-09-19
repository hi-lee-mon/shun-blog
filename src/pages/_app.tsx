import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/layout';
import { theme } from '@/theme/theme';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router} path=''>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
