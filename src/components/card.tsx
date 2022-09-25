import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import React, { FC } from 'react';
import TagLink from './tagLink';
import { PostMeta } from '@/lib/common';
import { colors } from '@/theme/theme';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #56a4ec;
  border-radius: 8px;
  max-width: 320px;
  min-height: 400px;
  transition: all 0.3s 0s ease;
  &:hover {
    box-shadow: 0px 0px 8px 0px ${colors.blue};
  }
`;

type Props = {
  post: PostMeta;
};
const Card: FC<Props> = ({ post }) => {
  return (
    <StyledCard>
      <NextLink href={`/blog/${post.slug}`} passHref>
        <a>
          {/* image */}
          <Image src={`/${post.image}`} alt={post.alt} borderRadius='8px 8px 0 0' />
          <Flex flexDirection='column' px={4} pt={8} gap={1}>
            {/* date */}
            <Box as='span' fontSize='md'>
              {post.date} 投稿
            </Box>
            {/* title */}
            <Heading as='h2' fontSize='2xl'>
              {post.title}
            </Heading>
          </Flex>
        </a>
      </NextLink>
      <Flex flexWrap='wrap' px={4} py={8} gap={3}>
        {post.tags.map((tag) => (
          <TagLink key={tag} tag={tag} />
        ))}
      </Flex>
    </StyledCard>
  );
};

export default Card;
