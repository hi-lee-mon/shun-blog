import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Card from '@/components/card';
import Section from '@/components/section';
import { getPath, getAllPosts, PostMeta } from '@/lib/common';

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
  return (
    <>
      <Head>
        <title>Tag:{slug}</title>
      </Head>
      <Section>
        <Text fontSize='lg' py={4} pl={{ base: 0, lg: 12, xl: 40 }}>
          選択中のタグ： {slug}
        </Text>
        <Center>
          <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacingY={8} spacingX={4}>
            {posts.map((post) => (
              <Card key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        </Center>
      </Section>
    </>
  );
}
