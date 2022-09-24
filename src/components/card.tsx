import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { FC } from 'react';
import { PostMeta } from '@/lib/common';

type Props = {
  post: PostMeta;
};
const Card: FC<Props> = ({ post }) => {
  return (
    <NextLink href={`/blog/${post.slug}`} passHref>
      <Link>
        <Flex
          flexDirection='column'
          border='1px solid #56A4EC'
          borderRadius='8px'
          maxW='320px'
          minH='400px'
          _hover={{ boxShadow: '0px 0px 8px 0px #56a4ec' }}
        >
          {/* image */}
          <Image src={post.image} alt={post.alt} borderRadius='8px 8px 0 0' />
          <Flex flexDirection='column' px={4} py={8} gap={1}>
            {/* date */}
            <Box as='span' fontSize='md'>
              {post.date} 公開
            </Box>
            {/* title */}
            <Heading as='h2' fontSize='2xl'>
              {post.title}
            </Heading>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default Card;
