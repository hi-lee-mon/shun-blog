import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '@/components/layouts/layout';
import { MDXComponents } from '@/lib/mdxComponents';
import { theme } from '@/theme/theme';

// const taregetPath = getPath('blog');
// const duplicateTags = getAllPosts(taregetPath).flatMap((post) => post.meta.tags);
// const tags = Array.from(new Set(duplicateTags));

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </MDXProvider>
  );
}

export default Website;
