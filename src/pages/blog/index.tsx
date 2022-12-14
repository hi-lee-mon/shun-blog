import { Center, Flex, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '@/components/card';
import Section from '@/components/section';
import TagLink from '@/components/tagLink';
import { getAllPosts, getPath, PostMeta } from '@/lib/common';

export async function getStaticProps() {
  const taregetPath = getPath('blog');
  const posts = getAllPosts(taregetPath)
    .slice(0, 9)
    .map((post) => post.meta);
  return { props: { posts } };
}

type Props = {
  posts: PostMeta[];
};
const Blog: NextPage<Props> = ({ posts }) => {
  const depTags = posts.flatMap((post) => post.tags);
  const tags = Array.from(new Set(depTags));
  return (
    <>
      <Head>
        <title>The Shun Blog</title>
        <meta name='description' content='The Shun Blog' />
        <meta name='description' content={`${posts.length} articles on JavaScript, TypeScript, React, Testing, Career, and more.`} />
      </Head>
      <Section>
        <Flex flexDirection='column' gap={2} mb={8} pl={{ base: 0, lg: 12, xl: 40 }}>
          <p>タグで絞りこむ：</p>
          <Flex flexWrap='wrap' gap={4}>
            {tags.map((tag) => (
              <TagLink key={tag} tag={tag} />
            ))}
          </Flex>
        </Flex>
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
};

export default Blog;
