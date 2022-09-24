import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  title: string;
  date: string;
};

const Card: FC<Props> = ({ title, date }) => {
  return (
    // container
    <Flex flexDirection='column' border='1px solid #56A4EC' borderRadius='8px' maxW='320px' h='424px' mb={12}>
      <Image src='/images/hum.jpg' alt='post image' borderRadius='8px 8px 0 0' />
      {/* meta */}
      <Flex flexDirection='column' px={4} py={4} gap={4}>
        <Heading as='h2' fontSize='xl'>
          {title}
        </Heading>
        <Box as='span' fontSize='md'>
          {date} 公開
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
