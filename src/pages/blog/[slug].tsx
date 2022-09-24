import { Button } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
// TODO:ESLint解決
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'; // eslint-disable-line
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { MoveHeaderPositionButton } from '@/components/moveHeaderPositionButton';
import YouTube from '@/components/youtube';
import { getPath, getPostFromSlug, getSlugs, PostMeta } from '@/lib/common';
import 'highlight.js/styles/atom-one-dark.css';

export const getStaticPaths: GetStaticPaths = async () => {
  const targetPath = getPath('blog');
  const slugs = getSlugs(targetPath);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const targetPath = getPath('blog');
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug, targetPath);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeHighlight],
    },
  });
  return {
    props: { post: { source: mdxSource, meta } },
  };
};

/**
 * Component
 */
type Props = {
  post: { source: MDXRemoteSerializeResult<Record<string, unknown>>; meta: PostMeta };
};

export default function PostPage({ post }: Props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{Date.parse(post.meta.title)}</title>
      </Head>
      <Button title='back to lists' onClick={() => router.push('/blog')} mb={4}>
        一覧へ戻る
      </Button>
      <article>
        <MDXRemote {...post.source} components={{ YouTube, Image }} />
      </article>
      <MoveHeaderPositionButton />
    </>
  );
}