import { Button } from '@chakra-ui/react';
import React from 'react';

export const MoveHeaderPositionButton = () => {
  return (
    <Button
      as='a'
      aria-label='move to header position'
      variant='outline'
      position='fixed'
      bottom={{ base: 16, lg: 4, xl: 4 }}
      right={{ base: 4, lg: 24, xl: 24 }}
      href='#header'
    >
      ↑
    </Button>
  );
};
