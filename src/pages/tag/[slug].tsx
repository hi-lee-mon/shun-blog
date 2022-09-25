import { Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getPath, getAllPosts, PostMeta } from '@/lib/common';
import Blog from '@/pages/blog';

export const getStaticPaths: GetStaticPaths = async () => {
  const path = getPath('blog');
  const posts = getAllPosts(path);
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const path = getPath('blog');
  const posts = getAllPosts(path).filter((post) => post.meta.tags.includes(slug));
  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

type Props = {
  slug: string;
  posts: PostMeta[];
};

export default function TagPage({ slug, posts }: Props) {
  const router = useRouter();
  const selectedTag = router.asPath.split('/').at(-1);
  return (
    <>
      <Head>
        <title>Tag:{slug}</title>
      </Head>
      <Text fontSize='lg' py={4}>
        選択中のタグ：{selectedTag}
      </Text>
      <Blog posts={posts} />
    </>
  );
}
