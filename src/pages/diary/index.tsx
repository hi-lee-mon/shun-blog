import { Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { FC } from 'react';
import Section from '@/components/section';
import { getAllPosts, getPath, PostMeta } from '@/lib/common';

type DiaryCardProps = {
  post: PostMeta;
};

const DiaryCard: FC<DiaryCardProps> = ({ post }) => (
  <NextLink href={`/diary/${post.slug}`} passHref>
    <Link
      display='block'
      w={{ base: '100%', lg: '70%', xl: '70%' }}
      transition='all 0.3s 0s ease'
      _hover={{ textDecoration: 'none', transform: { base: 'scale(1.05)', lg: 'scale(1.1)', xl: 'scale(1.1)' } }}
    >
      <Flex flexDirection='column' border='1px' borderRadius='10px' padding='16px'>
        <Text as='p'>{post.date}</Text>
        <Heading as='h2' fontSize='24px'>
          {post.title}
        </Heading>
        <Text as='p' p='4px' overflow='hidden' display='-webkit-box' sx={{ WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}>
          {post.excerpt}
        </Text>
      </Flex>
    </Link>
  </NextLink>
);

export async function getStaticProps() {
  const taregetPath = getPath('diary');
  const posts = getAllPosts(taregetPath)
    .slice(0, 9)
    .map((post) => post.meta);
  return { props: { posts } };
}

type DiaryProps = {
  posts: PostMeta[];
};
const Diary: NextPage<DiaryProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>The Shun Diary</title>
        <meta name='description' content='The Shun Diary' />
      </Head>
      <Stack gap={4}>
        {posts.map((post, i) => (
          <Section key={post.slug} delay={`0.${i}s`}>
            <Center>
              <DiaryCard post={post} />
            </Center>
          </Section>
        ))}
      </Stack>
    </>
  );
};

export default Diary;
