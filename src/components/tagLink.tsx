import { Tag } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { colors } from '@/theme/theme';

const TagLink: FC<{ tag: string }> = ({ tag }) => {
  return (
    <NextLink key={tag} href={`/tag/${tag}`} passHref>
      <Tag as='a' bg={colors.gray} color={colors.white}>
        {tag}
      </Tag>
    </NextLink>
  );
};

export default TagLink;
